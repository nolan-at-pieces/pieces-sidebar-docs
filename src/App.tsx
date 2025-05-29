
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import DocsLayout from "./components/DocsLayout";
import GettingStarted from "./pages/docs/GettingStarted";
import Installation from "./pages/docs/Installation";
import QuickStart from "./pages/docs/QuickStart";
import ApiReference from "./pages/docs/ApiReference";
import Integrations from "./pages/docs/Integrations";
import Examples from "./pages/docs/Examples";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="pieces-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/docs" element={<DocsLayout />}>
              <Route path="getting-started" element={<GettingStarted />} />
              <Route path="installation" element={<Installation />} />
              <Route path="quick-start" element={<QuickStart />} />
              <Route path="api-reference" element={<ApiReference />} />
              <Route path="integrations" element={<Integrations />} />
              <Route path="examples" element={<Examples />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
