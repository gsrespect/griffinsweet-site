import { useMutation } from "@tanstack/react-query";
import { api, type InsertLead } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateLead() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertLead) => {
      const res = await fetch(api.lead.create.path, {
        method: api.lead.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.lead.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit inquiry. Please try again.");
      }

      return api.lead.create.responses[200].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Received",
        description: "Thank you for contacting Griffin Sweet. We will be in touch shortly.",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: error.message,
      });
    },
  });
}
