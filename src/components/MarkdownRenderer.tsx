
import React, { useMemo } from 'react';
import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
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
  console.log('🔍 DEBUGGING: MarkdownRenderer called with content length:', content.length);

  // Parse custom callout syntax and convert to JSX
  const processCustomSyntax = (content: string) => {
    console.log('🔍 DEBUGGING: Processing custom syntax...');
    
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

    // Transform Steps and Step components to proper JSX
    content = content.replace(/<steps>/gi, '<Steps>');
    content = content.replace(/<\/steps>/gi, '</Steps>');
    content = content.replace(/<step\s/gi, '<Step ');
    content = content.replace(/<\/step>/gi, '</Step>');

    // Transform ExpandableImage components
    content = content.replace(/<expandableimage\s/gi, '<ExpandableImage ');
    content = content.replace(/<\/expandableimage>/gi, '</ExpandableImage>');

    console.log('🔍 DEBUGGING: Processed content preview:', content.substring(0, 800));
    return content;
  };

  const processedContent = processCustomSyntax(content);
  console.log('🔍 DEBUGGING: Final processed content being compiled to MDX');

  // MDX components mapping
  const components = {
    // Custom link component to use React Router for internal links
    a: ({ href, children, ...props }: any) => {
      console.log('🎯 MDX: Link component called with href:', href);
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
    img: ({ src, alt, ...props }: any) => {
      console.log('🎯 MDX: Image component called with src:', src);
      return <ExpandableImage src={src} alt={alt} {...props} />;
    },

    // Custom components with debugging
    Callout: ({ type, title, children, ...props }: any) => {
      console.log('🎯 SUCCESS: MDX Callout component called with:', { 
        type, 
        title, 
        children: typeof children,
        props 
      });
      return <Callout type={type} title={title} {...props}>{children}</Callout>;
    },

    Steps: ({ children, ...props }: any) => {
      console.log('🎯 SUCCESS: MDX Steps component called');
      return <Steps {...props}>{children}</Steps>;
    },

    Step: ({ number, title, children, ...props }: any) => {
      console.log('🎯 SUCCESS: MDX Step component called with:', { number, title });
      return <Step number={parseInt(number)} title={title} {...props}>{children}</Step>;
    },

    ExpandableImage: ({ src, alt, caption, ...props }: any) => {
      console.log('🎯 SUCCESS: MDX ExpandableImage component called with:', { src, alt, caption });
      return <ExpandableImage src={src} alt={alt} caption={caption} {...props} />;
    },

    // Enhanced table styling
    table: ({ children, ...props }: any) => <CustomTable {...props}>{children}</CustomTable>,
    thead: ({ children, ...props }: any) => <CustomTableHeader {...props}>{children}</CustomTableHeader>,
    tbody: ({ children, ...props }: any) => <CustomTableBody {...props}>{children}</CustomTableBody>,
    tr: ({ children, ...props }: any) => <CustomTableRow {...props}>{children}</CustomTableRow>,
    th: ({ children, ...props }: any) => <CustomTableHead {...props}>{children}</CustomTableHead>,
    td: ({ children, ...props }: any) => <CustomTableCell {...props}>{children}</CustomTableCell>,

    // Standard styling components
    h1: ({ children, ...props }: any) => (
      <h1 className="text-4xl font-bold mb-6 mt-8 scroll-mt-20 border-b border-gray-200 dark:border-gray-700 pb-4" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: any) => (
      <h2 className="text-3xl font-semibold mb-4 mt-8 scroll-mt-20 border-b border-gray-200 dark:border-gray-700 pb-2" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: any) => (
      <h3 className="text-2xl font-semibold mb-3 mt-6 scroll-mt-20" {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }: any) => (
      <h4 className="text-xl font-semibold mb-2 mt-4 scroll-mt-20" {...props}>
        {children}
      </h4>
    ),

    pre: ({ children, ...props }: any) => (
      <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto my-6 border" {...props}>
        {children}
      </pre>
    ),
    code: ({ children, className, ...props }: any) => {
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

    ul: ({ children, ...props }: any) => (
      <ul className="space-y-2 my-4" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: any) => (
      <ol className="space-y-2 my-4" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: any) => (
      <li className="leading-relaxed" {...props}>
        {children}
      </li>
    ),

    blockquote: ({ children, ...props }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-950/20 py-4 rounded-r-lg" {...props}>
        {children}
      </blockquote>
    ),

    p: ({ children, ...props }: any) => (
      <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300" {...props}>
        {children}
      </p>
    ),

    hr: ({ ...props }: any) => (
      <hr className="my-8 border-gray-300 dark:border-gray-600" {...props} />
    ),
  };

  // Compile and render MDX content
  const MDXContent = useMemo(() => {
    try {
      console.log('🔍 DEBUGGING: Compiling MDX content...');
      
      const compiledMDX = compile(processedContent, {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight],
        outputFormat: 'function-body',
        development: false
      });

      return compiledMDX.then((code) => {
        console.log('🔍 DEBUGGING: MDX compiled successfully');
        const { default: MDXComponent } = run(code, {
          ...runtime,
          baseUrl: import.meta.url
        });
        return MDXComponent;
      });
    } catch (error) {
      console.error('🚨 ERROR: Failed to compile MDX:', error);
      return Promise.resolve(() => <div>Error rendering content</div>);
    }
  }, [processedContent]);

  // Render the compiled MDX
  const [RenderedContent, setRenderedContent] = React.useState<React.ComponentType | null>(null);

  React.useEffect(() => {
    MDXContent.then(setRenderedContent).catch((error) => {
      console.error('🚨 ERROR: Failed to render MDX:', error);
      setRenderedContent(() => () => <div>Error rendering content</div>);
    });
  }, [MDXContent]);

  if (!RenderedContent) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20">
      <RenderedContent components={components} />
    </div>
  );
}
