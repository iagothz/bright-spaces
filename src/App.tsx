import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cursos from "./pages/Cursos";
import Contato from "./pages/Contato";
import TrabalheConosco from "./pages/TrabalheConosco";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename="/bright-spaces">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/bright-spaces" element={<Index />} />
          <Route path="/bright-spaces/cursos" element={<Cursos />} />
          <Route path="/bright-spaces/contato" element={<Contato />} />
          <Route path="/bright-spaces/trabalhe-conosco" element={<TrabalheConosco />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
