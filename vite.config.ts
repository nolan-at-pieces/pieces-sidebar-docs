
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

// Plugin to build content index during development
function contentBuilderPlugin() {
  return {
    name: 'content-builder',
    buildStart() {
      // Build content index at startup
      return execAsync('node scripts/build-content.js').catch(console.error);
    },
    configureServer(server) {
      // Watch for markdown file changes in development
      server.ws.on('file-changed', (file) => {
        if (file.includes('public/content') && file.endsWith('.md')) {
          execAsync('node scripts/build-content.js').catch(console.error);
        }
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
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
