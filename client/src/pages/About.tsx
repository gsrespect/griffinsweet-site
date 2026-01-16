import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeadForm } from "@/components/LeadForm";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-16 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">About Griffin Sweet</h1>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">The Agency Real Estate</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-8 text-lg font-light leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-primary font-medium">Griffin Sweet</strong> represents the new generation of real estate professionals. 
              With a background in architecture and design, Griffin brings a critical eye to every property, 
              helping buyers see potential where others don't, and helping sellers position their homes 
              to capture the imagination of the market.
            </p>
            <p>
              Based in Los Angeles, Griffin specializes in the Eastside neighborhoods of Silver Lake, 
              Echo Park, and Los Feliz, as well as the coastal communities of Santa Monica and Venice. 
              This broad market knowledge allows him to guide clients who are transitioning between 
              L.A.'s distinct lifestyle hubs.
            </p>
            <p>
              At The Agency, Griffin leverages a global network and world-class marketing resources 
              to ensure every listing receives maximum exposure. His approach is data-driven yet 
              deeply personal, understanding that a home is often a client's most significant financial and emotional asset.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-border">
              <div>
                <h3 className="font-serif text-3xl text-primary mb-2">$50M+</h3>
                <p className="text-xs uppercase tracking-widest">Sales Volume</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-primary mb-2">5+ Years</h3>
                <p className="text-xs uppercase tracking-widest">Market Experience</p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* unsplash: man in suit walking down luxury hallway */}
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" 
              alt="Griffin Sweet Portrait" 
              className="w-full h-auto shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-muted -z-10" />
          </div>
        </div>
      </div>

      <section className="bg-secondary/30 py-20 mt-12">
        <div className="container mx-auto px-4 max-w-4xl">
           <LeadForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
