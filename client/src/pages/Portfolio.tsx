import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock data based on schema structure
const TRANSACTIONS = [
  {
    id: "1",
    address_display: "1234 Sunset Blvd",
    city: "Los Angeles",
    neighborhood: "Silver Lake",
    role: "Seller",
    close_price: "$2,450,000",
    photo_url: "https://images.unsplash.com/photo-1600596542815-e328701102b9?q=80&w=2069&auto=format&fit=crop",
    beds: 3,
    baths: 2.5
  },
  {
    id: "2",
    address_display: "555 Ocean Ave",
    city: "Santa Monica",
    neighborhood: "Santa Monica",
    role: "Buyer",
    close_price: "$4,100,000",
    photo_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    beds: 4,
    baths: 4
  },
  {
    id: "3",
    address_display: "789 Hillhurst Ave",
    city: "Los Angeles",
    neighborhood: "Los Feliz",
    role: "Both",
    close_price: "$3,200,000",
    photo_url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    beds: 4,
    baths: 3
  },
  {
    id: "4",
    address_display: "321 Venice Way",
    city: "Venice",
    neighborhood: "Venice",
    role: "Buyer",
    close_price: "$2,850,000",
    photo_url: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop",
    beds: 2,
    baths: 2
  }
];

export default function Portfolio() {
  const [filterRole, setFilterRole] = useState<string>("All");

  const filteredTransactions = filterRole === "All" 
    ? TRANSACTIONS 
    : TRANSACTIONS.filter(t => t.role === filterRole || t.role === "Both");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Selected Transactions</h1>
          
          <div className="flex space-x-6 border-b border-gray-100 pb-4 mb-12 overflow-x-auto">
            {["All", "Buyer", "Seller"].map((role) => (
              <button
                key={role}
                onClick={() => setFilterRole(role)}
                className={`uppercase tracking-widest text-xs py-2 transition-colors ${
                  filterRole === role 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {role} Representative
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence>
              {filteredTransactions.map((t) => (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[16/10] overflow-hidden mb-4 bg-gray-100 relative">
                    <img 
                      src={t.photo_url} 
                      alt={t.address_display} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest font-semibold">
                      {t.role === "Both" ? "Buyer & Seller" : t.role}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="font-serif text-2xl mb-1">{t.address_display}</h3>
                      <p className="text-muted-foreground text-sm uppercase tracking-wider">{t.neighborhood}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-xl">{t.close_price}</p>
                      <p className="text-xs text-muted-foreground font-light">{t.beds} BD | {t.baths} BA</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-20 text-center">
            <a 
              href="https://www.theagencyre.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border-b border-primary pb-1 text-sm uppercase tracking-widest hover:text-muted-foreground transition-colors"
            >
              View Full Portfolio on The Agency
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
