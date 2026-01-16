import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";
import { leads } from "@shared/schema";
import { eq } from "drizzle-orm";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post(api.lead.create.path, async (req, res) => {
    try {
      const input = api.lead.create.input.parse(req.body);
      
      // 1. Save to database
      const lead = await storage.createLead(input);

      // 2. Forward to Make Webhook (if URL exists)
      const webhookUrl = process.env.MAKE_WEBHOOK_URL;
      if (webhookUrl) {
        try {
          const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lead)
          });

          if (response.ok) {
             await db.update(leads)
               .set({ processedToWebhook: true })
               .where(eq(leads.id, lead.id));
          } else {
            console.error(`Webhook failed: ${response.statusText}`);
          }
        } catch (webhookError) {
          console.error("Error sending to webhook:", webhookError);
          // Don't fail the request to the user if webhook fails, just log it
        }
      } else {
        console.warn("MAKE_WEBHOOK_URL not set, skipping forwarding.");
      }

      res.status(200).json({ success: true, message: "Inquiry received. We will contact you soon." });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
