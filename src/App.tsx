
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Techniques from "./pages/Techniques";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AvailableTechniques from "./pages/AvailableTechniques";
import PayloadForm from "./pages/PayloadForm";
import Generate from "./pages/Generate";
import Summary from "./pages/Summary";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/techniques" element={<Techniques />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/available-techniques" element={<AvailableTechniques />} />
          <Route path="/payload-form" element={<PayloadForm />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/summary" element={<Summary />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
