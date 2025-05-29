
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Build content index for faster loading
function buildContentIndex() {
  const contentDir = path.join(__dirname, '../public/content');
  const outputFile = path.join(__dirname, '../public/content-index.json');
  
  if (!fs.existsSync(contentDir)) {
    console.log('Content directory not found, creating empty content index');
    fs.writeFileSync(outputFile, JSON.stringify({}, null, 2));
    return;
  }
  
  const contentIndex = {};
  
  function processDirectory(dir, basePath = '') {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        // Recursively process subdirectories
        processDirectory(itemPath, path.join(basePath, item));
      } else if (item.endsWith('.md')) {
        try {
          const content = fs.readFileSync(itemPath, 'utf8');
          const { data, content: markdown } = matter(content);
          
          // Create the slug based on the file path structure
          let slug;
          if (basePath) {
            // For files in subdirectories, include the full path
            const fileName = item.replace('.md', '');
            slug = path.join(basePath, fileName).replace(/\\/g, '/');
          } else {
            // For files in root content directory
            slug = item.replace('.md', '');
          }
          
          // Normalize the slug to use forward slashes and ensure it starts with /docs/
          const normalizedSlug = '/docs/' + slug;
          
          // Handle metadata with better defaults
          const metadata = {
            title: data.title || slug.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: data.description || null,
            sidebarTitle: data.sidebarTitle || null,
            author: data.author || null,
            lastModified: data.lastModified || null,
            order: data.order || null,
            visibility: data.visibility || 'PUBLIC'
          };
          
          // Only include public content in the index
          if (metadata.visibility === 'PUBLIC') {
            contentIndex[normalizedSlug] = {
              slug: normalizedSlug,
              metadata,
              content: markdown.trim(),
              lastModified: stat.mtime.toISOString()
            };
            
            console.log(`✓ Processed: ${normalizedSlug}`);
          } else {
            console.log(`⚠ Skipped (${metadata.visibility}): ${normalizedSlug}`);
          }
        } catch (error) {
          console.error(`✗ Error processing ${itemPath}:`, error.message);
        }
      }
    });
  }
  
  console.log('Scanning content directory...');
  processDirectory(contentDir);
  
  // Write the content index
  fs.writeFileSync(outputFile, JSON.stringify(contentIndex, null, 2));
  console.log(`\n📚 Built content index with ${Object.keys(contentIndex).length} pages`);
  
  // Log all created paths for debugging
  console.log('\n📄 Available pages:');
  Object.keys(contentIndex)
    .sort()
    .forEach(path => console.log(`   ${path}`));
  
  // Check for common navigation paths that might be missing
  const commonPaths = [
    '/docs/meet-pieces',
    '/docs/meet-pieces/fundamentals',
    '/docs/suite/desktop-app',
    '/docs/ides/vscode',
    '/docs/productivity/obsidian'
  ];
  
  console.log('\n🔍 Checking common navigation paths:');
  commonPaths.forEach(path => {
    if (contentIndex[path]) {
      console.log(`   ✓ ${path} - "${contentIndex[path].metadata.title}"`);
    } else {
      console.log(`   ✗ ${path} - NOT FOUND`);
    }
  });
  
  console.log('\n✅ Content index ready!\n');
}

// Run the build
buildContentIndex();

export { buildContentIndex };
