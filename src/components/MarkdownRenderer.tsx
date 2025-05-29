import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';
import { Link } from 'react-router-dom';
import { ExpandableImage as ExpandableImageComponent } from './markdown/ExpandableImage';
import { Callout } from './markdown/Callout';
import { Steps, Step } from './markdown/Steps';
import { CustomTable, CustomTableHeader, CustomTableBody, CustomTableRow, CustomTableHead, CustomTableCell } from './markdown/CustomTable';

interface MarkdownRendererProps {
  content: string;
}

interface CustomTableComponentProps {
  children: React.ReactNode;
  [key: string]: any;
}

interface CustomComponents extends Components {
  ExpandableImage?: React.ComponentType<any>;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Parse custom callout syntax and convert to HTML
  const processCustomSyntax = (content: string) => {
    console.log('🔍 DEBUGGING: Original content length:', content.length);
    console.log('🔍 DEBUGGING: Original content preview:', content.substring(0, 500));
    
    // Transform callout syntax: :::info[Title] or :::warning{title="Warning"}
    content = content.replace(
      /:::(\w+)(?:\[([^\]]*)\]|\{title="([^"]*)"\})?\n([\s\S]*?):::/g,
      (match, type, title1, title2, innerContent) => {
        const title = title1 || title2 || '';
        console.log(`🔍 DEBUGGING: Found callout: type=${type}, title=${title}`);
        // Convert to HTML that ReactMarkdown can process
        const replacement = `<div data-callout="${type}" data-title="${title}">\n\n${innerContent.trim()}\n\n</div>`;
        console.log('🔍 DEBUGGING: Callout replacement:', replacement);
        return replacement;
      }
    );

    // Transform simple callout syntax: :::info
    content = content.replace(
      /:::(\w+)\n([\s\S]*?):::/g,
      (match, type, innerContent) => {
        console.log(`🔍 DEBUGGING: Found simple callout: type=${type}`);
        const replacement = `<div data-callout="${type}">\n\n${innerContent.trim()}\n\n</div>`;
        console.log('🔍 DEBUGGING: Simple callout replacement:', replacement);
        return replacement;
      }
    );

