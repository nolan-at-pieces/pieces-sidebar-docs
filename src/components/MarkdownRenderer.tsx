
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';
import { Link } from 'react-router-dom';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeRaw]}
        components={{
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
          // Enhanced image handling
          img: ({ src, alt, ...props }) => (
            <img 
              src={src} 
              alt={alt} 
              className="rounded-lg shadow-md my-6 max-w-full h-auto"
              loading="lazy"
              {...props}
            />
          ),
          // Custom heading components with better spacing
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
          // Enhanced code block styling
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
          // Enhanced list styling
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
          // Enhanced blockquote styling
          blockquote: ({ children, ...props }) => (
            <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-950/20 py-4 rounded-r-lg" {...props}>
              {children}
            </blockquote>
          ),
          // Enhanced table styling
          table: ({ children, ...props }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg" {...props}>
                {children}
              </table>
            </div>
          ),
          th: ({ children, ...props }) => (
            <th className="bg-gray-50 dark:bg-gray-800 px-4 py-3 text-left font-semibold border-b border-gray-200 dark:border-gray-700" {...props}>
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700" {...props}>
              {children}
            </td>
          ),
          // Enhanced paragraph styling
          p: ({ children, ...props }) => (
            <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300" {...props}>
              {children}
            </p>
          ),
          // Horizontal rule styling
          hr: ({ ...props }) => (
            <hr className="my-8 border-gray-300 dark:border-gray-600" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
