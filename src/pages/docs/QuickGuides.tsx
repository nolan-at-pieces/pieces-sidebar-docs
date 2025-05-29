
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Brain, MessageSquare } from "lucide-react";

const QuickGuides = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Pieces | Quick Guides</h1>
        <p className="text-xl text-muted-foreground">
          Fast-track your productivity with these essential guides for getting the most out of Pieces.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12 not-prose">
        <Link to="/docs/quick-guides/overview">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Zap className="w-8 h-8 text-yellow-600 mb-2" />
              <CardTitle>Overview</CardTitle>
              <CardDescription>
                Get a comprehensive overview of Pieces features and capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="p-0">
                Quick overview <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/docs/quick-guides/long-term-memory">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Brain className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Long-Term Memory</CardTitle>
              <CardDescription>
                Learn how to leverage Pieces' long-term memory context features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="p-0">
                Memory guide <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/docs/quick-guides/copilot-context">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <MessageSquare className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Copilot Context</CardTitle>
              <CardDescription>
                Maximize your AI assistant with contextual information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="p-0">
                Copilot tips <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>
      </div>

      <h2>Quick Start Essentials</h2>
      <p>
        These guides are designed to get you productive with Pieces as quickly as possible. 
        Each guide focuses on a specific aspect of the platform and can be completed in just a few minutes.
      </p>

      <h3>What You'll Learn</h3>
      <ul>
        <li><strong>Overview:</strong> Understanding the Pieces ecosystem and core features</li>
        <li><strong>Long-Term Memory:</strong> How to build and leverage contextual knowledge</li>
        <li><strong>Copilot Integration:</strong> Getting the most out of AI-powered assistance</li>
      </ul>

      <h3>Prerequisites</h3>
      <p>
        Before diving into these quick guides, make sure you have:
      </p>
      <ul>
        <li>Pieces desktop application installed and running</li>
        <li>A Pieces account (free or paid)</li>
        <li>Basic familiarity with your development environment</li>
      </ul>

      <h3>Time Investment</h3>
      <p>
        Each guide is designed to be completed in 5-10 minutes, making them perfect for:
      </p>
      <ul>
        <li>New users getting started with Pieces</li>
        <li>Experienced users exploring specific features</li>
        <li>Teams onboarding new members</li>
        <li>Quick reference during development</li>
      </ul>

      <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-8 not-prose">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">Ready to Get Started?</h3>
        <p className="text-green-800 dark:text-green-200 mb-4">
          Begin with the overview to understand the full scope of what Pieces can do for your workflow.
        </p>
        <Link to="/docs/quick-guides/overview">
          <Button className="bg-green-600 hover:bg-green-700">
            Start with Overview <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QuickGuides;
