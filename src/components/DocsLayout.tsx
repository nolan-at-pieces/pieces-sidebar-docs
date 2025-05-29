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
        <Collapsible
          key={item.title}
          open={isSectionOpen(item.title)}
          onOpenChange={() => toggleSection(item.title)}
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-3 text-sm hover:bg-accent rounded-md transition-colors">
            <span className={cn(
              "font-medium",
              item.isBold && "font-semibold",
              item.isSection && "text-xs uppercase text-muted-foreground tracking-wider"
            )}>
              {item.title}
            </span>
            {isSectionOpen(item.title) ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="mt-1 space-y-1">
              {item.items?.map((subItem) => renderNavItem(subItem, depth + 1))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      );
    }

    return (
      <Link
        key={item.title}
        to={item.href || '#'}
        className={cn(
          "block py-2 text-sm hover:bg-accent rounded-md transition-colors",
          paddingClass,
          isActive(item.href || '') && "bg-accent font-medium"
        )}
      >
        {item.title}
      </Link>
    );
  };

  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
        </div>
        <div className="px-3">
          <nav className="space-y-1">
            {filteredNavigation.map((section) => renderNavItem(section))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default function DocsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex lg:hidden">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <DocsSidebar />
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex flex-1 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Pieces Docs</span>
            </Link>
            <nav className="flex items-center space-x-6">
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container flex-1">
        <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          {/* Desktop Sidebar */}
          <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:block">
            <DocsSidebar />
          </aside>

          {/* Page Content */}
          <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
            <div className="mx-auto w-full min-w-0">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}