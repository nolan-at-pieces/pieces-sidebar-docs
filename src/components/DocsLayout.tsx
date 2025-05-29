
import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BookOpen, Zap, Download, Code, Puzzle, FileText, ChevronRight, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs/getting-started", icon: BookOpen },
      { title: "Installation", href: "/docs/installation", icon: Download },
      { title: "Quick Start", href: "/docs/quick-start", icon: Zap },
    ],
  },
  {
    title: "Development",
    items: [
      { title: "API Reference", href: "/docs/api-reference", icon: Code },
      { title: "Integrations", href: "/docs/integrations", icon: Puzzle },
      { title: "Examples", href: "/docs/examples", icon: FileText },
    ],
  },
];

function DocsSidebar({ className }: { className?: string }) {
  const location = useLocation();

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
          
          {navigation.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="mb-3 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        "flex items-center space-x-3 px-4 py-2.5 text-sm rounded-lg transition-colors group",
                        isActive
                          ? "bg-primary/10 text-primary border-r-2 border-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <item.icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted-foreground")} />
                      <span className="flex-1">{item.title}</span>
                      {isActive && <ChevronRight className="w-4 h-4" />}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
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
