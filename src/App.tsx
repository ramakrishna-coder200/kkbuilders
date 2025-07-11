import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Waterproofing from "./pages/Waterproofing";
import FlooringSolutions from "./pages/FlooringSolutions";
import StructuralRepairs from "./pages/StructuralRepairs";
import Coatings from "./pages/CoatingsSealants";
import CrackInjectionPage from "./pages/CrackInjection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/waterproofing" element={<Waterproofing />} />
          <Route path="/flooring-solutions" element={<FlooringSolutions />} />
          <Route path="/structural-repairs" element={<StructuralRepairs />} />
                    <Route path="/coatings-sealants" element={<Coatings />} />
                                        <Route path="/crack-injection" element={<CrackInjectionPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
