
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const QuickStart = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Quick Start Guide</h1>
        <p className="text-xl text-gray-600">
          Learn how to save, organize, and retrieve your first code snippets in just a few minutes.
        </p>
      </div>

      <h2>Your First Code Snippet</h2>
      <p>
        Let's start by saving your first code snippet. This example shows how to save a simple JavaScript function.
      </p>

      <div className="not-prose mb-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Example: JavaScript Function</CardTitle>
              <Badge variant="secondary">JavaScript</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto">
              <code>{`function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>

      <h3>Step 1: Save the Snippet</h3>
      <ol>
        <li>Copy the code above</li>
        <li>Open Pieces desktop application</li>
        <li>Click the "+" button or use Ctrl/Cmd + N</li>
        <li>Paste your code into the editor</li>
        <li>Add a title: "Debounce Function"</li>
        <li>Add tags: "javascript", "utility", "debounce"</li>
        <li>Click "Save"</li>
      </ol>

      <h3>Step 2: Add Context</h3>
      <p>
        Pieces automatically detects the language and suggests tags, but you can add additional context:
      </p>
      <ul>
        <li><strong>Description:</strong> "Utility function to debounce function calls"</li>
        <li><strong>Use Case:</strong> "Prevents excessive API calls on user input"</li>
        <li><strong>Related Files:</strong> Link to related snippets or documentation</li>
      </ul>

      <h2>Organizing with Collections</h2>
      <p>
        Collections help you organize related snippets. Let's create your first collection:
      </p>

      <ol>
        <li>In the sidebar, click "Collections"</li>
        <li>Click "New Collection"</li>
        <li>Name it "JavaScript Utilities"</li>
        <li>Add a description: "Useful JavaScript helper functions"</li>
        <li>Drag your debounce snippet into this collection</li>
      </ol>

      <h2>Finding Your Code</h2>
      <p>
        Pieces offers multiple ways to find your saved code:
      </p>

      <h3>Search Methods</h3>
      <ul>
        <li><strong>Text Search:</strong> Search by code content, titles, or descriptions</li>
        <li><strong>Tag Filtering:</strong> Filter by programming language or custom tags</li>
        <li><strong>AI Search:</strong> Use natural language: "function to delay execution"</li>
        <li><strong>Recent Activity:</strong> Quick access to recently saved or used snippets</li>
      </ul>

      <h3>Try It Now</h3>
      <ol>
        <li>Use the search bar at the top</li>
        <li>Type "debounce" - your snippet should appear</li>
        <li>Try "javascript utility" - it should also match</li>
        <li>Use AI search: "function that delays execution"</li>
      </ol>

      <h2>IDE Integration</h2>
      <p>
        The real power of Pieces comes from IDE integration. Here's how to use it with VS Code:
      </p>

      <h3>VS Code Setup</h3>
      <ol>
        <li>Install the Pieces VS Code extension</li>
        <li>Open the command palette (Ctrl/Cmd + Shift + P)</li>
        <li>Type "Pieces: Sign In" and authenticate</li>
        <li>Your snippets will sync automatically</li>
      </ol>

      <h3>Using Snippets in VS Code</h3>
      <ol>
        <li>Open a JavaScript file</li>
        <li>Open the command palette</li>
        <li>Type "Pieces: Search Snippets"</li>
        <li>Search for "debounce"</li>
        <li>Select your snippet to insert it</li>
      </ol>

      <h2>Keyboard Shortcuts</h2>
      <div className="not-prose">
        <Card>
          <CardHeader>
            <CardTitle>Essential Shortcuts</CardTitle>
            <CardDescription>Speed up your workflow with these keyboard shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Desktop App</h4>
                <ul className="space-y-1">
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl/Cmd + N</kbd> - New snippet</li>
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl/Cmd + F</kbd> - Search</li>
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl/Cmd + S</kbd> - Save snippet</li>
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl/Cmd + D</kbd> - Duplicate</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">VS Code Extension</h4>
                <ul className="space-y-1">
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl/Cmd + Shift + P</kbd> - Command palette</li>
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Alt + P</kbd> - Quick search</li>
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl/Cmd + Alt + S</kbd> - Save selection</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Next Steps</h2>
      <p>
        Now that you've saved your first snippet, here are some things to explore:
      </p>

      <ul>
        <li>Try saving snippets in different programming languages</li>
        <li>Experiment with AI-powered search queries</li>
        <li>Set up integrations with your other development tools</li>
        <li>Explore advanced features like snippet sharing and team collaboration</li>
      </ul>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8 not-prose">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Ready for More?</h3>
        <p className="text-blue-800 mb-4">
          Check out our API reference to learn how to integrate Pieces into your development workflow programmatically.
        </p>
      </div>
    </div>
  );
};

export default QuickStart;
