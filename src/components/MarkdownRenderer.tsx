
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { Link } from 'react-router-dom';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Custom link component to use React Router
          a: ({ href, children, ...props }) => {
            if (href?.startsWith('/')) {
              return (
                <Link to={href} {...props}>
                  {children}
                </Link>
              );
            }
            return (
              <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
              </a>
            );
          },
          // Custom heading components with anchor links
          h1: ({ children, ...props }) => (
            <h1 className="scroll-mt-20" {...props}>
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 className="scroll-mt-20" {...props}>
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 className="scroll-mt-20" {...props}>
              {children}
            </h3>
          ),
          // Custom code block styling
          pre: ({ children, ...props }) => (
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto" {...props}>
              {children}
            </pre>
          ),
          code: ({ children, className, ...props }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props}>
                  {children}
                </code>
              );
            }
            return <code className={className} {...props}>{children}</code>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
