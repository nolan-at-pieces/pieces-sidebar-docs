
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { exec } from "child_process";
import { promisify } from "util";
import type { Plugin, ViteDevServer } from "vite";

const execAsync = promisify(exec);

// Plugin to build content index during development
function contentBuilderPlugin(): Plugin {
  return {
    name: 'content-builder',
    async buildStart() {
      // Build content index at startup
      try {
        await execAsync('node scripts/build-content.js');
      } catch (error) {
        console.error('Error building content:', error);
      }
    },
    configureServer(server: ViteDevServer) {
      // Watch for markdown file changes in development
      server.middlewares.use((req, res, next) => {
        if (req.url?.includes('.md') && req.method === 'POST') {
          execAsync('node scripts/build-content.js').catch(console.error);
        }
        next();
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    contentBuilderPlugin(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
