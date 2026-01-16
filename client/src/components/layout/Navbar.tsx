import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Home Search", href: "/home-search" },
    { name: "Neighborhoods", href: "/neighborhoods" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-md border-border py-4"
          : "bg-transparent border-transparent py-6 text-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-50">
            <div className={`flex flex-col cursor-pointer transition-colors ${scrolled || isOpen ? "text-foreground" : "text-white"}`}>
              <span className="font-serif text-2xl tracking-tighter font-bold uppercase leading-none">
                Griffin Sweet
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase opacity-80 mt-1 font-sans">
                The Agency Real Estate
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`text-sm uppercase tracking-widest hover:opacity-60 transition-opacity ${scrolled ? "text-foreground" : "text-white"}`}>
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className={`
              px-6 py-2 border transition-all duration-300 text-sm uppercase tracking-widest
              ${scrolled 
                ? "border-foreground text-foreground hover:bg-foreground hover:text-background" 
                : "border-white text-white hover:bg-white hover:text-foreground"}
            `}>
              Schedule a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden z-50 p-2 transition-colors ${scrolled || isOpen ? "text-foreground" : "text-white"}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background pt-24 px-4 pb-8 lg:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-3xl font-serif text-foreground hover:text-muted-foreground transition-colors border-b border-border/50 pb-4">
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className="mt-8 flex items-center justify-between w-full bg-primary text-primary-foreground p-6">
                <span className="uppercase tracking-widest text-sm">Schedule a Call</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
