
import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  intent: text("intent").notNull(), // Buyer, Seller, Not sure
  timeline: text("timeline"),
  message: text("message"),
  pageUrl: text("page_url"),
  referrer: text("referrer"),
  utmSource: text("utm_source"),
  utmMedium: text("utm_medium"),
  utmCampaign: text("utm_campaign"),
  utmTerm: text("utm_term"),
  utmContent: text("utm_content"),
  consent: boolean("consent").notNull().default(false), // Optional opt-in
  processedToWebhook: boolean("processed_to_webhook").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertLeadSchema = createInsertSchema(leads).omit({
  id: true,
  createdAt: true,
  processedToWebhook: true
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;

export const transactionSchema = z.object({
  id: z.string(),
  address_display: z.string(),
  city: z.string(),
  zip: z.string(),
  neighborhood: z.string(),
  property_type: z.string(),
  role: z.enum(["Buyer", "Seller", "Both"]),
  close_date: z.string(),
  close_price: z.string(),
  beds: z.number(),
  baths: z.number(),
  sqft: z.number(),
  notes: z.string(),
  photo_url: z.string().optional(),
  external_url: z.string().optional()
});

export type Transaction = z.infer<typeof transactionSchema>;
