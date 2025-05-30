
import React, { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TOCItem } from './types';

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const items: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      
      items.push({
        id,
        text,
        level
      });
    }

    setTocItems(items);
  }, [content]);

  useEffect(() => {
    // Set up intersection observer to track active heading
    const headingElements = tocItems.map(item => document.getElementById(item.id)).filter(Boolean);
    
    if (headingElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find all visible entries
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio and position to get the most prominent heading
          const sortedEntries = visibleEntries.sort((a, b) => {
            const aRect = a.boundingClientRect;
            const bRect = b.boundingClientRect;
            
            // Prefer headings closer to the top of the viewport
            return Math.abs(aRect.top) - Math.abs(bRect.top);
          });
          
          setActiveId(sortedEntries[0].target.id);
        } else {
          // If no headings are intersecting, find the closest one above the viewport
          const allHeadings = tocItems.map(item => document.getElementById(item.id)).filter(Boolean);
          let closestHeading = null;
          let closestDistance = Infinity;
          
          allHeadings.forEach(heading => {
            if (heading) {
              const rect = heading.getBoundingClientRect();
              if (rect.top < 0) { // Above viewport
                const distance = Math.abs(rect.top);
                if (distance < closestDistance) {
                  closestDistance = distance;
                  closestHeading = heading;
                }
              }
            }
          });
          
          if (closestHeading) {
            setActiveId(closestHeading.id);
          }
        }
      },
      {
        rootMargin: '-10% 0px -80% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    headingElements.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => {
      headingElements.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, [tocItems]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <div className="w-64 shrink-0">
      <div className="sticky top-6 max-h-[calc(100vh-3rem)]">
        <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
          On this page
        </h3>
        <ScrollArea className="h-full max-h-[calc(100vh-8rem)]">
          <nav className="space-y-1">
            {tocItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToHeading(item.id)}
                className={`block w-full text-left text-sm transition-all duration-200 hover:text-foreground ${
                  activeId === item.id 
                    ? 'text-foreground font-medium border-l-2 border-primary bg-primary/5' 
                    : 'text-muted-foreground border-l-2 border-transparent hover:border-muted'
                } ${
                  item.level === 1 ? 'pl-3' : 
                  item.level === 2 ? 'pl-7' : 
                  'pl-11'
                } py-1.5 rounded-r-md`}
              >
                {item.text}
              </button>
            ))}
          </nav>
        </ScrollArea>
      </div>
    </div>
  );
}
