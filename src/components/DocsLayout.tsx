
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
    items: [
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
];

function DocsSidebar({ className }: { className?: string }) {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>(["Meet Pieces", "Pieces | Quick Guides"]);
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
    const paddingClass = depth === 0 ? "px-3" : depth === 1 ? "px-6" : "px-9";

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
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <span className="break-words whitespace-normal leading-tight">{item.title}</span>
                </Link>
              ) : (
                <div className={cn("flex-1 flex items-center py-2 text-sm", paddingClass)}>
                  <span className="break-words whitespace-normal leading-tight font-semibold text-foreground">{item.title}</span>
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
          <Link to="/" className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold">Pieces</span>
          </Link>
          
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
