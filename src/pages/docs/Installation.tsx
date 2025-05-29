
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Apple, Monitor, Smartphone } from "lucide-react";

const Installation = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Installation</h1>
        <p className="text-xl text-gray-600">
          Get Pieces installed on your development machine in just a few minutes.
        </p>
      </div>

      <Tabs defaultValue="desktop" className="not-prose mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="desktop">Desktop</TabsTrigger>
          <TabsTrigger value="vscode">VS Code</TabsTrigger>
          <TabsTrigger value="browser">Browser</TabsTrigger>
        </TabsList>
        
        <TabsContent value="desktop" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="text-center">
                <Monitor className="w-12 h-12 mx-auto text-blue-600 mb-2" />
                <CardTitle>Windows</CardTitle>
                <CardDescription>Windows 10 or later</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Download className="mr-2 w-4 h-4" />
                  Download for Windows
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Apple className="w-12 h-12 mx-auto text-blue-600 mb-2" />
                <CardTitle>macOS</CardTitle>
                <CardDescription>macOS 10.15 or later</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Download className="mr-2 w-4 h-4" />
                  Download for Mac
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Monitor className="w-12 h-12 mx-auto text-blue-600 mb-2" />
                <CardTitle>Linux</CardTitle>
                <CardDescription>Ubuntu 18.04+ or equivalent</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Download className="mr-2 w-4 h-4" />
                  Download for Linux
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="vscode" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>VS Code Extension</CardTitle>
              <CardDescription>
                Install the Pieces extension directly from the VS Code marketplace
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                ext install pieces.pieces-vscode
              </div>
              <p className="text-sm text-gray-600">
                Or search for "Pieces" in the VS Code extensions marketplace
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="browser" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Browser Extension</CardTitle>
              <CardDescription>
                Save code snippets directly from web pages
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-4">
                <Button>Add to Chrome</Button>
                <Button variant="outline">Add to Firefox</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <h2>System Requirements</h2>
      
      <h3>Minimum Requirements</h3>
      <ul>
        <li><strong>RAM:</strong> 4GB minimum, 8GB recommended</li>
        <li><strong>Storage:</strong> 500MB free space</li>
        <li><strong>Network:</strong> Internet connection required for AI features</li>
      </ul>

      <h3>Supported Platforms</h3>
      <ul>
        <li><strong>Windows:</strong> 10, 11</li>
        <li><strong>macOS:</strong> 10.15 (Catalina) or later</li>
        <li><strong>Linux:</strong> Ubuntu 18.04+, Fedora 32+, or equivalent</li>
      </ul>

      <h2>Installation Steps</h2>
      
      <h3>Desktop Application</h3>
      <ol>
        <li>Download the installer for your operating system from the links above</li>
        <li>Run the installer and follow the on-screen instructions</li>
        <li>Launch Pieces and complete the initial setup</li>
        <li>Sign in with your account or create a new one</li>
      </ol>

      <h3>Post-Installation Setup</h3>
      <p>
        After installation, you'll need to configure Pieces for your development environment:
      </p>
      
      <ol>
        <li><strong>IDE Integration:</strong> Install the appropriate plugins for your IDE</li>
        <li><strong>Sync Settings:</strong> Configure cloud sync for your snippets</li>
        <li><strong>Import Existing Code:</strong> Import your existing code snippets and bookmarks</li>
      </ol>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8 not-prose">
        <h3 className="text-lg font-semibold text-green-900 mb-2">Installation Complete!</h3>
        <p className="text-green-800 mb-4">
          Great! Now that you have Pieces installed, let's get you started with saving your first code snippet.
        </p>
        <Button>Continue to Quick Start</Button>
      </div>
    </div>
  );
};

export default Installation;
