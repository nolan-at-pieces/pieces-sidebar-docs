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
    title: "👋 Meet Pieces",
    href: "/docs/meet-pieces",
    items: [
      { title: "Fundamentals", href: "/docs/meet-pieces/fundamentals" },
      { title: "Installation Guide | Windows", href: "/docs/meet-pieces/installation-windows" },
      { title: "Installation Guide | macOS", href: "/docs/meet-pieces/installation-macos" },
      { title: "Installation Guide | Linux", href: "/docs/meet-pieces/installation-linux" },
    ],
  },
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
  {
    title: "Pieces | Quick Guides",
    href: "/docs/quick-guides",
    isSection: true,
    items: [
      { title: "Overview", href: "/docs/quick-guides/overview" },
      { title: "Using Long-Term Memory Context", href: "/docs/quick-guides/long-term-memory" },
      { title: "Using Pieces Copilot with Context", href: "/docs/quick-guides/copilot-context" },
    ],
  },
  {
    title: "Long-Term Memory Prompting Guide",
    href: "/docs/long-term-memory-guide",
    isSection: true,
    items: [
      { title: "Use Cases and Example Prompts", href: "/docs/long-term-memory-guide/use-cases" },
      { title: "Use Cases for the Pieces Workstream Activity View", href: "/docs/long-term-memory-guide/workstream-activity" },
      { title: "General Long-Term Memory Prompting Tips", href: "/docs/long-term-memory-guide/prompting-tips" },
    ],
  },
  {
    title: "Pieces | Suite",
    href: "/docs/suite",
    items: [
      { title: "Desktop App", href: "/docs/suite/desktop-app", isExpandable: true },
      { title: "Download & Install", href: "/docs/suite/download-install" },
      { title: "Onboarding", href: "/docs/suite/onboarding" },
      { title: "Pieces Copilot", href: "/docs/suite/copilot", isExpandable: true },
      { title: "Pieces Drive", href: "/docs/suite/drive", isExpandable: true },
      { title: "Workstream Activity", href: "/docs/suite/workstream-activity" },
      { title: "Navigation", href: "/docs/suite/navigation", isExpandable: true },
      { title: "Settings", href: "/docs/suite/settings", isExpandable: true },
      { title: "Actions & Keyboard Shortcuts", href: "/docs/suite/actions-shortcuts", isExpandable: true },
      { title: "Troubleshooting", href: "/docs/suite/troubleshooting", isExpandable: true },
    ],
  },
  {
    title: "Core Dependencies",
    href: "/docs/core-dependencies",
    isExpandable: true,
  },
  {
    title: "Pieces | MCP",
    href: "/docs/mcp",
    items: [
      { title: "Introducing Pieces Model Context Protocol (MCP)", href: "/docs/mcp/introduction" },
      { title: "MCP Prompting", href: "/docs/mcp/prompting" },
      { title: "MCP → Cursor", href: "/docs/mcp/cursor" },
      { title: "MCP → GitHub Copilot", href: "/docs/mcp/github-copilot" },
      { title: "MCP → Goose", href: "/docs/mcp/goose" },
    ],
  },
];

function DocsSidebar({ className }: { className?: string }) {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>(["Pieces | Quick Guides", "Long-Term Memory Prompting Guide"]);

  const toggleSection = (sectionTitle: string) => {
    setOpenSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const isActive = (href: string) => location.pathname === href;
  const isSectionOpen = (sectionTitle: string) => openSections.includes(sectionTitle);

  return (
    <div className={cn("pb-12 w-64 h-full", className)}>
      <div className="space-y-4 py-4 h-full">
        <div className="px-3 py-2 flex-1">
          <Link to="/" className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold">Pieces Docs</span>
          </Link>
          
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search docs..."
                className="w-full pl-10 pr-4 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            {navigation.map((section) => (
              <div key={section.title}>
                {section.items ? (
                  <div>
                    {section.isSection ? (
                      <Collapsible 
                        open={isSectionOpen(section.title)} 
                        onOpenChange={() => toggleSection(section.title)}
                      >
                        <div className="flex items-center">
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="flex-1 justify-start px-3 py-2 text-sm">
                              <span className="text-blue-600">{section.title}</span>
                              {isSectionOpen(section.title) ? (
                                <ChevronDown className="ml-auto h-4 w-4" />
                              ) : (
                                <ChevronRight className="ml-auto h-4 w-4" />
                              )}
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent className="ml-4 mt-1 space-y-1">
                          {section.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className={cn(
                                "block px-3 py-2 text-sm rounded-lg transition-colors",
                                isActive(item.href)
                                  ? "bg-primary/10 text-primary"
                                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                              )}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Collapsible 
                        open={isSectionOpen(section.title)} 
                        onOpenChange={() => toggleSection(section.title)}
                      >
                        <div className="flex items-center">
                          <Link
                            to={section.href}
                            className={cn(
                              "flex-1 flex items-center px-3 py-2 text-sm rounded-lg transition-colors",
                              isActive(section.href)
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                          >
                            <span>{section.title}</span>
                          </Link>
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-auto p-1">
                              {isSectionOpen(section.title) ? (
                                <ChevronDown className="h-4 w-4" />
                              ) : (
                                <ChevronRight className="h-4 w-4" />
                              )}
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent className="ml-4 mt-1 space-y-1">
                          {section.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className={cn(
                                "block px-3 py-2 text-sm rounded-lg transition-colors",
                                isActive(item.href)
                                  ? "bg-primary/10 text-primary"
                                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                              )}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    )}
                  </div>
                ) : (
                  <Link
                    to={section.href}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm rounded-lg transition-colors",
                      isActive(section.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <span>{section.title}</span>
                  </Link>
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
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold">Pieces</span>
            </Link>
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
                <span className="text-xl font-bold">Pieces</span>
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
