import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const navigation = [
  {
    title: "Meet Pieces",
    href: "/docs/meet-pieces",
    isBold: true,
    items: [
      { title: "Fundamentals", href: "/docs/meet-pieces/fundamentals" },
      { title: "Windows Installation Guide", href: "/docs/meet-pieces/windows-installation-guide" },
      { title: "macOS Installation Guide", href: "/docs/meet-pieces/macos-installation-guide" },
      { title: "Linux Installation Guide", href: "/docs/meet-pieces/linux-installation-guide" },
      {
        title: "Troubleshooting",
        href: "/docs/meet-pieces/troubleshooting",
        items: [
          { title: "Cross-Platform", href: "/docs/meet-pieces/troubleshooting/cross-platform" },
          { title: "macOS", href: "/docs/meet-pieces/troubleshooting/macos" },
          { title: "Windows", href: "/docs/meet-pieces/troubleshooting/windows" },
          { title: "Linux", href: "/docs/meet-pieces/troubleshooting/linux" },
        ],
      },
    ],
  },
  {
    title: "Quick Guides",
    href: "/docs/quick-guides",
    isSection: true,
    items: [
      { title: "Overview", href: "/docs/quick-guides/quick-guides/overview" },
      { title: "Using Long-Term Memory Context", href: "/docs/quick-guides/quick-guides/ltm-context" },
      { title: "Using Pieces Copilot with Context", href: "/docs/quick-guides/quick-guides/copilot-with-context" },
      {
        title: "Long-Term Memory Prompting Guide",
        href: "/docs/quick-guides/quick-guides/ltm-prompting",
        items: [
          { title: "Use Cases and Example Prompts", href: "/docs/quick-guides/quick-guides/ltm-prompting/examples" },
          { title: "Use Cases for the Pieces Workstream Activity View", href: "/docs/quick-guides/quick-guides/ltm-prompting/workstream-activity" },
          { title: "General Long-Term Memory Prompting Tips", href: "/docs/quick-guides/quick-guides/ltm-prompting/tips" },
        ],
      },
    ],
  },
  {
    title: "Desktop App",
    href: "/docs/desktop",
    isSection: true,
    items: [
      { title: "Download & Install", href: "/docs/desktop/download" },
      { title: "Onboarding", href: "/docs/desktop/onboarding" },
      {
        title: "Pieces Copilot",
        href: "/docs/desktop/copilot",
        items: [
          { title: "Interacting with Pieces Copilot", href: "/docs/desktop/copilot/interaction" },
          { title: "Context & Project Integration", href: "/docs/desktop/copilot/integration" },
          { title: "Configuring Pieces Copilot", href: "/docs/desktop/copilot/configuration" },
          { title: "Multiple Environments", href: "/docs/desktop/copilot/multiple-environments" },
        ],
      },
      {
        title: "Pieces Drive",
        href: "/docs/desktop/drive",
        items: [
          { title: "Saving & Organizing Materials", href: "/docs/desktop/drive/save-and-organize" },
          { title: "Searching & Filtering", href: "/docs/desktop/drive/search-and-filter" },
          { title: "Enrichment & Metadata", href: "/docs/desktop/drive/enrichment-and-metadata" },
          { title: "Transforming Code", href: "/docs/desktop/drive/transforming-code" },
          { title: "Sharing", href: "/docs/desktop/drive/sharing" },
        ],
      },
      { title: "Workstream Activity", href: "/docs/desktop/workstream-activity" },
      {
        title: "Navigation",
        href: "/docs/desktop/navigation",
        items: [
          { title: "Settings", href: "/docs/desktop/navigation/settings" },
          { title: "Captured Context", href: "/docs/desktop/navigation/captured-context" },
          { title: "Updates & Upcoming", href: "/docs/desktop/navigation/updates" },
          { title: "Snippet Discovery", href: "/docs/desktop/navigation/snippet-discovery" },
          { title: "Workflow Activity", href: "/docs/desktop/navigation/workflow-activity" },
          { title: "Global Search", href: "/docs/desktop/navigation/global-search" },
        ],
      },
      {
        title: "Configuration",
        href: "/docs/desktop/configuration",
        items: [
          { title: "Account & Cloud", href: "/docs/desktop/configuration/account-and-cloud" },
          { title: "Pieces Copilot & Machine Learning", href: "/docs/desktop/configuration/copilot-and-machine-learning" },
          { title: "Model Context Protocol (MCP)", href: "/docs/desktop/configuration/mcp" },
          { title: "Aesthetics & Layouts", href: "/docs/desktop/configuration/aesthetics-layout" },
          { title: "Additional Settings", href: "/docs/desktop/configuration/additional-settings" },
          { title: "Support & Information", href: "/docs/desktop/configuration/support" },
        ],
      },
      {
        title: "Actions & Keyboard Shortcuts",
        href: "/docs/desktop/actions",
        items: [
          { title: "Power Menu", href: "/docs/desktop/actions/power-menu" },
          { title: "Keyboard Shortcuts", href: "/docs/desktop/actions/keyboard-shortcuts" },
        ],
      },
      {
        title: "Troubleshooting",
        href: "/docs/desktop/troubleshooting",
        items: [
          { title: "Cross-Platform", href: "/docs/desktop/troubleshooting/cross-platform" },
          { title: "macOS", href: "/docs/desktop/troubleshooting/macos" },
          { title: "Windows", href: "/docs/desktop/troubleshooting/windows" },
          { title: "Linux", href: "/docs/desktop/troubleshooting/linux" },
        ],
      },
    ],
  },
  {
    title: "Core Dependencies",
    href: "/docs/core-dependencies",
    isSection: true,
    items: [
      {
        title: "PiecesOS",
        href: "/docs/core-dependencies/pieces-os",
        items: [
          { title: "Manual Installation", href: "/docs/core-dependencies/pieces-os/manual-installation" },
          { title: "Quick Menu", href: "/docs/core-dependencies/pieces-os/quick-menu" },
          { title: "Troubleshooting", href: "/docs/core-dependencies/pieces-os/troubleshooting" },
        ],
      },
      {
        title: "Ollama",
        href: "/docs/core-dependencies/ollama",
        items: [
          { title: "Manual Installation", href: "/docs/core-dependencies/ollama/manual-installation" },
          { title: "Supported Models", href: "/docs/core-dependencies/ollama/supported-models" },
          { title: "Troubleshooting", href: "/docs/core-dependencies/ollama/troubleshooting" },
        ],
      },
      { title: "On-Device Storage", href: "/docs/core-dependencies/on-device-storage" },
    ],
  },
  {
    title: "Model Context Protocol (MCP)",
    href: "/docs/mcp",
    isSection: true,
    items: [
      { title: "Get Started", href: "/docs/mcp/mcp/get-started" },
      { title: "MCP Prompting", href: "/docs/mcp/mcp/prompting" },
      { title: "MCP → Cursor", href: "/docs/mcp/mcp/cursor" },
      { title: "MCP → GitHub Copilot", href: "/docs/mcp/mcp/github-copilot" },
      { title: "MCP → Goose", href: "/docs/mcp/mcp/goose" },
    ],
  },
  {
    title: "Extensions & Plugins",
    href: "/docs/extensions-plugins",
    isSection: true,
    items: [
      { title: "Visual Studio Code", href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code" },
      { title: "JetBrains", href: "/docs/extensions-plugins/extensions-plugins/jetbrains" },
      { title: "Visual Studio", href: "/docs/extensions-plugins/extensions-plugins/visual-studio" },
      { title: "Sublime Text", href: "/docs/extensions-plugins/extensions-plugins/sublime" },
      { title: "JupyterLab", href: "/docs/extensions-plugins/extensions-plugins/jupyterlab" },
      { title: "Neovim Plugin", href: "/docs/extensions-plugins/extensions-plugins/neovim-plugin" },
    ],
  },
  {
    title: "Productivity Tools",
    href: "/docs/productivity",
    isSection: true,
    items: [
      { title: "Obsidian", href: "/docs/obsidian" },
      { title: "Web Extension", href: "/docs/web-extension" },
      { title: "Pieces CLI", href: "/docs/cli" },
      { title: "Raycast", href: "/docs/raycast" },
    ],
  },
  {
    title: "Large Language Models",
    href: "/docs/large-language-models",
    isSection: true,
    items: [
      { title: "Cloud Models", href: "/docs/large-language-models/cloud-models" },
      { title: "Local Models", href: "/docs/large-language-models/local-models" },
    ],
  },
  {
    title: "More",
    href: "/docs/more",
    isSection: true,
    items: [
      { title: "Privacy, Security & Your Data", href: "/docs/privacy-security-your-data" },
      { title: "Glossary", href: "/docs/glossary" },
    ],
  },
  {
    title: "Get Help",
    href: "/docs/help",
    isSection: true,
    items: [
      { title: "Support", href: "/docs/support" },
    ],
  },
];

function DocsSidebar({ className }: { className?: string }) {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>([
    "Meet Pieces", 
    "Quick Guides", 
    "Desktop App", 
    "Core Dependencies", 
    "Model Context Protocol (MCP)", 
    "Extensions & Plugins", 
    "Productivity Tools", 
    "Large Language Models", 
    "More", 
    "Get Help"
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSection = (sectionTitle: string) => {
    setOpenSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const isActive = (href: string) => location.pathname === href;
  const isSectionOpen = (sectionTitle: string) => openSections.includes(sectionTitle);

  const filterItems = (items: any[], searchTerm: string): any[] => {
    return items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      if (item.items) {
        const filteredSubItems = filterItems(item.items, searchTerm);
        return matchesSearch || filteredSubItems.length > 0;
      }
      return matchesSearch;
    }).map(item => {
      if (item.items) {
        return {
          ...item,
          items: filterItems(item.items, searchTerm)
        };
      }
      return item;
    });
  };

  const filteredNavigation = searchTerm 
    ? navigation.map(section => ({
        ...section,
        items: section.items ? filterItems(section.items, searchTerm) : undefined
      })).filter(section => 
        section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (section.items && section.items.length > 0)
      )
    : navigation;

  const renderNavItem = (item: any, depth = 0) => {
    const hasSubItems = item.items && item.items.length > 0;
    const paddingClass = depth === 0 ? "px-3" : depth === 1 ? "px-6" : depth === 2 ? "px-9" : "px-12";

    if (hasSubItems) {
      return (
        <div key={item.title}>
          <Collapsible 
            open={isSectionOpen(item.title)} 
            onOpenChange={() => toggleSection(item.title)}
          >
            <div className="flex items-center">
              {item.href ? (
                <Link
                  to={item.href}
                  className={cn(
                    "flex-1 flex items-center py-2 text-sm rounded-lg transition-colors break-words whitespace-normal leading-tight",
                    paddingClass,
                    item.isBold && "font-bold",
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <span className="break-words whitespace-normal leading-tight">{item.title}</span>
                </Link>
              ) : (
                <div className={cn("flex-1 flex items-center py-2 text-sm", paddingClass)}>
                  <span className={cn(
                    "break-words whitespace-normal leading-tight font-semibold text-foreground",
                    item.isBold && "font-bold"
                  )}>
                    {item.title}
                  </span>
                </div>
              )}
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="h-auto p-1 flex-shrink-0 mr-2">
                  {isSectionOpen(item.title) ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-1">
              {item.items.map((subItem: any) => renderNavItem(subItem, depth + 1))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      );
    }

    return (
      <Link
        key={item.href}
        to={item.href}
        className={cn(
          "block py-2 text-sm rounded-lg transition-colors break-words whitespace-normal leading-tight",
          paddingClass,
          item.isBold && "font-bold",
          isActive(item.href)
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        )}
      >
        {item.title}
      </Link>
    );
  };

  return (
    <div className={cn("pb-12 w-64 h-full", className)}>
      <div className="space-y-4 py-4 h-full">
        <div className="px-3 py-2 flex-1">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search docs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            {filteredNavigation.map((section) => (
              <div key={section.title}>
                {section.isSection ? (
                  <div>
                    <div className="px-3 py-2 text-sm font-semibold text-foreground break-words whitespace-normal leading-tight">
                      {section.title}
                    </div>
                    <div className="ml-2 space-y-1">
                      {section.items?.map((item) => renderNavItem(item))}
                    </div>
                  </div>
                ) : (
                  renderNavItem(section)
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <div className="lg:hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
            </div>
          </div>
        </div>
        <SheetContent side="left" className="p-0 w-64">
          <DocsSidebar />
        </SheetContent>
      </Sheet>

      <div className="lg:flex">
        {/* Desktop sidebar */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64 border-r border-border bg-card">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold">Docs</span>
              </Link>
              <ThemeToggle />
            </div>
            <div className="flex-1 overflow-y-auto">
              <DocsSidebar />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-8">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
