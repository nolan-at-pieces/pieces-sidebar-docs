
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, Zap, Users, Star, Github, Download, Play, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold">Pieces</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/docs/getting-started" className="text-gray-300 hover:text-white transition-colors">
                Documentation
              </Link>
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10" />
        
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2 bg-gray-900/50 border border-gray-800 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              <span>Trusted by 500,000+ developers</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Your personal{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI coding assistant
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Save, organize, and reuse code snippets with AI-powered assistance. 
            Boost your productivity with intelligent code management that learns from your workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Download className="mr-2 w-5 h-5" />
              Download for Free
            </Button>
            <Link to="/docs/getting-started">
              <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 px-8 py-4 text-lg">
                <Play className="mr-2 w-5 h-5" />
                Get Started
              </Button>
            </Link>
          </div>

          {/* Product preview placeholder */}
          <div className="relative mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 p-8 shadow-2xl">
              <div className="bg-black rounded-lg p-6 border border-gray-700">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-600 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Everything you need to code faster</h2>
            <p className="text-xl text-gray-300">Powerful features designed for modern developers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI-Powered Search</h3>
              <p className="text-gray-300 leading-relaxed">
                Find your code instantly with intelligent search that understands context and intent.
              </p>
            </div>
            
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Integration</h3>
              <p className="text-gray-300 leading-relaxed">
                Works seamlessly with VS Code, JetBrains, and your favorite development tools.
              </p>
            </div>
            
            <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">Team Collaboration</h3>
              <p className="text-gray-300 leading-relaxed">
                Share knowledge and code snippets across your team with built-in collaboration features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-gray-800 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our comprehensive documentation and start building with Pieces today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/docs/getting-started">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <BookOpen className="mr-2 w-5 h-5" />
                  Read the Docs
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/docs/examples">
                <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600">
                  View Examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              <span className="font-bold">Pieces</span>
            </div>
            <p className="text-gray-400">&copy; 2024 Pieces. Built for developers, by developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
