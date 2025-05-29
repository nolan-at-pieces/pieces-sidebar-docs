

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';
import { Link } from 'react-router-dom';
import { ExpandableImage } from './markdown/ExpandableImage';
import { Callout } from './markdown/Callout';
import { Steps, Step } from './markdown/Steps';
import { CustomTable, CustomTableHeader, CustomTableBody, CustomTableRow, CustomTableHead, CustomTableCell } from './markdown/CustomTable';

interface MarkdownRendererProps {
  content: string;
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
      console.log('🔍 DEBUGGING: Replacing <ExpandableImage> with HTML img');
      return `<img data-expandable="true" src="${src}" alt="${alt || ''}" data-caption="${caption || ''}" />`;
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
        components={{
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

          // Enhanced image handling
          img: ({ src, alt, ...props }: any) => {
            const isExpandable = props['data-expandable'];
            const caption = props['data-caption'];
            
            console.log('🔍 DEBUGGING: img component called with:', { src, alt, isExpandable, caption, props });
            
            if (isExpandable) {
              console.log('🎯 SUCCESS: Rendering ExpandableImage component');
              return <ExpandableImage src={src} alt={alt} caption={caption} />;
            }
            
            // For regular markdown images, render with ExpandableImage but without special expandable behavior
            console.log('🎯 SUCCESS: Rendering regular image as ExpandableImage');
            return <ExpandableImage src={src} alt={alt} />;
          },

          // Custom link component to use React Router for internal links
          a: ({ href, children, ...props }) => {
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
          table: ({ children, ...props }) => (
            <CustomTable {...props}>{children}</CustomTable>
          ),
          thead: ({ children, ...props }) => (
            <CustomTableHeader {...props}>{children}</CustomTableHeader>
          ),
          tbody: ({ children, ...props }) => (
            <CustomTableBody {...props}>{children}</CustomTableBody>
          ),
          tr: ({ children, ...props }) => (
            <CustomTableRow {...props}>{children}</CustomTableRow>
          ),
          th: ({ children, ...props }) => (
            <CustomTableHead {...props}>{children}</CustomTableHead>
          ),
          td: ({ children, ...props }) => (
            <CustomTableCell {...props}>{children}</CustomTableCell>
          ),

          // ... keep existing code (h1, h2, h3, h4, pre, code, ul, ol, li, blockquote, p, hr components)
          h1: ({ children, ...props }) => (
            <h1 className="text-4xl font-bold mb-6 mt-8 scroll-mt-20 border-b border-gray-200 dark:border-gray-700 pb-4" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 className="text-3xl font-semibold mb-4 mt-8 scroll-mt-20 border-b border-gray-200 dark:border-gray-700 pb-2" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 className="text-2xl font-semibold mb-3 mt-6 scroll-mt-20" {...props}>
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4 className="text-xl font-semibold mb-2 mt-4 scroll-mt-20" {...props}>
              {children}
            </h4>
          ),

          pre: ({ children, ...props }) => (
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto my-6 border" {...props}>
              {children}
            </pre>
          ),
          code: ({ children, className, ...props }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200" {...props}>
                  {children}
                </code>
              );
            }
            return <code className={className} {...props}>{children}</code>;
          },

          ul: ({ children, ...props }) => (
            <ul className="space-y-2 my-4" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="space-y-2 my-4" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li className="leading-relaxed" {...props}>
              {children}
            </li>
          ),

          blockquote: ({ children, ...props }) => (
            <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-950/20 py-4 rounded-r-lg" {...props}>
              {children}
            </blockquote>
          ),

          p: ({ children, ...props }) => (
            <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300" {...props}>
              {children}
            </p>
          ),

          hr: ({ ...props }) => (
            <hr className="my-8 border-gray-300 dark:border-gray-600" {...props} />
          ),
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}

