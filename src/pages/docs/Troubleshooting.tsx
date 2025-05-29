
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, Monitor, Apple, Smartphone } from "lucide-react";

const Troubleshooting = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Troubleshooting</h1>
        <p className="text-xl text-muted-foreground">
          Find solutions to common issues and get help with platform-specific problems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 not-prose">
        <Link to="/docs/troubleshooting/cross-platform">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Monitor className="w-12 h-12 mx-auto text-blue-600 mb-2" />
              <CardTitle>Cross-Platform</CardTitle>
              <CardDescription>
                General issues across all platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full p-0">
                View solutions <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/docs/troubleshooting/macos">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Apple className="w-12 h-12 mx-auto text-gray-600 mb-2" />
              <CardTitle>macOS</CardTitle>
              <CardDescription>
                macOS-specific troubleshooting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full p-0">
                macOS help <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/docs/troubleshooting/windows">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Monitor className="w-12 h-12 mx-auto text-blue-500 mb-2" />
              <CardTitle>Windows</CardTitle>
              <CardDescription>
                Windows-specific solutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full p-0">
                Windows help <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/docs/troubleshooting/linux">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Smartphone className="w-12 h-12 mx-auto text-orange-600 mb-2" />
              <CardTitle>Linux</CardTitle>
              <CardDescription>
                Linux distribution help
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full p-0">
                Linux help <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>
      </div>

      <h2>Common Issues</h2>
      <p>
        Most issues with Pieces can be resolved by following platform-specific troubleshooting guides. 
        Here are some general tips that apply across all platforms:
      </p>

      <h3>General Troubleshooting Steps</h3>
      <ol>
        <li><strong>Restart the Application:</strong> Close and reopen Pieces completely</li>
        <li><strong>Check System Requirements:</strong> Ensure your system meets minimum requirements</li>
        <li><strong>Update to Latest Version:</strong> Make sure you're running the latest version</li>
        <li><strong>Clear Cache:</strong> Clear application cache and temporary files</li>
        <li><strong>Check Network Connection:</strong> Ensure stable internet connectivity</li>
      </ol>

      <h3>Performance Issues</h3>
      <ul>
        <li>Close unnecessary applications to free up system resources</li>
        <li>Check available disk space (minimum 1GB recommended)</li>
        <li>Restart your computer if Pieces becomes unresponsive</li>
        <li>Disable other productivity tools that might conflict</li>
      </ul>

      <h3>Sync Issues</h3>
      <ul>
        <li>Verify you're signed in to the same account on all devices</li>
        <li>Check network connectivity and firewall settings</li>
        <li>Force sync by signing out and back in</li>
        <li>Contact support if sync problems persist</li>
      </ul>

      <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 my-8 not-prose">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-2">Still Need Help?</h3>
            <p className="text-amber-800 dark:text-amber-200 mb-4">
              If you can't find a solution to your problem, please check the platform-specific guides or contact our support team.
            </p>
            <Button variant="outline" className="border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-100">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Troubleshooting;
