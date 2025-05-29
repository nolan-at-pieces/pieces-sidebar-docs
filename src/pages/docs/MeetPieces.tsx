
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Book, Settings } from "lucide-react";

const MeetPieces = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">👋 Meet Pieces</h1>
        <p className="text-xl text-muted-foreground">
          Welcome to Pieces! Your AI-powered productivity tool that captures, enriches, and reuses useful materials.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
        <Link to="/docs/meet-pieces/fundamentals">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Book className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Fundamentals</CardTitle>
              <CardDescription>
                Learn the core concepts and principles behind Pieces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="p-0">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/docs/meet-pieces/installation-windows">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Download className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle>Installation Guides</CardTitle>
              <CardDescription>
                Get Pieces installed on Windows, macOS, or Linux
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="p-0">
                Install now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>
      </div>

      <h2>What is Pieces?</h2>
      <p>
        Pieces is an AI-powered productivity tool designed to capture, enrich, and reuse useful materials 
        throughout your workflow. Whether you're a developer, designer, or knowledge worker, Pieces helps 
        you save time and stay organized.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li><strong>Smart Capture:</strong> Save code snippets, screenshots, and text with automatic enrichment</li>
        <li><strong>AI-Powered Search:</strong> Find what you need using natural language queries</li>
        <li><strong>Cross-Platform Sync:</strong> Access your materials across all your devices</li>
        <li><strong>IDE Integration:</strong> Seamlessly work with your favorite development tools</li>
        <li><strong>Team Collaboration:</strong> Share knowledge and resources with your team</li>
      </ul>

      <h3>Getting Started</h3>
      <p>
        The best way to get started with Pieces is to install the desktop application and explore 
        the fundamentals. From there, you can add integrations and customize your workflow.
      </p>

      <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-8 not-prose">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Ready to Start?</h3>
        <p className="text-blue-800 dark:text-blue-200 mb-4">
          Begin your journey with Pieces by understanding the fundamentals and installing the application.
        </p>
        <div className="flex gap-4">
          <Link to="/docs/meet-pieces/fundamentals">
            <Button>
              Learn Fundamentals <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link to="/docs/meet-pieces/installation-windows">
            <Button variant="outline">
              Install Pieces <Download className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeetPieces;
