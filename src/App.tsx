
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
              {/* Meet Pieces */}
              <Route path="meet-pieces" element={<MeetPieces />} />
              <Route path="meet-pieces/fundamentals" element={<div>Fundamentals Page</div>} />
              <Route path="meet-pieces/installation-windows" element={<div>Installation Guide | Windows</div>} />
              <Route path="meet-pieces/installation-macos" element={<div>Installation Guide | macOS</div>} />
              <Route path="meet-pieces/installation-linux" element={<div>Installation Guide | Linux</div>} />
              
              {/* Troubleshooting */}
              <Route path="troubleshooting" element={<Troubleshooting />} />
              <Route path="troubleshooting/cross-platform" element={<div>Cross-Platform Troubleshooting</div>} />
              <Route path="troubleshooting/macos" element={<div>macOS Troubleshooting</div>} />
              <Route path="troubleshooting/windows" element={<div>Windows Troubleshooting</div>} />
              <Route path="troubleshooting/linux" element={<div>Linux Troubleshooting</div>} />
              
              {/* Quick Guides */}
              <Route path="quick-guides" element={<QuickGuides />} />
              <Route path="quick-guides/overview" element={<div>Overview Page</div>} />
              <Route path="quick-guides/long-term-memory" element={<div>Using Long-Term Memory Context</div>} />
              <Route path="quick-guides/copilot-context" element={<div>Using Pieces Copilot with Context</div>} />
              
              {/* Long-Term Memory Guide */}
              <Route path="long-term-memory-guide" element={<LongTermMemoryGuide />} />
              <Route path="long-term-memory-guide/use-cases" element={<div>Use Cases and Example Prompts</div>} />
              <Route path="long-term-memory-guide/workstream-activity" element={<div>Use Cases for the Pieces Workstream Activity View</div>} />
              <Route path="long-term-memory-guide/prompting-tips" element={<div>General Long-Term Memory Prompting Tips</div>} />
              
              {/* Suite - Desktop App */}
              <Route path="suite/desktop-app" element={<div>Desktop App</div>} />
              <Route path="suite/desktop-app/download-install" element={<div>Download & Install</div>} />
              <Route path="suite/desktop-app/onboarding" element={<div>Onboarding</div>} />
              
              {/* Pieces Copilot */}
              <Route path="suite/desktop-app/pieces-copilot" element={<div>Pieces Copilot</div>} />
              <Route path="suite/desktop-app/pieces-copilot/interacting" element={<div>Interacting with Pieces Copilot</div>} />
              <Route path="suite/desktop-app/pieces-copilot/context-integration" element={<div>Context & Project Integration</div>} />
              <Route path="suite/desktop-app/pieces-copilot/configuring" element={<div>Configuring Pieces Copilot</div>} />
              <Route path="suite/desktop-app/pieces-copilot/multiple-environments" element={<div>Pieces Copilot in Multiple Environments</div>} />
              
              {/* Pieces Drive */}
              <Route path="suite/desktop-app/pieces-drive" element={<div>Pieces Drive</div>} />
              <Route path="suite/desktop-app/pieces-drive/saving-organizing" element={<div>Saving & Organizing Materials</div>} />
              <Route path="suite/desktop-app/pieces-drive/searching-filtering" element={<div>Searching & Filtering</div>} />
              <Route path="suite/desktop-app/pieces-drive/enrichment-metadata" element={<div>Enrichment & Metadata</div>} />
              <Route path="suite/desktop-app/pieces-drive/transforming-code" element={<div>Transforming Code</div>} />
              <Route path="suite/desktop-app/pieces-drive/sharing" element={<div>Sharing</div>} />
              
              {/* Workstream Activity */}
              <Route path="suite/desktop-app/workstream-activity" element={<div>Workstream Activity</div>} />
              
              {/* Navigation */}
              <Route path="suite/desktop-app/navigation" element={<div>Navigation</div>} />
              <Route path="suite/desktop-app/navigation/settings" element={<div>Settings</div>} />
              <Route path="suite/desktop-app/navigation/captured-context" element={<div>Captured Context</div>} />
              <Route path="suite/desktop-app/navigation/updates-upcoming" element={<div>Updates & Upcoming</div>} />
              <Route path="suite/desktop-app/navigation/snippet-discovery" element={<div>Snippet Discovery</div>} />
              <Route path="suite/desktop-app/navigation/workflow-activity" element={<div>Workflow Activity</div>} />
              <Route path="suite/desktop-app/navigation/global-search" element={<div>Global Search</div>} />
              
              {/* Settings */}
              <Route path="suite/desktop-app/settings" element={<div>Settings</div>} />
              <Route path="suite/desktop-app/settings/account-cloud" element={<div>Account & Cloud</div>} />
              <Route path="suite/desktop-app/settings/copilot-ml" element={<div>Pieces Copilot & Machine Learning</div>} />
              <Route path="suite/desktop-app/settings/mcp" element={<div>Model Context Protocol (MCP)</div>} />
              <Route path="suite/desktop-app/settings/aesthetics-layouts" element={<div>Aesthetics & Layouts</div>} />
              <Route path="suite/desktop-app/settings/additional" element={<div>Additional Settings</div>} />
              <Route path="suite/desktop-app/settings/support-information" element={<div>Support & Information</div>} />
              
              {/* Actions & Keyboard Shortcuts */}
              <Route path="suite/desktop-app/actions-shortcuts" element={<div>Actions & Keyboard Shortcuts</div>} />
              <Route path="suite/desktop-app/actions-shortcuts/power-menu" element={<div>Power Menu</div>} />
              <Route path="suite/desktop-app/actions-shortcuts/keyboard-shortcuts" element={<div>Keyboard Shortcuts</div>} />
              
              {/* Desktop App Troubleshooting */}
              <Route path="suite/desktop-app/troubleshooting" element={<div>Desktop App Troubleshooting</div>} />
              <Route path="suite/desktop-app/troubleshooting/cross-platform" element={<div>Cross-Platform</div>} />
              <Route path="suite/desktop-app/troubleshooting/macos" element={<div>macOS</div>} />
              <Route path="suite/desktop-app/troubleshooting/windows" element={<div>Windows</div>} />
              <Route path="suite/desktop-app/troubleshooting/linux" element={<div>Linux</div>} />
              
              {/* Core Dependencies */}
              <Route path="suite/core-dependencies" element={<div>Core Dependencies</div>} />
              <Route path="suite/core-dependencies/pieces-os" element={<div>PiecesOS</div>} />
              <Route path="suite/core-dependencies/pieces-os/manual-installation" element={<div>Manual Installation</div>} />
              <Route path="suite/core-dependencies/pieces-os/quick-menu" element={<div>Quick Menu</div>} />
              <Route path="suite/core-dependencies/pieces-os/troubleshooting" element={<div>Troubleshooting</div>} />
              <Route path="suite/core-dependencies/pieces-os/ollama" element={<div>Ollama</div>} />
              <Route path="suite/core-dependencies/pieces-os/ollama/manual-installation" element={<div>Manual Installation</div>} />
              <Route path="suite/core-dependencies/pieces-os/ollama/supported-models" element={<div>Supported Models</div>} />
              <Route path="suite/core-dependencies/pieces-os/ollama/troubleshooting" element={<div>Troubleshooting</div>} />
              <Route path="suite/core-dependencies/on-device-storage" element={<div>On-Device Storage</div>} />
              
              {/* MCP */}
              <Route path="mcp/introducing" element={<div>Introducing Pieces Model Context Protocol (MCP)</div>} />
              <Route path="mcp/prompting" element={<div>MCP Prompting</div>} />
              <Route path="mcp/cursor" element={<div>MCP → Cursor</div>} />
              <Route path="mcp/github-copilot" element={<div>MCP → GitHub Copilot</div>} />
              <Route path="mcp/goose" element={<div>MCP → Goose</div>} />
              
              {/* IDEs */}
              <Route path="ides/vscode" element={<div>Visual Studio Code Extension</div>} />
              <Route path="ides/jetbrains" element={<div>JetBrains Plugin</div>} />
              <Route path="ides/visual-studio" element={<div>Visual Studio Extension</div>} />
              <Route path="ides/sublime" element={<div>Sublime Text Plugin</div>} />
              <Route path="ides/jupyterlab" element={<div>JupyterLab Extension</div>} />
              <Route path="ides/neovim" element={<div>Neovim Plugin</div>} />
              
              {/* Productivity */}
              <Route path="productivity/obsidian" element={<div>Obsidian Plugin</div>} />
              <Route path="productivity/web-extension" element={<div>Web Extension</div>} />
              <Route path="productivity/cli" element={<div>Pieces CLI</div>} />
              <Route path="productivity/raycast" element={<div>Raycast Plugin</div>} />
              
              {/* More */}
              <Route path="more/privacy-security" element={<div>Privacy, Security & Your Data</div>} />
              <Route path="more/compatible-llms" element={<div>Compatible LLMs</div>} />
              <Route path="more/glossary" element={<div>Glossary</div>} />
              
              {/* Get Help */}
              <Route path="help/support" element={<div>Support</div>} />
              
              {/* Legacy routes for compatibility */}
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
