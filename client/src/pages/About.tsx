import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeadForm } from "@/components/LeadForm";
import griffinHeadshot from "@assets/leather_1_final_1768527704532.jpeg";

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
              <strong className="text-primary font-medium">Griffin Sweet</strong> is a Los Angeles native and Estates Agent known for his polished, strategic, and highly personalized approach to representing luxury homes across the city. With deep roots in LA and a refined understanding of its architecture, micro-markets, and lifestyle patterns, Griffin guides clients through complex transactions with clarity, discretion, and exceptional attention to detail.
            </p>
            <p>
              Griffin's career has been shaped within The Agency's top-performing ranks, where he has worked alongside many of the firm's most accomplished agents on numerous significant transactions across Los Angeles. This hands-on exposure to high-value estates, new construction properties, and architecturally notable homes has given him a comprehensive understanding of pricing, presentation, and negotiation at the highest level.
            </p>
            <p>
              Within The Agency, Griffin has earned multiple internal honors—including the All-Star Award and Rising Star Award—recognizing his professionalism, consistency, and continued upward momentum. He is ranked year over year in the top 1% of agents nationwide, underscoring his performance and standing within the industry. His work and expertise have also been featured in premier publications such as <span className="italic font-medium text-primary">The Wall Street Journal</span> and <span className="italic font-medium text-primary">Deadline Hollywood</span>.
            </p>
            
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border">
              <div>
                <h3 className="font-serif text-3xl text-primary mb-2">Top 1%</h3>
                <p className="text-[10px] uppercase tracking-widest">Nationwide Ranking</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-primary mb-2">All-Star</h3>
                <p className="text-[10px] uppercase tracking-widest">The Agency Award</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-primary mb-2">Rising Star</h3>
                <p className="text-[10px] uppercase tracking-widest">The Agency Award</p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-primary mb-2">WSJ / Deadline</h3>
                <p className="text-[10px] uppercase tracking-widest">Featured In</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={griffinHeadshot} 
              alt="Griffin Sweet Portrait" 
              className="w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
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
