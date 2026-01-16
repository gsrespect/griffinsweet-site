import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-lead";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import { useLocation, Link } from "wouter";

export function LeadForm({ className }: { className?: string }) {
  const [location] = useLocation();
  const createLead = useCreateLead();

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      intent: "Buyer",
      timeline: "",
      message: "",
      consent: false,
      pageUrl: window.location.href,
      referrer: document.referrer || "",
    },
  });

  const onSubmit = (data: InsertLead) => {
    createLead.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
        <div className="space-y-2">
          <h3 className="font-serif text-2xl text-primary">Get in Touch</h3>
          <p className="text-muted-foreground text-sm font-light">
            Start a conversation about your real estate goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} className="bg-white/50 border-gray-200 focus:border-black rounded-none transition-colors" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} className="bg-white/50 border-gray-200 focus:border-black rounded-none transition-colors" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="(555) 123-4567" {...field} className="bg-white/50 border-gray-200 focus:border-black rounded-none transition-colors" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="intent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>I am a...</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white/50 border-gray-200 focus:border-black rounded-none transition-colors">
                      <SelectValue placeholder="Select intent" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Buyer">Buyer</SelectItem>
                    <SelectItem value="Seller">Seller</SelectItem>
                    <SelectItem value="Not sure">Just exploring</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="timeline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Timeline (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="e.g. ASAP, 3 months, 6 months+" {...field} value={field.value || ""} className="bg-white/50 border-gray-200 focus:border-black rounded-none transition-colors" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (Optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="How can I help you?" {...field} value={field.value || ""} className="bg-white/50 border-gray-200 focus:border-black rounded-none transition-colors min-h-[100px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-muted/20">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="font-normal text-[10px] leading-relaxed text-muted-foreground">
                  I agree to be contacted by Griffin Sweet – The Agency Real Estate via call, email, and text for real estate services. To opt out, you can reply 'stop' at any time or reply 'help' for assistance. You can also click the unsubscribe link in the emails. Message and data rates may apply. Message frequency may vary. <Link href="/privacy" className="underline underline-offset-2 hover:text-primary">View Privacy Policy</Link>.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={createLead.isPending}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12 text-sm uppercase tracking-widest"
        >
          {createLead.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
}
