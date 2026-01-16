import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center pt-32 pb-12">
        <div className="text-center px-4">
          <h1 className="font-serif text-6xl mb-4">404</h1>
          <p className="text-xl text-muted-foreground font-light mb-8">Page Not Found</p>
          <Link href="/" className="inline-block px-8 py-3 bg-primary text-primary-foreground uppercase tracking-widest text-xs hover:bg-primary/90">
            Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
