
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { exec } from "child_process";
import { promisify } from "util";
import type { Plugin, ViteDevServer } from "vite";
import { watch } from "fs";

const execAsync = promisify(exec);

// Plugin to build content index during development and watch for changes
function contentBuilderPlugin(): Plugin {
  return {
    name: 'content-builder',
    async buildStart() {
      // Build content index at startup
      console.log('Building content index...');
      try {
        await execAsync('node scripts/build-content.js');
        console.log('Content index built successfully');
      } catch (error) {
        console.error('Error building content:', error);
      }
    },
    configureServer(server: ViteDevServer) {
      // Watch for markdown file changes in development
      const contentDir = path.join(process.cwd(), 'public/content');
      
      try {
        watch(contentDir, { recursive: true }, async (eventType, filename) => {
          if (filename && filename.endsWith('.md')) {
            console.log(`Detected change in ${filename}, rebuilding content index...`);
            try {
              await execAsync('node scripts/build-content.js');
              console.log('Content index rebuilt successfully');
              // Notify the browser to reload
              server.ws.send({
                type: 'full-reload'
              });
            } catch (error) {
              console.error('Error rebuilding content:', error);
            }
          }
        });
        console.log('Watching for markdown file changes...');
      } catch (error) {
        console.warn('Could not watch content directory:', error);
      }
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
