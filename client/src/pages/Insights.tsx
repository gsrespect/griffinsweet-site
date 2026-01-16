import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";

const POSTS = [
  {
    id: 1,
    title: "Market Update Q3 2024",
    excerpt: "Interest rates stabilize as inventory in Eastside neighborhoods remains tight.",
    date: "Oct 12, 2024",
    category: "Market Report",
    img: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "The Architecture of Silver Lake",
    excerpt: "Exploring the mid-century modern gems hidden in the hills.",
    date: "Sep 28, 2024",
    category: "Design",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Preparing Your Home for Sale",
    excerpt: "Five essential steps to maximize value before listing.",
    date: "Sep 15, 2024",
    category: "Sellers",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
  }
];

export default function Insights() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-12">Insights</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {POSTS.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-[16/9] overflow-hidden mb-6 bg-gray-100">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-xs uppercase tracking-widest text-muted-foreground">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif group-hover:text-primary/70 transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{post.excerpt}</p>
                  <div className="pt-2">
                    <span className="text-xs uppercase tracking-widest border-b border-primary pb-1">Read Article</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
