import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const NEIGHBORHOODS = [
  { 
    name: "Silver Lake", 
    desc: "The creative heart of Eastside L.A.",
    img: "https://images.unsplash.com/photo-1516137207436-a14cd51bd730?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    name: "Los Feliz", 
    desc: "Historic charm meets hillside luxury.",
    img: "https://images.unsplash.com/photo-1444723121867-26b5d64e859c?q=80&w=2074&auto=format&fit=crop" 
  },
  { 
    name: "Studio City", 
    desc: "Valley convenience with upscale flair.",
    img: "https://images.unsplash.com/photo-1588612502662-79354784a6a5?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    name: "Sherman Oaks", 
    desc: "Suburban comfort, city access.",
    img: "https://images.unsplash.com/photo-1627916607164-7b9c910a9762?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    name: "Santa Monica", 
    desc: "Iconic coastal living.",
    img: "https://images.unsplash.com/photo-1456942004245-09556213459c?q=80&w=2071&auto=format&fit=crop" 
  },
  { 
    name: "Brentwood", 
    desc: "Exclusive, elegant, and refined.",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    name: "Pacific Palisades", 
    desc: "Where the mountains meet the sea.",
    img: "https://images.unsplash.com/photo-1595521624992-48a59aef95e3?q=80&w=1974&auto=format&fit=crop" 
  },
  { 
    name: "Venice", 
    desc: "Bohemian spirit, modern edge.",
    img: "https://images.unsplash.com/photo-1533256086774-703c152431fa?q=80&w=2070&auto=format&fit=crop" 
  }
];

export default function Neighborhoods() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Neighborhoods</h1>
            <p className="text-muted-foreground font-light text-lg">
              Los Angeles is a city of distinct villages. Explore the communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEIGHBORHOODS.map((hood) => (
              <Link key={hood.name} href={`/contact?message=Interested in ${hood.name}`}>
                <div className="group cursor-pointer">
                  <div className="aspect-square overflow-hidden mb-4 relative bg-gray-100">
                    <img 
                      src={hood.img} 
                      alt={hood.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl mb-1 group-hover:text-primary/70 transition-colors">{hood.name}</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{hood.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
