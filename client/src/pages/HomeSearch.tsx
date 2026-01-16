import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LeadForm } from "@/components/LeadForm";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function HomeSearch() {
  const [isMobile, setIsMobile] = useState(false);
  const IDX_URL = "https://www.themls.com/IDXNET/Default.aspx?wid=b01Wje8lbgFKViKluuKgwPaRPXrW75VUeI0PW5ZawIsnJdPzvX6HugEQLEQL";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Load IDX script
    const script = document.createElement("script");
    script.src = "https://www.themls.com/IDXNET/Scripts/idxwidget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-12 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Find Your Home</h1>
            <p className="text-muted-foreground font-light">
              Search the entire MLS database for active listings across Los Angeles.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            {isMobile ? (
              <div className="text-center p-8 border border-gray-100 bg-gray-50 max-w-sm w-full">
                <p className="mb-6 text-sm text-muted-foreground">
                  For the best map search experience on mobile, please open our full search portal.
                </p>
                <Button asChild className="w-full h-12 rounded-none bg-primary text-primary-foreground uppercase tracking-widest text-xs">
                  <a href={IDX_URL} target="_blank" rel="noopener noreferrer">
                    Open Search Portal <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            ) : (
              <iframe 
                id="idxFrame" 
                src={IDX_URL} 
                width="100%" 
                height="900" 
                style={{ border: 0, maxWidth: 1024, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }} 
                scrolling="no"
                title="Property Search"
              />
            )}
          </div>

          <div className="max-w-4xl mx-auto border-t border-gray-100 pt-16">
            <LeadForm />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
