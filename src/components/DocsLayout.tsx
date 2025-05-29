
import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, BookOpen, Zap, Download, Code, Puzzle, FileText, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold">Pieces Docs</span>
          </Link>
          
          {navigation.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="mb-2 px-4 text-sm font-semibold text-gray-500 uppercase tracking-wide">
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
                        "flex items-center space-x-3 px-4 py-2 text-sm rounded-lg transition-colors group",
                        isActive
                          ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      <item.icon className={cn("w-4 h-4", isActive ? "text-blue-700" : "text-gray-400")} />
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
    <div className="min-h-screen bg-white">
      {/* Mobile sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden fixed top-4 left-4 z-50">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <DocsSidebar />
        </SheetContent>
      </Sheet>

      <div className="lg:flex">
        {/* Desktop sidebar */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto border-r border-gray-200">
              <DocsSidebar />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
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
