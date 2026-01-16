import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import HomeSearch from "@/pages/HomeSearch";
import Neighborhoods from "@/pages/Neighborhoods";
import Insights from "@/pages/Insights";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Track pageview
    if (window.widgetTracker) {
      window.widgetTracker("send", "pageview");
    }
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/home-search" component={HomeSearch} />
      <Route path="/neighborhoods" component={Neighborhoods} />
      <Route path="/insights" component={Insights} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Initialize WidgetTracker
    (function(w: any, i: string, d: Document, g: string, e: string, t: any) {
      w["WidgetTrackerObject"] = g;
      w[g] = w[g] || function() {
        (w[g].q = w[g].q || []).push(arguments);
      };
      w[g].ds = 1 * (new Date() as any);
      const s = d.createElement("script");
      s.async = true;
      s.src = i;
      const f = d.getElementsByTagName("script")[0];
      f.parentNode?.insertBefore(s, f);
    })(window, "https://widgetbe.com/agent", document, "widgetTracker", "script", null);

    if (window.widgetTracker) {
      window.widgetTracker("create", "WT-FFQUWKYJ");
      window.widgetTracker("send", "pageview");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

// Add type definition for global widgetTracker
declare global {
  interface Window {
    widgetTracker: any;
  }
}

export default App;
