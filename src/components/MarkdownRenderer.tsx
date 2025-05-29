
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
          // Explicit ExpandableImage component handler
          ExpandableImage: ({ src, alt, caption, ...props }: any) => {
            console.log('🎯 SUCCESS: Rendering ExpandableImage component', { src, alt, caption });
            return <ExpandableImage src={src} alt={alt} caption={caption} {...props} />;
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

          // Enhanced image handling - ALWAYS use ExpandableImage
          img: ({ src, alt, ...props }: any) => {
            const caption = props['data-caption'];
            
            console.log('🔍 DEBUGGING: img component called with:', { src, alt, caption, props });
            console.log('🎯 SUCCESS: Rendering image with ExpandableImage component');
            
            return <ExpandableImage src={src} alt={alt} caption={caption} />;
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

          h1: ({ children, ...props }) => (
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0" {...props}>
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight transition-colors first:mt-0" {...props}>
              {children}
            </h4>
          ),
          pre: ({ children, ...props }) => (
            <pre className="rounded-md border bg-secondary text-sm text-secondary-foreground" {...props}>
              {children}
            </pre>
          ),
          code: ({ children, ...props }) => (
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" {...props}>
              {children}
            </code>
          ),
          ul: ({ children, ...props }) => (
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props}>
              {children}
            </ol>
          ),
          li: ({ children, ...props }) => (
            <li {...props}>
              {children}
            </li>
          ),
          blockquote: ({ children, ...props }) => (
            <blockquote className="mt-6 border-l-2 pl-6 italic" {...props}>
              {children}
            </blockquote>
          ),
          p: ({ children, ...props }) => (
            <p className="leading-7 [&:not(:first-child)]:mt-6" {...props}>
              {children}
            </p>
          ),
          hr: ({ ...props }) => (
            <hr className="my-4 md:my-8" {...props} />
          ),
        } as any}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}
