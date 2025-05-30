import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import DocsLayout from "./components/DocsLayout";
import { DynamicDocPage } from "./components/DynamicDocPage";
import NotFound from "./pages/NotFound";

// Import existing page components (keeping only the ones that don't conflict with markdown)
import Installation from "./pages/docs/Installation";
import QuickStart from "./pages/docs/QuickStart";
import ApiReference from "./pages/docs/ApiReference";
import Integrations from "./pages/docs/Integrations";
import Examples from "./pages/docs/Examples";
import Troubleshooting from "./pages/docs/Troubleshooting";
import QuickGuides from "./pages/docs/QuickGuides";
import LongTermMemoryGuide from "./pages/docs/LongTermMemoryGuide";

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
              {/* Legacy routes for compatibility - keeping only non-conflicting ones */}
              <Route path="installation" element={<Installation />} />
              <Route path="quick-start" element={<QuickStart />} />
              <Route path="api-reference" element={<ApiReference />} />
              <Route path="integrations" element={<Integrations />} />
              <Route path="examples" element={<Examples />} />
              
              {/* Specific routes that we want to handle with existing components */}
              <Route path="meet-pieces/*" element={<DynamicDocPage />} />
              <Route path="troubleshooting" element={<Troubleshooting />} />
              <Route path="quick-guides" element={<QuickGuides />} />
              <Route path="long-term-memory-guide" element={<LongTermMemoryGuide />} />
              
              {/* Dynamic content routes - catch all other routes including getting-started */}
              <Route path="*" element={<DynamicDocPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
