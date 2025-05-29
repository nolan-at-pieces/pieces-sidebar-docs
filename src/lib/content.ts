
import matter from 'gray-matter';

export interface ContentMetadata {
  title: string;
  description?: string;
  order?: number;
  author?: string;
  lastModified?: string;
}

export interface ContentPage {
  slug: string;
  metadata: ContentMetadata;
  content: string;
}

// This will be populated at build time or dynamically loaded
let contentCache: Map<string, ContentPage> = new Map();

export async function loadMarkdownContent(path: string): Promise<ContentPage | null> {
  try {
    // In a real implementation, this would load from the file system
    // For now, we'll simulate loading content
    const response = await fetch(`/content${path}.md`);
    if (!response.ok) return null;
    
    const markdown = await response.text();
    const { data, content } = matter(markdown);
    
    return {
      slug: path,
      metadata: data as ContentMetadata,
      content
    };
  } catch (error) {
    console.error('Error loading content:', error);
    return null;
  }
}

export function getContentFromCache(path: string): ContentPage | null {
  return contentCache.get(path) || null;
}

export function setContentCache(content: Map<string, ContentPage>) {
  contentCache = content;
}

export async function getAllContent(): Promise<ContentPage[]> {
  // This would typically scan the content directory
  // For now, return empty array - will be implemented based on actual content
  return Array.from(contentCache.values());
}
