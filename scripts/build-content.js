
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
          
          // Handle special cases for index files
          if (item === 'index.md') {
            slug = basePath || 'index';
          }
          
          // Normalize the slug to use forward slashes and ensure it starts with /docs/
          const normalizedSlug = '/docs/' + slug.replace(/\\/g, '/');
          
          // Use frontmatter path if available, otherwise use generated path
          const finalPath = data.path || normalizedSlug;
          
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
          
          // Only include public content
          if (metadata.visibility === 'PUBLIC') {
            contentIndex[finalPath] = {
              slug: finalPath,
              metadata,
              content: markdown.trim(),
              lastModified: stat.mtime.toISOString(),
              filePath: path.relative(contentDir, itemPath)
            };
            
            console.log(`✓ Processed: ${finalPath} (from ${path.relative(contentDir, itemPath)})`);
          } else {
            console.log(`⚠ Skipped (hidden): ${finalPath}`);
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
    .forEach(path => {
      const file = contentIndex[path];
      console.log(`   ${path} -> ${file.filePath}`);
    });
  
  // Check for navigation mismatches
  console.log('\n🔍 Navigation Analysis:');
  const navigationPaths = extractNavigationPaths();
  const missingContent = navigationPaths.filter(navPath => !contentIndex[navPath]);
  const extraContent = Object.keys(contentIndex).filter(contentPath => 
    !navigationPaths.includes(contentPath) && 
    contentPath !== '/docs/meet-pieces' && 
    contentPath !== '/docs/meet-pieces/fundamentals'
  );
  
  if (missingContent.length > 0) {
    console.log('❌ Navigation paths missing content:');
    missingContent.forEach(path => console.log(`   ${path}`));
  }
  
  if (extraContent.length > 0) {
    console.log('📄 Content files not in navigation:');
    extraContent.slice(0, 10).forEach(path => console.log(`   ${path}`));
    if (extraContent.length > 10) {
      console.log(`   ... and ${extraContent.length - 10} more`);
    }
  }
  
  console.log('\n✅ Content index ready!\n');
}

function extractNavigationPaths() {
  // Read the DocsLayout.tsx file to extract navigation paths
  const layoutPath = path.join(__dirname, '../src/components/DocsLayout.tsx');
  try {
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    const pathMatches = layoutContent.match(/href:\s*["']([^"']+)["']/g) || [];
    return pathMatches
      .map(match => match.replace(/href:\s*["']([^"']+)["']/, '$1'))
      .filter(path => path.startsWith('/docs'));
  } catch (error) {
    console.warn('Could not read DocsLayout.tsx for navigation analysis');
    return [];
  }
}

// Run the build
buildContentIndex();

export { buildContentIndex };
