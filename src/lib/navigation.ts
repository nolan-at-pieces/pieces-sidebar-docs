export interface NavItem {
  title: string;
  href?: string | null;
  isBold?: boolean;
  isSection?: boolean;
  items?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    title: "Meet Pieces",
    href: "/docs/meet-pieces",
    isBold: true,
    items: [
      { title: "Fundamentals", href: "/docs/meet-pieces/fundamentals" },
    ],
  },
  {
    title: "Pieces | Quick Guides",
    href: null,
    isSection: true,
    items: [
      { title: "Overview", href: "/docs/quick-guides/quick-guides/overview" },
      { title: "Using Long-Term Memory Context", href: "/docs/quick-guides/quick-guides/ltm-context" },
      { title: "Using Pieces Copilot with Context", href: "/docs/quick-guides/quick-guides/copilot-with-context" },
      {
        title: "Long-Term Memory Prompting Guide",
        href: "/docs/quick-guides/quick-guides/ltm-prompting",
        items: [
          { title: "Use Cases and Example Prompts", href: "/docs/quick-guides/quick-guides/ltm-prompting/examples" },
          { title: "Use Cases for the Pieces Workstream Activity View", href: "/docs/quick-guides/quick-guides/ltm-prompting/workstream-activity" },
          { title: "General Long-Term Memory Prompting Tips", href: "/docs/quick-guides/quick-guides/ltm-prompting/tips" },
        ],
      },
    ],
  },
  {
    title: "Pieces | Suite",
    href: null,
    isSection: true,
    items: [
      {
        title: "Desktop App",
        href: "/docs/desktop",
        items: [
          { title: "Download & Install", href: "/docs/desktop/download" },
          { title: "Onboarding", href: "/docs/desktop/onboarding" },
          {
            title: "Pieces Copilot",
            href: "/docs/desktop/copilot",
            items: [
              { title: "Interacting with Pieces Copilot", href: "/docs/desktop/copilot/interaction" },
              { title: "Context & Project Integration", href: "/docs/desktop/copilot/integration" },
              { title: "Configuring Pieces Copilot", href: "/docs/desktop/copilot/configuration" },
              { title: "Pieces Copilot in Multiple Environments", href: "/docs/desktop/copilot/multiple-environments" },
            ],
          },
          {
            title: "Pieces Drive",
            href: "/docs/desktop/drive",
            items: [
              { title: "Saving & Organizing Materials", href: "/docs/desktop/drive/save-and-organize" },
              { title: "Searching & Filtering", href: "/docs/desktop/drive/search-and-filter" },
              { title: "Enrichment & Metadata", href: "/docs/desktop/drive/enrichment-and-metadata" },
              { title: "Transforming Code", href: "/docs/desktop/drive/transforming-code" },
              { title: "Sharing", href: "/docs/desktop/drive/sharing" },
            ],
          },
          { title: "Workstream Activity", href: "/docs/desktop/workstream-activity" },
          {
            title: "Navigation",
            href: "/docs/desktop/navigation",
            items: [
              { title: "Settings", href: "/docs/desktop/navigation/settings" },
              { title: "Captured Context", href: "/docs/desktop/navigation/captured-context" },
              { title: "Updates & Upcoming", href: "/docs/desktop/navigation/updates" },
              { title: "Snippet Discovery", href: "/docs/desktop/navigation/snippet-discovery" },
              { title: "Workflow Activity", href: "/docs/desktop/navigation/workflow-activity" },
              { title: "Global Search", href: "/docs/desktop/navigation/global-search" },
            ],
          },
          {
            title: "Configuration",
            href: "/docs/desktop/configuration",
            items: [
              { title: "Account & Cloud", href: "/docs/desktop/configuration/account-and-cloud" },
              { title: "Pieces Copilot & Machine Learning", href: "/docs/desktop/configuration/copilot-and-machine-learning" },
              { title: "Model Context Protocol (MCP)", href: "/docs/desktop/configuration/mcp" },
              { title: "Aesthetics & Layouts", href: "/docs/desktop/configuration/aesthetics-layout" },
              { title: "Additional Settings", href: "/docs/desktop/configuration/additional-settings" },
              { title: "Support & Information", href: "/docs/desktop/configuration/support" },
            ],
          },
          {
            title: "Actions & Keyboard Shortcuts",
            href: "/docs/desktop/actions",
            items: [
              { title: "Power Menu", href: "/docs/desktop/actions/power-menu" },
              { title: "Keyboard Shortcuts", href: "/docs/desktop/actions/keyboard-shortcuts" },
            ],
          },
          {
            title: "Troubleshooting",
            href: "/docs/desktop/troubleshooting",
            items: [
              { title: "Cross-Platform", href: "/docs/desktop/troubleshooting/cross-platform" },
              { title: "macOS", href: "/docs/desktop/troubleshooting/macos" },
              { title: "Windows", href: "/docs/desktop/troubleshooting/windows" },
              { title: "Linux", href: "/docs/desktop/troubleshooting/linux" },
            ],
          },
        ],
      },
      {
        title: "Core Dependencies",
        href: "/docs/core-dependencies",
        items: [
          {
            title: "PiecesOS",
            href: "/docs/core-dependencies/pieces-os",
            items: [
              { title: "Manual Installation", href: "/docs/core-dependencies/pieces-os/manual-installation" },
              { title: "Quick Menu", href: "/docs/core-dependencies/pieces-os/quick-menu" },
              { title: "Troubleshooting", href: "/docs/core-dependencies/pieces-os/troubleshooting" },
            ],
          },
          {
            title: "Ollama",
            href: "/docs/core-dependencies/ollama",
            items: [
              { title: "Manual Installation", href: "/docs/core-dependencies/ollama/manual-installation" },
              { title: "Supported Models", href: "/docs/core-dependencies/ollama/supported-models" },
              { title: "Troubleshooting", href: "/docs/core-dependencies/ollama/troubleshooting" },
            ],
          },
          { title: "On-Device Storage", href: "/docs/core-dependencies/on-device-storage" },
        ],
      },
    ],
  },
  {
    title: "Pieces | MCP",
    href: null,
    isSection: true,
    items: [
      { title: "Get Started with MCP", href: "/docs/mcp/mcp/get-started" },
      { title: "MCP Prompting", href: "/docs/mcp/mcp/prompting" },
      { title: "MCP → Cursor", href: "/docs/mcp/mcp/cursor" },
      { title: "MCP → GitHub Copilot", href: "/docs/mcp/mcp/github-copilot" },
      { title: "MCP → Goose", href: "/docs/mcp/mcp/goose" },
    ],
  },
  {
    title: "Pieces | IDEs",
    href: null,
    isSection: true,
    items: [
      {
        title: "Visual Studio Code Extension",
        href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code",
        items: [
          { title: "Get Started", href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/get-started" },
          { title: "Commands", href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/commands" },
          { title: "Configuration", href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/configuration" },
          {
            title: "Pieces Copilot",
            href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/copilot",
            items: [
              { title: "Chat", href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/copilot/chat" },
              { title: "Debugging Errors", href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/copilot/debugging-errors" },
              { title: "Documenting Code", href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/copilot/documenting-code" },
              { title: "Refactoring", href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/copilot/refactoring" },
              { title: "LLM Settings", href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/copilot/llm-settings" },
            ],
          },
          {
            title: "Pieces Drive",
            href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/drive",
            items: [
              { title: "Save Snippets", href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/drive/save-snippets" },
              { title: "Search & Reuse", href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/drive/search-reuse" },
              { title: "Edit & Update", href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/drive/edit-update" },
              { title: "Sharing", href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/drive/sharing" },
            ],
          },
          { title: "Forks", href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/forks" },
          { title: "Troubleshooting", href: "/docs/extensions-plugins/extensions-plugins/visual-studio-code/troubleshooting" },
        ],
      },
      {
        title: "JetBrains Plugin",
        href: "/docs/extensions-plugins/extensions-plugins/jetbrains",
        items: [
          { title: "Get Started", href: "/docs/extensions-plugins/extensions-plugins/jetbrains/get-started" },
          { title: "Commands", href: "/docs/extensions-plugins/extensions-plugins/jetbrains/commands" },
          { title: "Configuration", href: "/docs/extensions-plugins/extensions-plugins/jetbrains/configuration" },
          {
            title: "Pieces Copilot",
            href: "/docs/extensions-plugins/extensions-plugins/jetbrains/copilot",
            items: [
              { title: "Chat", href: "/docs/extensions-plugins/extensions-plugins/jetbrains/copilot/chat" },
              { title: "Debugging Errors", href: "/docs/extensions-plugins/extensions-plugins/jetbrains/copilot/debugging-errors" },
              { title: "Documenting Code", href: "/docs/extensions-plugins/extensions-plugins/jetbrains/copilot/documenting-code" },
              { title: "Refactoring", href: "/docs/extensions-plugins/extensions-plugins/jetbrains/copilot/refactoring" },
              { title: "LLM Settings", href: "/docs/extensions-plugins/extensions-plugins/jetbrains/copilot/llm-settings" },
            ],
          },
          {
            title: "Pieces Drive",
            href: "/docs/extensions-plugins/extensions-plugins/jetbrains/drive",
            items: [
              { title: "Save Snippets", href: "/docs/extensions-plugins/extensions-plugins/jetbrains/drive/save-snippets" },
              { title: "Search & Reuse", href: "/docs/extensions-plugins/extensions-plugins/jetbrains/drive/search-reuse" },
              { title: "Edit & Update", href: "/docs/extensions-plugins/extensions-plugins/jetbrains/drive/edit-update" },
              { title: "Sharing", href: "/docs/extensions-plugins/extensions-plugins/jetbrains/drive/sharing" },
            ],
          },
          { title: "Troubleshooting", href: "/docs/extensions-plugins/extensions-plugins/jetbrains/troubleshooting" },
        ],
      },
      {
        title: "Visual Studio Extension",
        href: "/docs/extensions-plugins/extensions-plugins/visual-studio",
        items: [
          { title: "Get Started", href: "/docs/extensions-plugins/extensions-plugins/visual-studio/get-started" },
          { title: "Commands", href: "/docs/extensions-plugins/extensions-plugins/visual-studio/commands" },
          { title: "Configuration", href: "/docs/extensions-plugins/extensions-plugins/visual-studio/configuration" },
          {
            title: "Pieces Copilot",
            href: "/docs/extensions-plugins/extensions-plugins/visual-studio/copilot",
            items: [
              { title: "Chat", href: "/docs/extensions-plugins/extensions-plugins/visual-studio/copilot/chat" },
              { title: "Documenting Code", href: "/docs/extensions-plugins/extensions-plugins/visual-studio/copilot/documenting-code" },
              { title: "Refactoring", href: "/docs/extensions-plugins/extensions-plugins/visual-studio/copilot/refactoring" },
              { title: "LLM Settings", href: "/docs/extensions-plugins/extensions-plugins/visual-studio/copilot/llm-settings" },
            ],
          },
          {
            title: "Pieces Drive",
            href: "/docs/extensions-plugins/extensions-plugins/visual-studio/drive",
            items: [
              { title: "Save Snippets", href: "/docs/extensions-plugins/extensions-plugins/visual-studio/drive/save-snippets" },
              { title: "Search & Reuse", href: "/docs/extensions-plugins/extensions-plugins/visual-studio/drive/search-reuse" },
              { title: "Edit & Update", href: "/docs/extensions-plugins/extensions-plugins/visual-studio/drive/edit-update" },
              { title: "Sharing", href: "/docs/extensions-plugins/extensions-plugins/visual-studio/drive/sharing" },
            ],
          },
          { title: "Troubleshooting", href: "/docs/extensions-plugins/extensions-plugins/visual-studio/troubleshooting" },
        ],
      },
      {
        title: "Sublime Text Plugin",
        href: "/docs/extensions-plugins/extensions-plugins/sublime",
        items: [
          { title: "Get Started", href: "/docs/extensions-plugins/extensions-plugins/sublime/get-started" },
          { title: "Commands", href: "/docs/extensions-plugins/extensions-plugins/sublime/commands" },
          { title: "Configuration", href: "/docs/extensions-plugins/extensions-plugins/sublime/configuration" },
          {
            title: "Pieces Copilot",
            href: "/docs/extensions-plugins/extensions-plugins/sublime/copilot",
            items: [
              { title: "Chat", href: "/docs/extensions-plugins/extensions-plugins/sublime/copilot/chat" },
              { title: "Debugging Errors", href: "/docs/extensions-plugins/extensions-plugins/sublime/copilot/debugging-errors" },
              { title: "Documenting Code", href: "/docs/extensions-plugins/extensions-plugins/sublime/copilot/documenting-code" },
              { title: "Refactoring", href: "/docs/extensions-plugins/extensions-plugins/sublime/copilot/refactoring" },
              { title: "LLM Settings", href: "/docs/extensions-plugins/extensions-plugins/sublime/copilot/llm-settings" },
            ],
          },
          {
            title: "Pieces Drive",
            href: "/docs/extensions-plugins/extensions-plugins/sublime/drive",
            items: [
              { title: "Save Snippets", href: "/docs/extensions-plugins/extensions-plugins/sublime/drive/save-snippets" },
              { title: "Search & Reuse", href: "/docs/extensions-plugins/extensions-plugins/sublime/drive/search-reuse" },
              { title: "Edit & Update", href: "/docs/extensions-plugins/extensions-plugins/sublime/drive/edit-update" },
              { title: "Sharing", href: "/docs/extensions-plugins/extensions-plugins/sublime/drive/sharing" },
            ],
          },
          { title: "Troubleshooting", href: "/docs/extensions-plugins/extensions-plugins/sublime/troubleshooting" },
        ],
      },
      { title: "JupyterLab Extension", href: "/docs/extensions-plugins/extensions-plugins/jupyterlab" },
      { title: "Neovim Plugin", href: "/docs/extensions-plugins/extensions-plugins/neovim-plugin" },
    ],
  },
  {
    title: "Pieces | Productivity",
    href: null,
    isSection: true,
    items: [
      {
        title: "Obsidian Plugin",
        href: "/docs/obsidian",
        items: [
          { title: "Get Started", href: "/docs/obsidian/get-started" },
          { title: "Commands", href: "/docs/obsidian/commands" },
          { title: "Configuration", href: "/docs/obsidian/configuration" },
          {
            title: "Pieces Copilot",
            href: "/docs/obsidian/copilot",
            items: [
              { title: "Chat", href: "/docs/obsidian/copilot/chat" },
              { title: "LLM Settings", href: "/docs/obsidian/copilot/llm-settings" },
            ],
          },
          {
            title: "Pieces Drive",
            href: "/docs/obsidian/drive",
            items: [
              { title: "Save Snippets", href: "/docs/obsidian/drive/save-snippets" },
              { title: "Search & Reuse", href: "/docs/obsidian/drive/search-reuse" },
              { title: "Edit & Update", href: "/docs/obsidian/drive/edit-update" },
              { title: "Sharing", href: "/docs/obsidian/drive/sharing" },
            ],
          },
          { title: "Troubleshooting", href: "/docs/obsidian/troubleshooting" },
        ],
      },
      {
        title: "Web Extension",
        href: "/docs/web-extension",
        items: [
          { title: "Get Started", href: "/docs/web-extension/get-started" },
          { title: "Configuration", href: "/docs/web-extension/configuration" },
          { title: "Shortcuts", href: "/docs/web-extension/shortcuts" },
          {
            title: "Pieces Copilot",
            href: "/docs/web-extension/copilot",
            items: [
              { title: "Chat", href: "/docs/web-extension/copilot/chat" },
              { title: "LLM Settings", href: "/docs/web-extension/copilot/llm-settings" },
            ],
          },
          {
            title: "Pieces Drive",
            href: "/docs/web-extension/drive",
            items: [
              { title: "Save Snippets", href: "/docs/web-extension/drive/save-snippets" },
              { title: "Search & Reuse", href: "/docs/web-extension/drive/search-reuse" },
              { title: "Edit & Update", href: "/docs/web-extension/drive/edit-update" },
              { title: "Sharing", href: "/docs/web-extension/drive/sharing" },
            ],
          },
          { title: "Troubleshooting", href: "/docs/web-extension/troubleshooting" },
        ],
      },
      {
        title: "Pieces CLI",
        href: "/docs/cli",
        items: [
          { title: "Get Started", href: "/docs/cli/get-started" },
          { title: "Commands", href: "/docs/cli/commands" },
          { title: "Configuration", href: "/docs/cli/configuration" },
          {
            title: "Pieces Copilot",
            href: "/docs/cli/copilot",
            items: [
              { title: "Chat", href: "/docs/cli/copilot/chat" },
              { title: "LLMs Settings", href: "/docs/cli/copilot/llms-settings" },
            ],
          },
          {
            title: "Pieces Drive",
            href: "/docs/cli/drive",
            items: [
              { title: "Saving Materials", href: "/docs/cli/drive/saving-materials" },
              { title: "Search & Reuse", href: "/docs/cli/drive/search-and-reuse" },
              { title: "Edit & Update", href: "/docs/cli/drive/edit-and-update" },
              { title: "Sharing", href: "/docs/cli/drive/sharing" },
            ],
          },
          { title: "Troubleshooting", href: "/docs/cli/troubleshooting" },
        ],
      },
      { title: "Raycast Extension", href: "/docs/raycast" },
    ],
  },
  {
    title: "Pieces | More",
    href: null,
    isSection: true,
    items: [
      { title: "Privacy, Security & Your Data", href: "/docs/privacy-security-your-data" },
      {
        title: "Compatible LLMs",
        href: "/docs/large-language-models",
        items: [
          { title: "Cloud Models", href: "/docs/large-language-models/cloud-models" },
          { title: "Local Models", href: "/docs/large-language-models/local-models" },
        ],
      },
      { title: "Glossary", href: "/docs/glossary" },
    ],
  },
  {
    title: "Get Help",
    href: null,
    isSection: true,
    items: [
      { title: "Support", href: "/docs/support" },
    ],
  },
];