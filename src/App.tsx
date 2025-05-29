
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
import MeetPieces from "./pages/docs/MeetPieces";
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
              <Route path="getting-started" element={<GettingStarted />} />
              <Route path="installation" element={<Installation />} />
              <Route path="quick-start" element={<QuickStart />} />
              <Route path="api-reference" element={<ApiReference />} />
              <Route path="integrations" element={<Integrations />} />
              <Route path="examples" element={<Examples />} />
              <Route path="meet-pieces" element={<MeetPieces />} />
              <Route path="meet-pieces/fundamentals" element={<div>Fundamentals Page</div>} />
              <Route path="meet-pieces/installation-windows" element={<div>Installation Guide | Windows</div>} />
              <Route path="meet-pieces/installation-macos" element={<div>Installation Guide | macOS</div>} />
              <Route path="meet-pieces/installation-linux" element={<div>Installation Guide | Linux</div>} />
              <Route path="troubleshooting" element={<Troubleshooting />} />
              <Route path="troubleshooting/cross-platform" element={<div>Cross-Platform Troubleshooting</div>} />
              <Route path="troubleshooting/macos" element={<div>macOS Troubleshooting</div>} />
              <Route path="troubleshooting/windows" element={<div>Windows Troubleshooting</div>} />
              <Route path="troubleshooting/linux" element={<div>Linux Troubleshooting</div>} />
              <Route path="quick-guides" element={<QuickGuides />} />
              <Route path="quick-guides/overview" element={<div>Overview Page</div>} />
              <Route path="quick-guides/long-term-memory" element={<div>Using Long-Term Memory Context</div>} />
              <Route path="quick-guides/copilot-context" element={<div>Using Pieces Copilot with Context</div>} />
              <Route path="long-term-memory-guide" element={<LongTermMemoryGuide />} />
              <Route path="long-term-memory-guide/use-cases" element={<div>Use Cases and Example Prompts</div>} />
              <Route path="long-term-memory-guide/workstream-activity" element={<div>Use Cases for the Pieces Workstream Activity View</div>} />
              <Route path="long-term-memory-guide/prompting-tips" element={<div>General Long-Term Memory Prompting Tips</div>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
