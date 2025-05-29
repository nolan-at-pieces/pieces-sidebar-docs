
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Activity, Lightbulb } from "lucide-react";

const LongTermMemoryGuide = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Long-Term Memory Prompting Guide</h1>
        <p className="text-xl text-muted-foreground">
          Master the art of prompting with long-term memory context to enhance your AI interactions and productivity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12 not-prose">
        <Link to="/docs/long-term-memory-guide/use-cases">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Brain className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle>Use Cases and Example Prompts</CardTitle>
              <CardDescription>
                Explore practical examples and proven prompting strategies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="p-0">
                View examples <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/docs/long-term-memory-guide/workstream-activity">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Activity className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle>Workstream Activity View</CardTitle>
              <CardDescription>
                Leverage workstream context for better AI understanding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="p-0">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/docs/long-term-memory-guide/prompting-tips">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Lightbulb className="w-8 h-8 text-yellow-600 mb-2" />
              <CardTitle>General Prompting Tips</CardTitle>
              <CardDescription>
                Best practices and techniques for effective prompting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="p-0">
                Get tips <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </Link>
      </div>

      <h2>What is Long-Term Memory?</h2>
      <p>
        Long-term memory in Pieces refers to the AI's ability to maintain context across sessions, 
        remember your preferences, and build upon previous interactions to provide more relevant 
        and personalized assistance.
      </p>

      <h3>Key Benefits</h3>
      <ul>
        <li><strong>Contextual Awareness:</strong> AI understands your project history and coding patterns</li>
        <li><strong>Personalized Responses:</strong> Tailored suggestions based on your workflow</li>
        <li><strong>Continuous Learning:</strong> Improves recommendations over time</li>
        <li><strong>Project Continuity:</strong> Maintains context across multiple sessions</li>
      </ul>

      <h3>How It Works</h3>
      <p>
        Pieces captures and analyzes your development activities, code snippets, and interactions 
        to build a comprehensive understanding of your work patterns. This knowledge is then used 
        to enhance AI responses and provide more relevant assistance.
      </p>

      <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 my-8 not-prose">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">Ready to Dive Deeper?</h3>
        <p className="text-purple-800 dark:text-purple-200 mb-4">
          Explore specific use cases and learn advanced prompting techniques to maximize your productivity.
        </p>
        <div className="flex gap-4">
          <Link to="/docs/long-term-memory-guide/use-cases">
            <Button className="bg-purple-600 hover:bg-purple-700">
              View Use Cases <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link to="/docs/long-term-memory-guide/prompting-tips">
            <Button variant="outline" className="border-purple-300 dark:border-purple-700">
              Prompting Tips
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LongTermMemoryGuide;
