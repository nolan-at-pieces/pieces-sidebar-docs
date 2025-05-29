
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Integrations = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Integrations</h1>
        <p className="text-xl text-gray-600">
          Connect Pieces with your favorite development tools and services to streamline your workflow.
        </p>
      </div>

      <h2>IDE Integrations</h2>
      
      <div className="not-prose grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Visual Studio Code</CardTitle>
              <Badge variant="secondary">Official</Badge>
            </div>
            <CardDescription>
              Full integration with VS Code including snippet insertion, AI search, and automatic saving.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Features:</p>
              <ul className="text-sm space-y-1">
                <li>• Save selections as snippets</li>
                <li>• Insert snippets with autocomplete</li>
                <li>• AI-powered code search</li>
                <li>• Automatic language detection</li>
              </ul>
              <Button className="w-full">Install Extension</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>JetBrains IDEs</CardTitle>
              <Badge variant="secondary">Official</Badge>
            </div>
            <CardDescription>
              Works with IntelliJ IDEA, WebStorm, PyCharm, and other JetBrains IDEs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Supported IDEs:</p>
              <ul className="text-sm space-y-1">
                <li>• IntelliJ IDEA</li>
                <li>• WebStorm</li>
                <li>• PyCharm</li>
                <li>• PhpStorm</li>
              </ul>
              <Button className="w-full">Install Plugin</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Sublime Text</CardTitle>
              <Badge variant="outline">Community</Badge>
            </div>
            <CardDescription>
              Community-maintained package for Sublime Text users.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Features:</p>
              <ul className="text-sm space-y-1">
                <li>• Basic snippet management</li>
                <li>• Search and insert</li>
                <li>• Collection browsing</li>
              </ul>
              <Button variant="outline" className="w-full">View on Package Control</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Vim/Neovim</CardTitle>
              <Badge variant="outline">Community</Badge>
            </div>
            <CardDescription>
              Vim plugin for terminal-based development workflows.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Installation:</p>
              <div className="bg-gray-100 rounded p-2 text-xs font-mono">
                Plug 'pieces-app/pieces.vim'
              </div>
              <Button variant="outline" className="w-full">View on GitHub</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Browser Extensions</h2>
      
      <div className="not-prose grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Chrome Extension</CardTitle>
            <CardDescription>
              Save code snippets from any webpage, including GitHub, Stack Overflow, and documentation sites.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Features:</p>
              <ul className="text-sm space-y-1">
                <li>• Right-click to save code blocks</li>
                <li>• Automatic metadata extraction</li>
                <li>• Quick access popup</li>
                <li>• Sync with desktop app</li>
              </ul>
              <Button className="w-full">Add to Chrome</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Firefox Add-on</CardTitle>
            <CardDescription>
              Full-featured Firefox extension with the same capabilities as the Chrome version.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">All Chrome features plus:</p>
              <ul className="text-sm space-y-1">
                <li>• Enhanced privacy controls</li>
                <li>• Offline snippet access</li>
                <li>• Custom keyboard shortcuts</li>
              </ul>
              <Button className="w-full">Add to Firefox</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Development Tools</h2>

      <h3>Version Control</h3>
      
      <div className="not-prose space-y-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Git Integration</CardTitle>
            <CardDescription>
              Track code snippets alongside your Git repositories
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Connect Pieces to your Git repositories to automatically associate snippets with commits and branches.
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">Setup Instructions:</h4>
                <ol className="text-sm space-y-1">
                  <li>1. Install the Pieces Git hooks</li>
                  <li>2. Configure repository settings</li>
                  <li>3. Enable automatic snippet detection</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>GitHub Integration</CardTitle>
            <CardDescription>
              Save snippets directly from GitHub repositories and gists
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Browse and save code snippets from public and private GitHub repositories.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Import from GitHub Gists</li>
                <li>• Save code from pull requests</li>
                <li>• Automatic repository linking</li>
                <li>• Team sharing via GitHub organizations</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>Communication Tools</h3>
      
      <div className="not-prose grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Slack Integration</CardTitle>
            <CardDescription>
              Share code snippets directly in Slack channels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Slack Commands:</p>
              <div className="space-y-2 text-sm">
                <div><code className="bg-gray-100 px-2 py-1 rounded">/pieces search [query]</code></div>
                <div><code className="bg-gray-100 px-2 py-1 rounded">/pieces share [snippet-id]</code></div>
                <div><code className="bg-gray-100 px-2 py-1 rounded">/pieces create [title]</code></div>
              </div>
              <Button className="w-full">Add to Slack</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Discord Bot</CardTitle>
            <CardDescription>
              Code sharing and collaboration in Discord servers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Bot Commands:</p>
              <div className="space-y-2 text-sm">
                <div><code className="bg-gray-100 px-2 py-1 rounded">!pieces search</code></div>
                <div><code className="bg-gray-100 px-2 py-1 rounded">!pieces random</code></div>
                <div><code className="bg-gray-100 px-2 py-1 rounded">!pieces save</code></div>
              </div>
              <Button className="w-full">Invite Bot</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Cloud Services</h2>

      <h3>Storage and Backup</h3>
      
      <div className="not-prose space-y-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Google Drive Sync</CardTitle>
            <CardDescription>
              Automatically backup your snippets to Google Drive
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Keep your code snippets synchronized across devices with automatic Google Drive backup.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Real-time synchronization</li>
                <li>• Conflict resolution</li>
                <li>• Version history</li>
                <li>• Selective sync folders</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dropbox Integration</CardTitle>
            <CardDescription>
              Export and import snippet collections via Dropbox
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                Use Dropbox for team sharing and collaborative snippet management.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Shared team folders</li>
                <li>• Bulk export/import</li>
                <li>• File format conversion</li>
                <li>• Access controls</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>API Integrations</h2>

      <h3>Webhooks</h3>
      <p>
        Set up webhooks to receive real-time notifications when snippets are created, updated, or shared:
      </p>

      <div className="not-prose mb-6">
        <Card>
          <CardContent className="pt-6">
            <pre className="bg-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
              <code>{`POST https://your-app.com/webhooks/pieces

{
  "event": "snippet.created",
  "data": {
    "id": "snippet-123",
    "title": "New React Hook",
    "language": "javascript",
    "user_id": "user-456"
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>

      <h3>Custom Integrations</h3>
      <p>
        Build custom integrations using our REST API and SDKs. Popular use cases include:
      </p>

      <ul>
        <li>Internal documentation tools</li>
        <li>Code review systems</li>
        <li>Learning management platforms</li>
        <li>Custom development workflows</li>
      </ul>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8 not-prose">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
        <p className="text-blue-800 mb-4">
          Can't find the integration you need? Our team can help you build custom integrations or add support for new tools.
        </p>
        <Button>Contact Support</Button>
      </div>
    </div>
  );
};

export default Integrations;
