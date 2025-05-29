
import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { navigation, NavItem } from "@/lib/navigation";

function DocsSidebar({ className }: { className?: string }) {
      { title: "Fundamentals", href: "/docs/meet-pieces/fundamentals" },
      { title: "Installation Guide | Windows", href: "/docs/meet-pieces/installation-windows" },
      { title: "Installation Guide | macOS", href: "/docs/meet-pieces/installation-macos" },
      { title: "Installation Guide | Linux", href: "/docs/meet-pieces/installation-linux" },
      {
        title: "Troubleshooting",
        href: "/docs/troubleshooting",
        items: [
          { title: "Cross-Platform", href: "/docs/troubleshooting/cross-platform" },
          { title: "macOS", href: "/docs/troubleshooting/macos" },
          { title: "Windows", href: "/docs/troubleshooting/windows" },
          { title: "Linux", href: "/docs/troubleshooting/linux" },
        ],
      },
    ],
  },
  {
    title: "Pieces | Quick Guides",
    href: null,
    isSection: true,
    items: [
      { title: "Overview", href: "/docs/quick-guides/overview" },
      { title: "Using Long-Term Memory Context", href: "/docs/quick-guides/long-term-memory" },
      { title: "Using Pieces Copilot with Context", href: "/docs/quick-guides/copilot-context" },
      {
        title: "Long-Term Memory Prompting Guide",
        href: "/docs/long-term-memory-guide",
        items: [
          { title: "Use Cases and Example Prompts", href: "/docs/long-term-memory-guide/use-cases" },
          { title: "Use Cases for the Pieces Workstream Activity View", href: "/docs/long-term-memory-guide/workstream-activity" },
          { title: "General Long-Term Memory Prompting Tips", href: "/docs/long-term-memory-guide/prompting-tips" },
        ],
      },
    ],
  },
  {
    title: "Pieces | Suite",
    href: null,
    isSection: true,
    items: [
      {
        title: "Desktop App",
        href: "/docs/suite/desktop-app",
        items: [
          { title: "Download & Install", href: "/docs/suite/desktop-app/download-install" },
          { title: "Onboarding", href: "/docs/suite/desktop-app/onboarding" },
          {
            title: "Pieces Copilot",
            href: "/docs/suite/desktop-app/pieces-copilot",
            items: [
              { title: "Interacting with Pieces Copilot", href: "/docs/suite/desktop-app/pieces-copilot/interacting" },
              { title: "Context & Project Integration", href: "/docs/suite/desktop-app/pieces-copilot/context-integration" },
              { title: "Configuring Pieces Copilot", href: "/docs/suite/desktop-app/pieces-copilot/configuring" },
              { title: "Pieces Copilot in Multiple Environments", href: "/docs/suite/desktop-app/pieces-copilot/multiple-environments" },
            ],
          },
          {
            title: "Pieces Drive",
            href: "/docs/suite/desktop-app/pieces-drive",
            items: [
              { title: "Saving & Organizing Materials", href: "/docs/suite/desktop-app/pieces-drive/saving-organizing" },
              { title: "Searching & Filtering", href: "/docs/suite/desktop-app/pieces-drive/searching-filtering" },
              { title: "Enrichment & Metadata", href: "/docs/suite/desktop-app/pieces-drive/enrichment-metadata" },
              { title: "Transforming Code", href: "/docs/suite/desktop-app/pieces-drive/transforming-code" },
              { title: "Sharing", href: "/docs/suite/desktop-app/pieces-drive/sharing" },
            ],
          },
          { title: "Workstream Activity", href: "/docs/suite/desktop-app/workstream-activity" },
          {
            title: "Navigation",
            href: "/docs/suite/desktop-app/navigation",
            items: [
              { title: "Settings", href: "/docs/suite/desktop-app/navigation/settings" },
              { title: "Captured Context", href: "/docs/suite/desktop-app/navigation/captured-context" },
              { title: "Updates & Upcoming", href: "/docs/suite/desktop-app/navigation/updates-upcoming" },
              { title: "Snippet Discovery", href: "/docs/suite/desktop-app/navigation/snippet-discovery" },
              { title: "Workflow Activity", href: "/docs/suite/desktop-app/navigation/workflow-activity" },
              { title: "Global Search", href: "/docs/suite/desktop-app/navigation/global-search" },
            ],
          },
          {
            title: "Settings",
            href: "/docs/suite/desktop-app/settings",
            items: [
              { title: "Account & Cloud", href: "/docs/suite/desktop-app/settings/account-cloud" },
              { title: "Pieces Copilot & Machine Learning", href: "/docs/suite/desktop-app/settings/copilot-ml" },
              { title: "Model Context Protocol (MCP)", href: "/docs/suite/desktop-app/settings/mcp" },
              { title: "Aesthetics & Layouts", href: "/docs/suite/desktop-app/settings/aesthetics-layouts" },
              { title: "Additional Settings", href: "/docs/suite/desktop-app/settings/additional" },
              { title: "Support & Information", href: "/docs/suite/desktop-app/settings/support-information" },
            ],
          },
          {
            title: "Actions & Keyboard Shortcuts",
            href: "/docs/suite/desktop-app/actions-shortcuts",
            items: [
              { title: "Power Menu", href: "/docs/suite/desktop-app/actions-shortcuts/power-menu" },
              { title: "Keyboard Shortcuts", href: "/docs/suite/desktop-app/actions-shortcuts/keyboard-shortcuts" },
            ],
          },
          {
            title: "Troubleshooting",
            href: "/docs/suite/desktop-app/troubleshooting",
            items: [
              { title: "Cross-Platform", href: "/docs/suite/desktop-app/troubleshooting/cross-platform" },
              { title: "macOS", href: "/docs/suite/desktop-app/troubleshooting/macos" },
              { title: "Windows", href: "/docs/suite/desktop-app/troubleshooting/windows" },
              { title: "Linux", href: "/docs/suite/desktop-app/troubleshooting/linux" },
            ],
          },
        ],
      },
      {
        title: "Core Dependencies",
        href: "/docs/suite/core-dependencies",
        items: [
          {
            title: "PiecesOS",
            href: "/docs/suite/core-dependencies/pieces-os",
            items: [
              { title: "Manual Installation", href: "/docs/suite/core-dependencies/pieces-os/manual-installation" },
              { title: "Quick Menu", href: "/docs/suite/core-dependencies/pieces-os/quick-menu" },
              { title: "Troubleshooting", href: "/docs/suite/core-dependencies/pieces-os/troubleshooting" },
              {
                title: "Ollama",
                href: "/docs/suite/core-dependencies/pieces-os/ollama",
                items: [
                  { title: "Manual Installation", href: "/docs/suite/core-dependencies/pieces-os/ollama/manual-installation" },
                  { title: "Supported Models", href: "/docs/suite/core-dependencies/pieces-os/ollama/supported-models" },
                  { title: "Troubleshooting", href: "/docs/suite/core-dependencies/pieces-os/ollama/troubleshooting" },
                ],
              },
            ],
          },
          { title: "On-Device Storage", href: "/docs/suite/core-dependencies/on-device-storage" },
        ],
      },
    ],
  },
  {
    title: "Pieces | MCP",
    href: null,
    isSection: true,
    items: [
      { title: "Introducing Pieces Model Context Protocol (MCP)", href: "/docs/mcp/introducing" },
      { title: "MCP Prompting", href: "/docs/mcp/prompting" },
      { title: "MCP → Cursor", href: "/docs/mcp/cursor" },
      { title: "MCP → GitHub Copilot", href: "/docs/mcp/github-copilot" },
      { title: "MCP → Goose", href: "/docs/mcp/goose" },
    ],
  },
  {
    title: "Pieces | IDEs",
    href: null,
    isSection: true,
    items: [
      { title: "Visual Studio Code Extension", href: "/docs/ides/vscode" },
      { title: "JetBrains Plugin", href: "/docs/ides/jetbrains" },
      { title: "Visual Studio Extension", href: "/docs/ides/visual-studio" },
      { title: "Sublime Text Plugin", href: "/docs/ides/sublime" },
      { title: "JupyterLab Extension", href: "/docs/ides/jupyterlab" },
      { title: "Neovim Plugin", href: "/docs/ides/neovim" },
    ],
  },
  {
    title: "Pieces | Productivity",
    href: null,
    isSection: true,
    items: [
      { title: "Obsidian Plugin", href: "/docs/productivity/obsidian" },
      { title: "Web Extension", href: "/docs/productivity/web-extension" },
      { title: "Pieces CLI", href: "/docs/productivity/cli" },
      { title: "Raycast Plugin", href: "/docs/productivity/raycast" },
    ],
  },
  {
    title: "Pieces | More",
    href: null,
    isSection: true,
    items: [
      { title: "Privacy, Security & Your Data", href: "/docs/more/privacy-security" },
      { title: "Compatible LLMs", href: "/docs/more/compatible-llms" },
      { title: "Glossary", href: "/docs/more/glossary" },
    ],
  },
  {
    title: "Get Help",
    href: null,
    isSection: true,
    items: [
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>([
    "Meet Pieces", 
    "Pieces | Quick Guides", 
    "Pieces | Suite", 
    "Pieces | MCP", 
    "Pieces | IDEs", 
    "Pieces | Productivity", 
    "Pieces | More", 
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

  const filterItems = (items: NavItem[], searchTerm: string): NavItem[] => {
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

  const renderNavItem = (item: NavItem, depth = 0) => {
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
