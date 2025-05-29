// regenerate-docslayout.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 1) Update these to match your environment
const SOURCE_DIR = "C:\\Users\\judso\\Downloads\\docs-export-pieces-docs\\docs-export-pieces-docs\\guides\\version-v.1.2.3";
const LAYOUT_TSX = path.join(__dirname, "components", "DocsLayout.tsx");

// 2) Helper to humanize filenames -> Titles
function humanize(name) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .replace(/\.Md$/i, '')
    .replace(/\.Md$/i, '');
}

// 3) Walk the folder and build a tree
function buildTree(dir) {
  const tree = {};
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (let e of entries) {
    if (e.name.startsWith('.')) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      const subtree = buildTree(full);
      // include folder only if it has md files inside
      if (Object.keys(subtree).length) tree[e.name] = subtree;
    } else if (e.isFile() && /\.md$/i.test(e.name)) {
      tree[e.name] = null;
    }
  }
  return tree;
}

// 4) Convert that tree into a navigation array
function treeToNav(tree, parentHref = "/docs") {
  return Object.entries(tree).map(([key, subtree]) => {
    const isIndex = /^index\.md$/i.test(key);
    const name = humanize(isIndex ? path.basename(parentHref) : key.replace(/\.md$/i, ''));
    const href = isIndex
      ? parentHref
      : `${parentHref}/${key.replace(/\.md$/i, '')}`;
    const node = { title: name, href };
    if (subtree) {
      const children = treeToNav(subtree, href);
      if (children.length) node.items = children;
    }
    return node;
  });
}

// 5) Build nav only from the top-level of version-v.1.2.3/
const rawTree = buildTree(SOURCE_DIR);
const navigation = treeToNav(rawTree, "/docs");

// 6) Read your existing DocsLayout.tsx
let layout = fs.readFileSync(LAYOUT_TSX, 'utf8');

// 7) Serialize our new nav array
const navString = JSON.stringify(navigation, null, 2)
  .replace(/^/gm, '  ')   // indent two spaces
  .replace(/"href":/g, 'href:')  // remove quotes around keys
  .replace(/"title":/g, 'title:')
  .replace(/"items":/g, 'items:')
  .replace(/"/g, '"');     // keep double quotes on strings

const replacement = `const navigation = ${navString};`;

// 8) Replace old block
layout = layout.replace(
  /const navigation = \[[\s\S]*?\];/,
  replacement
);

// 9) Write it back
fs.writeFileSync(LAYOUT_TSX, layout, 'utf8');
console.log("✅ DocsLayout.tsx regenerated with new navigation!");
