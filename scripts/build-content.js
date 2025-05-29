
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

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
        processDirectory(itemPath, path.join(basePath, item));
      } else if (item.endsWith('.md')) {
        try {
          const content = fs.readFileSync(itemPath, 'utf8');
          const { data, content: markdown } = matter(content);
          
          const slug = path.join(basePath, item.replace('.md', ''));
          const normalizedSlug = '/' + slug.replace(/\\/g, '/');
          
          contentIndex[normalizedSlug] = {
            slug: normalizedSlug,
            metadata: {
              title: data.title || 'Untitled',
              description: data.description,
              author: data.author,
              lastModified: data.lastModified || stat.mtime.toISOString(),
              order: data.order
            },
            content: markdown,
            lastModified: stat.mtime.toISOString()
          };
        } catch (error) {
          console.error(`Error processing ${itemPath}:`, error.message);
        }
      }
    });
  }
  
  processDirectory(contentDir);
  
  fs.writeFileSync(outputFile, JSON.stringify(contentIndex, null, 2));
  console.log(`Built content index with ${Object.keys(contentIndex).length} pages`);
}

if (require.main === module) {
  buildContentIndex();
}

module.exports = { buildContentIndex };
