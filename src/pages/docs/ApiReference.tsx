
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ApiReference = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">API Reference</h1>
        <p className="text-xl text-gray-600">
          Integrate Pieces into your development workflow with our comprehensive REST API.
        </p>
      </div>

      <div className="not-prose mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Base URL</CardTitle>
            <CardDescription>All API endpoints are relative to this base URL</CardDescription>
          </CardHeader>
          <CardContent>
            <code className="bg-gray-100 px-3 py-2 rounded">https://api.pieces.app/v1</code>
          </CardContent>
        </Card>
      </div>

      <h2>Authentication</h2>
      <p>
        All API requests require authentication using an API key. Include your API key in the Authorization header:
      </p>

      <div className="not-prose mb-6">
        <Card>
          <CardContent className="pt-6">
            <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto">
              <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>

      <h2>Endpoints</h2>

      <h3>Snippets</h3>
      
      <div className="not-prose space-y-4 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Get All Snippets</CardTitle>
              <Badge variant="secondary">GET</Badge>
            </div>
            <CardDescription>/snippets</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="request" className="w-full">
              <TabsList>
                <TabsTrigger value="request">Request</TabsTrigger>
                <TabsTrigger value="response">Response</TabsTrigger>
              </TabsList>
              <TabsContent value="request">
                <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                  <code>{`GET /v1/snippets?page=1&limit=20&language=javascript

Query Parameters:
- page: Page number (default: 1)
- limit: Items per page (default: 20, max: 100)
- language: Filter by programming language
- tags: Filter by tags (comma-separated)
- search: Search in title and content`}</code>
                </pre>
              </TabsContent>
              <TabsContent value="response">
                <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                  <code>{`{
  "data": [
    {
      "id": "snippet-123",
      "title": "Debounce Function",
      "content": "function debounce(func, wait) { ... }",
      "language": "javascript",
      "tags": ["javascript", "utility", "debounce"],
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "pages": 3
  }
}`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Create Snippet</CardTitle>
              <Badge>POST</Badge>
            </div>
            <CardDescription>/snippets</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="request" className="w-full">
              <TabsList>
                <TabsTrigger value="request">Request</TabsTrigger>
                <TabsTrigger value="response">Response</TabsTrigger>
              </TabsList>
              <TabsContent value="request">
                <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                  <code>{`POST /v1/snippets

{
  "title": "React useEffect Hook",
  "content": "useEffect(() => {\\n  // Effect logic\\n}, []);",
  "language": "javascript",
  "tags": ["react", "hooks", "useEffect"],
  "description": "Basic useEffect hook pattern",
  "collection_id": "collection-456"
}`}</code>
                </pre>
              </TabsContent>
              <TabsContent value="response">
                <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                  <code>{`{
  "id": "snippet-789",
  "title": "React useEffect Hook",
  "content": "useEffect(() => {\\n  // Effect logic\\n}, []);",
  "language": "javascript",
  "tags": ["react", "hooks", "useEffect"],
  "description": "Basic useEffect hook pattern",
  "collection_id": "collection-456",
  "created_at": "2024-01-15T11:00:00Z",
  "updated_at": "2024-01-15T11:00:00Z"
}`}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Get Snippet</CardTitle>
              <Badge variant="secondary">GET</Badge>
            </div>
            <CardDescription>/snippets/:id</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
              <code>{`GET /v1/snippets/snippet-123`}</code>
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Update Snippet</CardTitle>
              <Badge variant="outline">PUT</Badge>
            </div>
            <CardDescription>/snippets/:id</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
              <code>{`PUT /v1/snippets/snippet-123

{
  "title": "Updated Debounce Function",
  "tags": ["javascript", "utility", "debounce", "performance"]
}`}</code>
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Delete Snippet</CardTitle>
              <Badge variant="destructive">DELETE</Badge>
            </div>
            <CardDescription>/snippets/:id</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
              <code>{`DELETE /v1/snippets/snippet-123`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>

      <h3>Collections</h3>
      
      <div className="not-prose space-y-4 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Get All Collections</CardTitle>
              <Badge variant="secondary">GET</Badge>
            </div>
            <CardDescription>/collections</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
              <code>{`GET /v1/collections

Response:
{
  "data": [
    {
      "id": "collection-456",
      "name": "JavaScript Utilities",
      "description": "Useful JavaScript helper functions",
      "snippet_count": 12,
      "created_at": "2024-01-10T09:00:00Z"
    }
  ]
}`}</code>
            </pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Create Collection</CardTitle>
              <Badge>POST</Badge>
            </div>
            <CardDescription>/collections</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
              <code>{`POST /v1/collections

{
  "name": "Python Scripts",
  "description": "Collection of useful Python automation scripts"
}`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>

      <h3>Search</h3>
      
      <div className="not-prose space-y-4 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">AI-Powered Search</CardTitle>
              <Badge variant="secondary">GET</Badge>
            </div>
            <CardDescription>/search</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
              <code>{`GET /v1/search?q=function to delay execution&type=ai

Query Parameters:
- q: Search query (required)
- type: Search type (text|ai|semantic)
- language: Filter by programming language
- limit: Number of results (default: 10, max: 50)`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>

      <h2>Rate Limits</h2>
      <p>
        API requests are rate limited to ensure service stability:
      </p>
      
      <ul>
        <li><strong>Free tier:</strong> 100 requests per hour</li>
        <li><strong>Pro tier:</strong> 1,000 requests per hour</li>
        <li><strong>Enterprise:</strong> Custom limits available</li>
      </ul>

      <h2>Error Codes</h2>
      
      <div className="not-prose">
        <Card>
          <CardHeader>
            <CardTitle>Common Error Responses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold">400 Bad Request</h4>
                <p className="text-gray-600">Invalid request parameters</p>
              </div>
              <div>
                <h4 className="font-semibold">401 Unauthorized</h4>
                <p className="text-gray-600">Invalid or missing API key</p>
              </div>
              <div>
                <h4 className="font-semibold">404 Not Found</h4>
                <p className="text-gray-600">Resource not found</p>
              </div>
              <div>
                <h4 className="font-semibold">429 Too Many Requests</h4>
                <p className="text-gray-600">Rate limit exceeded</p>
              </div>
              <div>
                <h4 className="font-semibold">500 Internal Server Error</h4>
                <p className="text-gray-600">Server error - please try again</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>SDKs and Libraries</h2>
      <p>
        We provide official SDKs for popular programming languages:
      </p>
      
      <ul>
        <li><strong>JavaScript/Node.js:</strong> <code>npm install @pieces/sdk</code></li>
        <li><strong>Python:</strong> <code>pip install pieces-sdk</code></li>
        <li><strong>Go:</strong> <code>go get github.com/pieces-app/go-sdk</code></li>
        <li><strong>Java:</strong> Available via Maven Central</li>
      </ul>
    </div>
  );
};

export default ApiReference;
