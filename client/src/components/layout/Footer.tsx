import { Link } from "wouter";
import maltmanLogo from "@assets/Maltman_logo_1768592907683.png";
import agencySymbol from "@assets/agency_symbol_logo_1768606850892.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
               <img 
                 src={agencySymbol} 
                 alt="The Agency Symbol" 
                 className="h-8 w-auto invert brightness-0"
               />
               <img 
                 src={maltmanLogo} 
                 alt="Maltman Logo" 
                 className="h-8 w-auto invert brightness-0"
               />
            </div>
            <div>
              <h3 className="font-serif text-2xl tracking-tighter text-white mb-2">Griffin Sweet</h3>
              <p className="text-xs uppercase tracking-widest opacity-60">The Agency Real Estate</p>
            </div>
            <div className="space-y-2 text-sm text-gray-400 font-light">
              <p>CA DRE 02078712</p>
              <p>310.339.1171</p>
              <p>Griffin.Sweet@TheAgencyRE.com</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="uppercase tracking-widest text-xs font-semibold text-white">Navigate</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/home-search" className="hover:text-white transition-colors">Home Search</Link></li>
              <li><Link href="/neighborhoods" className="hover:text-white transition-colors">Neighborhoods</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="uppercase tracking-widest text-xs font-semibold text-white">Neighborhoods</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><Link href="/neighborhoods" className="hover:text-white transition-colors">Mar Vista</Link></li>
              <li><Link href="/neighborhoods" className="hover:text-white transition-colors">Santa Monica</Link></li>
              <li><Link href="/neighborhoods" className="hover:text-white transition-colors">Brentwood</Link></li>
              <li><Link href="/neighborhoods" className="hover:text-white transition-colors">Pacific Palisades</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="uppercase tracking-widest text-xs font-semibold text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="pt-4 flex items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all">
               <span className="border border-white/20 p-2 text-[10px] leading-tight inline-block text-white/60">
                 EQUAL HOUSING<br/>OPPORTUNITY
               </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light">
          <p>&copy; {new Date().getFullYear()} Griffin Sweet Real Estate. All rights reserved.</p>
          <p className="mt-4 md:mt-0">THEAGENCY – A Global Marketing and Sales Organization</p>
        </div>
      </div>
    </footer>
  );
}
