import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeadForm } from "@/components/LeadForm";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* unsplash: modern luxury living room with floor to ceiling windows overlooking los angeles skyline */}
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 text-white px-4 md:px-8 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-6">
              Curating Los Angeles<br />
              <span className="italic font-light opacity-90">Finest Living</span>
            </h1>
            <p className="text-lg md:text-xl font-light max-w-2xl mb-10 tracking-wide opacity-90">
              Specializing in luxury properties across Silver Lake, Los Feliz, and the Westside. 
              Elevating the standard of real estate representation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/home-search" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black uppercase tracking-widest text-sm hover:bg-white/90 transition-colors">
                Search Homes
              </Link>
              <Link href="/neighborhoods" className="inline-flex items-center justify-center px-8 py-4 border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
                Explore Neighborhoods
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* unsplash: handsome professional man in suit portrait real estate agent */}
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                  alt="Griffin Sweet" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-serif">Griffin Sweet</h2>
              <div className="w-20 h-px bg-primary/20" />
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                As a premier agent with The Agency, Griffin brings a unique blend of market expertise 
                and design sensibility to every transaction. Whether you are buying your first home 
                in Silver Lake or selling a luxury estate in Pacific Palisades, Griffin provides 
                white-glove service tailored to your lifestyle.
              </p>
              <Link href="/about" className="group inline-flex items-center text-primary uppercase tracking-widest text-sm border-b border-primary/20 pb-1 hover:border-primary transition-all">
                Read Full Bio
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Neighborhoods */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Featured Neighborhoods</h2>
            <p className="text-muted-foreground font-light">Discover the most sought-after communities in Los Angeles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Silver Lake", img: "https://images.unsplash.com/photo-1516137207436-a14cd51bd730?q=80&w=2070&auto=format&fit=crop" },
              { name: "Los Feliz", img: "https://images.unsplash.com/photo-1444723121867-26b5d64e859c?q=80&w=2074&auto=format&fit=crop" },
              { name: "Santa Monica", img: "https://images.unsplash.com/photo-1456942004245-09556213459c?q=80&w=2071&auto=format&fit=crop" }
            ].map((neighborhood, i) => (
              <Link key={neighborhood.name} href="/neighborhoods">
                <div className="group relative aspect-[4/5] overflow-hidden cursor-pointer">
                  <img 
                    src={neighborhood.img} 
                    alt={neighborhood.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-serif text-white mb-2">{neighborhood.name}</h3>
                    <span className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 inline-block">
                      View Properties
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/neighborhoods" className="inline-flex items-center px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors uppercase tracking-widest text-xs">
              View All Neighborhoods
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <LeadForm className="bg-white p-0" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