    // Transform Steps and Step components to HTML
    content = content.replace(/<Steps>/gi, () => {
      console.log('🔍 DEBUGGING: Replacing <Steps> with HTML div');
      return '<div data-steps="true">';
    });
    content = content.replace(/<\/Steps>/gi, () => {
      console.log('🔍 DEBUGGING: Replacing </Steps> with HTML div close');
      return '</div>';
    });
    content = content.replace(/<Step\s+number="(\d+)"(?:\s+title="([^"]*)")?>/gi, (match, number, title) => {
      console.log('🔍 DEBUGGING: Replacing <Step> with HTML div');
      return `<div data-step="${number}" data-step-title="${title || ''}">`;
    });
    content = content.replace(/<\/Step>/gi, () => {
      console.log('🔍 DEBUGGING: Replacing </Step> with HTML div close');
      return '</div>';
    });

    // Transform ExpandableImage components to HTML
    content = content.replace(/<ExpandableImage\s+src="([^"]*)"(?:\s+alt="([^"]*)")?(?:\s+caption="([^"]*)")?\/>/gi, (match, src, alt, caption) => {
      console.log('🔍 DEBUGGING: Replacing <ExpandableImage> with HTML img', { src, alt, caption });
      // Ensure caption is preserved in both data-caption and alt attributes
      const safeAlt = alt || '';
      const safeCaption = caption || '';
      return `<img src="${src}" alt="${safeAlt}" data-caption="${safeCaption}" />`;
    });

    console.log('🔍 DEBUGGING: Processed content length:', content.length);
    console.log('🔍 DEBUGGING: Processed content preview:', content.substring(0, 800));

    return content;
  };

  const processedContent = processCustomSyntax(content);
  
  console.log('🔍 DEBUGGING: Final content being passed to ReactMarkdown:');
  console.log(processedContent);

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          [rehypeRaw, { allowDangerousHtml: true }],
          rehypeHighlight
        ]}
        skipHtml={false}
        components={{
          // Explicit ExpandableImage component handler
          ExpandableImage: ({ src, alt, caption, ...props }: any) => {
            console.log('🎯 SUCCESS: Rendering ExpandableImage component', { src, alt, caption });
            return <ExpandableImageComponent src={src} alt={alt} caption={caption} {...props} />;
          },

          // Custom div handler for callouts
          div: ({ children, ...props }: any) => {
            const calloutType = props['data-callout'];
            const title = props['data-title'];
            const isSteps = props['data-steps'];
            const stepNumber = props['data-step'];
            const stepTitle = props['data-step-title'];
            
            console.log('🔍 DEBUGGING: div component called with:', { calloutType, title, isSteps, stepNumber, stepTitle, props });
            
            if (calloutType) {
              console.log('🎯 SUCCESS: Rendering Callout component');
              return <Callout type={calloutType as any} title={title} {...props}>{children}</Callout>;
            }
            
            if (isSteps) {
              console.log('🎯 SUCCESS: Rendering Steps component');
              return <Steps {...props}>{children}</Steps>;
            }
            
            if (stepNumber) {
              console.log('🎯 SUCCESS: Rendering Step component');
              return <Step number={parseInt(stepNumber)} title={stepTitle} {...props}>{children}</Step>;
            }
            
            return <div {...props}>{children}</div>;
          },

          img: ({ src, alt, ...props }: any) => {
            const caption = props['data-caption'] || '';
            console.log('🎯 Rendering ALL <img> tags with ExpandableImageComponent', { src, alt, caption });
            return <ExpandableImageComponent src={src || ''} alt={alt || ''} caption={caption} {...props} />;
          },

          // Custom link component to use React Router for internal links
          a: ({ href, children, ...props }: any) => {
            if (href?.startsWith('/')) {
              return (
                <Link to={href} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" {...props}>
                  {children}
                </Link>
              );
            }
            return (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" {...props}>
                {children}
              </a>
            );
          },

          // Enhanced table styling using custom components
          table: ({ children, ...props }: CustomTableComponentProps) => (
            <CustomTable {...props}>{children}</CustomTable>
          ),
          thead: ({ children, ...props }: CustomTableComponentProps) => (
            <CustomTableHeader {...props}>{children}</CustomTableHeader>
          ),
          tbody: ({ children, ...props }: CustomTableComponentProps) => (
            <CustomTableBody {...props}>{children}</CustomTableBody>
          ),
          tr: ({ children, ...props }: CustomTableComponentProps) => (
            <CustomTableRow {...props}>{children}</CustomTableRow>
          ),
          th: ({ children, ...props }: CustomTableComponentProps) => (
            <CustomTableHead {...props}>{children}</CustomTableHead>
          ),
          td: ({ children, ...props }: CustomTableComponentProps) => (
            <CustomTableCell {...props}>{children}</CustomTableCell>
          ),

          h1: ({ children, ...props }: any) => (
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }: any) => (
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }: any) => (
            <h3 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0" {...props}>
              {children}
            </h3>
          ),
          h4: ({ children, ...props }: any) => (
            <h4 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0" {...props}>
              {children}
            </h4>
          ),
          pre: ({ children, ...props }: any) => (
            <pre className="rounded-md border bg-secondary text-sm text-secondary-foreground" {...props}>
              {children}
            </pre>
          ),
          code: ({ children, ...props }: any) => (
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" {...props}>
              {children}
            </code>
          ),
          ul: ({ children, ...props }: any) => (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }: any) => (
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }: any) => (
            <li {...props}>
              {children}
            </li>
          ),
          blockquote: ({ children, ...props }: any) => (
            <blockquote className="mt-6 border-l-2 pl-6 italic" {...props}>
              {children}
            </blockquote>
          ),
          p: ({ children, ...props }: any) => (
            <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
              {children}
            </p>
          ),
          hr: ({ ...props }: any) => (
            <hr className="my-4 md:my-8" {...props} />
          ),
        } as CustomComponents}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}
