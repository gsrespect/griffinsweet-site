import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeadForm } from "@/components/LeadForm";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-6xl font-serif mb-8">Contact</h1>
              <p className="text-xl font-light text-muted-foreground mb-12 max-w-lg">
                Whether you're looking to buy, sell, or just want to discuss the market, I'm here to help.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Phone</h3>
                  <p className="text-xl font-serif">310.339.1171</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</h3>
                  <p className="text-xl font-serif">Griffin.Sweet@TheAgencyRE.com</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Office</h3>
                  <p className="text-lg font-serif">The Agency</p>
                  <p className="font-light text-muted-foreground">Beverly Hills / Los Angeles</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 md:p-12">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
