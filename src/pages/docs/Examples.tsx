
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, ExternalLink } from "lucide-react";

const Examples = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Examples</h1>
        <p className="text-xl text-gray-600">
          Real-world examples and use cases to help you get the most out of Pieces.
        </p>
      </div>

      <h2>Popular Code Snippets</h2>
      <p>
        Here are some of the most popular and useful code snippets saved by the Pieces community.
      </p>

      <div className="not-prose space-y-6 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Debounce Function</CardTitle>
              <div className="flex items-center space-x-2">
                <Badge>JavaScript</Badge>
                <Badge variant="outline">Utility</Badge>
              </div>
            </div>
            <CardDescription>
              Prevents excessive function calls by delaying execution until after a specified time period.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="code" className="w-full">
              <TabsList>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
              </TabsList>
              <TabsContent value="code">
                <div className="relative">
                  <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                    <code>{`function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
}`}</code>
                  </pre>
                  <Button size="sm" variant="ghost" className="absolute top-2 right-2">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="usage">
                <div className="space-y-4">
                  <p className="text-sm">Use this function to limit API calls during user input:</p>
                  <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                    <code>{`const debouncedSearch = debounce((query) => {
  searchAPI(query);
}, 300);

// In your event handler
input.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});`}</code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">React Custom Hook</CardTitle>
              <div className="flex items-center space-x-2">
                <Badge>React</Badge>
                <Badge variant="outline">Hooks</Badge>
              </div>
            </div>
            <CardDescription>
              A custom hook for managing local storage state in React applications.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="code" className="w-full">
              <TabsList>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="usage">Usage</TabsTrigger>
              </TabsList>
              <TabsContent value="code">
                <div className="relative">
                  <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                    <code>{`import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  };

  return [storedValue, setValue];
}`}</code>
                  </pre>
                  <Button size="sm" variant="ghost" className="absolute top-2 right-2">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="usage">
                <div className="space-y-4">
                  <p className="text-sm">Use this hook to persist state in localStorage:</p>
                  <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                    <code>{`function UserPreferences() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [language, setLanguage] = useLocalStorage('language', 'en');

  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme: {theme}
      </button>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Python API Helper</CardTitle>
              <div className="flex items-center space-x-2">
                <Badge>Python</Badge>
                <Badge variant="outline">API</Badge>
              </div>
            </div>
            <CardDescription>
              A utility class for making HTTP requests with automatic retry and error handling.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                <code>{`import requests
import time
from typing import Optional, Dict, Any

class APIClient:
    def __init__(self, base_url: str, timeout: int = 30):
        self.base_url = base_url.rstrip('/')
        self.timeout = timeout
        self.session = requests.Session()
    
    def request(self, method: str, endpoint: str, 
                retries: int = 3, **kwargs) -> requests.Response:
        url = f"{self.base_url}/{endpoint.lstrip('/')}"
        
        for attempt in range(retries + 1):
            try:
                response = self.session.request(
                    method, url, timeout=self.timeout, **kwargs
                )
                response.raise_for_status()
                return response
            except requests.exceptions.RequestException as e:
                if attempt == retries:
                    raise e
                time.sleep(2 ** attempt)  # Exponential backoff
    
    def get(self, endpoint: str, **kwargs) -> Dict[str, Any]:
        return self.request('GET', endpoint, **kwargs).json()
    
    def post(self, endpoint: str, **kwargs) -> Dict[str, Any]:
        return self.request('POST', endpoint, **kwargs).json()`}</code>
              </pre>
              <Button size="sm" variant="ghost" className="absolute top-2 right-2">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Use Case Examples</h2>

      <h3>Team Workflow: Frontend Components</h3>
      <p>
        Here's how a frontend team can use Pieces to share reusable React components:
      </p>

      <div className="not-prose mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Collection: UI Components</CardTitle>
            <CardDescription>
              Shared collection of reusable React components for the design system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold">Button Component</h4>
                  <p className="text-gray-600">Primary, secondary, and danger variants</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <Badge variant="outline" className="text-xs">React</Badge>
                    <Badge variant="outline" className="text-xs">TypeScript</Badge>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold">Modal Component</h4>
                  <p className="text-gray-600">Accessible modal with portal rendering</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <Badge variant="outline" className="text-xs">React</Badge>
                    <Badge variant="outline" className="text-xs">A11y</Badge>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold">Form Input</h4>
                  <p className="text-gray-600">Input with validation and error states</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <Badge variant="outline" className="text-xs">React</Badge>
                    <Badge variant="outline" className="text-xs">Forms</Badge>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Collection
                </Button>
                <Button size="sm" variant="outline">Clone to VS Code</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>Personal Workflow: Algorithm Practice</h3>
      <p>
        How a developer uses Pieces to organize and practice coding interview questions:
      </p>

      <div className="not-prose mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Collection: LeetCode Solutions</CardTitle>
            <CardDescription>
              Personal collection of algorithm solutions with different approaches
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold">Two Sum - Hash Map</h4>
                  <p className="text-gray-600">O(n) time complexity solution</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <Badge variant="outline" className="text-xs">Python</Badge>
                    <Badge variant="outline" className="text-xs">Easy</Badge>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold">Binary Tree Traversal</h4>
                  <p className="text-gray-600">Recursive and iterative approaches</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <Badge variant="outline" className="text-xs">Java</Badge>
                    <Badge variant="outline" className="text-xs">Medium</Badge>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold">Dynamic Programming</h4>
                  <p className="text-gray-600">Fibonacci with memoization</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <Badge variant="outline" className="text-xs">JavaScript</Badge>
                    <Badge variant="outline" className="text-xs">Medium</Badge>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <h4 className="font-semibold">Graph Algorithms</h4>
                  <p className="text-gray-600">BFS and DFS implementations</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <Badge variant="outline" className="text-xs">C++</Badge>
                    <Badge variant="outline" className="text-xs">Hard</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Integration Examples</h2>

      <h3>VS Code Workflow</h3>
      <div className="not-prose mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Typical Daily Workflow:</h4>
              <ol className="space-y-2 text-sm">
                <li>1. <strong>Morning:</strong> Search for utility functions needed for today's tasks</li>
                <li>2. <strong>During Development:</strong> Save interesting code snippets from Stack Overflow</li>
                <li>3. <strong>Code Review:</strong> Save approved patterns and best practices</li>
                <li>4. <strong>End of Day:</strong> Organize new snippets into appropriate collections</li>
              </ol>
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <p className="text-sm font-medium text-blue-900">Pro Tip:</p>
                <p className="text-sm text-blue-800">
                  Use the VS Code command palette (Ctrl/Cmd + Shift + P) and type "Pieces" to quickly access all features.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>API Integration Example</h3>
      <p>
        Here's how to build a simple snippet manager using the Pieces API:
      </p>

      <div className="not-prose mb-6">
        <Card>
          <CardContent className="pt-6">
            <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
              <code>{`// Simple Pieces API client
class PiecesClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.pieces.app/v1';
  }

  async createSnippet(snippet) {
    const response = await fetch(\`\${this.baseURL}/snippets\`, {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${this.apiKey}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(snippet)
    });
    return response.json();
  }

  async searchSnippets(query) {
    const response = await fetch(
      \`\${this.baseURL}/search?q=\${encodeURIComponent(query)}\`,
      {
        headers: {
          'Authorization': \`Bearer \${this.apiKey}\`
        }
      }
    );
    return response.json();
  }
}

// Usage
const client = new PiecesClient('your-api-key');

// Create a new snippet
await client.createSnippet({
  title: 'Array Helper Functions',
  content: 'const unique = arr => [...new Set(arr)];',
  language: 'javascript',
  tags: ['javascript', 'array', 'utility']
});

// Search for snippets
const results = await client.searchSnippets('array utility');
console.log(results);`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8 not-prose">
        <h3 className="text-lg font-semibold text-green-900 mb-2">Contribute Your Examples</h3>
        <p className="text-green-800 mb-4">
          Have a great use case or workflow? We'd love to feature your example in our documentation!
        </p>
        <Button>Submit Your Example</Button>
      </div>
    </div>
  );
};

export default Examples;
