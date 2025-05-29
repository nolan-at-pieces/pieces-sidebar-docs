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
  // Parse custom callout syntax and normalize component names
  const processCustomSyntax = (content: string) => {
    console.log('🔍 DEBUGGING: Original content length:', content.length);
    console.log('🔍 DEBUGGING: Original content preview:', content.substring(0, 500));
    
    // Transform callout syntax: :::info[Title] or :::warning{title="Warning"}
    content = content.replace(
      /:::(\w+)(?:\[([^\]]*)\]|\{title="([^"]*)"\})?\n([\s\S]*?):::/g,
      (match, type, title1, title2, innerContent) => {
        const title = title1 || title2 || '';
        console.log(`🔍 DEBUGGING: Found callout: type=${type}, title=${title}`);
        const replacement = `<Callout type="${type}" title="${title}">\n\n${innerContent.trim()}\n\n</Callout>`;
        console.log('🔍 DEBUGGING: Callout replacement:', replacement);
        return replacement;
      }
    );

    // Transform simple callout syntax: :::info
    content = content.replace(
      /:::(\w+)\n([\s\S]*?):::/g,
      (match, type, innerContent) => {
        console.log(`🔍 DEBUGGING: Found simple callout: type=${type}`);
        const replacement = `<Callout type="${type}">\n\n${innerContent.trim()}\n\n</Callout>`;
        console.log('🔍 DEBUGGING: Simple callout replacement:', replacement);
        return replacement;
      }
    );

    // Transform Steps and Step components to uppercase
    content = content.replace(/<steps>/gi, (match) => {
      console.log('🔍 DEBUGGING: Replacing <steps> with <Steps>');
      return '<Steps>';
    });
    content = content.replace(/<\/steps>/gi, (match) => {
      console.log('🔍 DEBUGGING: Replacing </steps> with </Steps>');
      return '</Steps>';
    });
    content = content.replace(/<step\s/gi, (match) => {
      console.log('🔍 DEBUGGING: Replacing <step with <Step');
      return '<Step ';
    });
    content = content.replace(/<\/step>/gi, (match) => {
      console.log('🔍 DEBUGGING: Replacing </step> with </Step>');
      return '</Step>';
    });

    // Transform ExpandableImage components
    content = content.replace(/<expandableimage\s/gi, (match) => {
      console.log('🔍 DEBUGGING: Replacing <expandableimage with <ExpandableImage');
      return '<ExpandableImage ';
    });
    content = content.replace(/<\/expandableimage>/gi, (match) => {
      console.log('🔍 DEBUGGING: Replacing </expandableimage> with </ExpandableImage>');
      return '</ExpandableImage>';
    });

    console.log('🔍 DEBUGGING: Processed content length:', content.length);
    console.log('🔍 DEBUGGING: Processed content preview:', content.substring(0, 800));
    console.log('🔍 DEBUGGING: Looking for custom tags in processed content...');
    
    // Check if custom tags are present
    const hasCallout = content.includes('<Callout');
    const hasSteps = content.includes('<Steps');
    const hasStep = content.includes('<Step');
    const hasExpandableImage = content.includes('<ExpandableImage');
    
    console.log('🔍 DEBUGGING: Custom tags found:', {
      hasCallout,
      hasSteps,
      hasStep,
      hasExpandableImage
    });

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
          rehypeHighlight,
          [rehypeRaw, { 
            passThrough: ['Callout', 'Steps', 'Step', 'ExpandableImage'],
            allowDangerousHtml: true 
          }]
        ]}
        components={{
          // Test component to verify the pipeline works
          div: ({ children, ...props }) => {
            if (props.className === 'test-custom') {
              console.log('🔍 DEBUGGING: Test div component rendered!', props);
            }
            return <div {...props}>{children}</div>;
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

          // Enhanced image handling with expandable modal
          img: ({ src, alt, ...props }) => (
            <ExpandableImage src={src} alt={alt} {...props} />
          ),

          // Custom components with extensive debugging
          Callout: ({ type, title, children, ...props }: any) => {
            console.log('🎯 SUCCESS: Callout component called with:', { 
              type, 
              title, 
              children: typeof children, 
              props,
              childrenContent: children?.toString?.()?.substring(0, 100)
            });
            return <Callout type={type} title={title} {...props}>{children}</Callout>;
          },

          Steps: ({ children, ...props }: any) => {
            console.log('🎯 SUCCESS: Steps component called with:', { 
              children: typeof children, 
              props,
              childrenLength: Array.isArray(children) ? children.length : 'not array'
            });
            return <Steps {...props}>{children}</Steps>;
          },

          Step: ({ number, title, children, ...props }: any) => {
            console.log('🎯 SUCCESS: Step component called with:', { 
              number, 
              title, 
              children: typeof children, 
              props,
              parsedNumber: parseInt(number)
            });
            return <Step number={parseInt(number)} title={title} {...props}>{children}</Step>;
          },

          ExpandableImage: ({ src, alt, caption, ...props }: any) => {
            console.log('🎯 SUCCESS: ExpandableImage component called with:', { 
              src, 
              alt, 
              caption, 
              props 
            });
            return <ExpandableImage src={src} alt={alt} caption={caption} {...props} />;
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
        } as any}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}
