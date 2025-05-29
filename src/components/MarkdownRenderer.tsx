
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import 'highlight.js/styles/github-dark.css';
import { Link } from 'react-router-dom';

import { ExpandableImage } from './markdown/ExpandableImage';
import { Callout } from './markdown/Callout';
import { Steps, Step } from './markdown/Steps';
import {
  CustomTable,
  CustomTableHeader,
  CustomTableBody,
  CustomTableRow,
  CustomTableHead,
  CustomTableCell,
} from './markdown/CustomTable';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Parse custom callout syntax and normalize component names
  const processCustomSyntax = (raw: string) => {
    console.log('🔍 DEBUGGING: Original content length:', raw.length);
    let str = raw;

    // Transform callout syntax: :::type[Title] or :::type{title="Title"}
    str = str.replace(
      /:::(\w+)(?:\[([^\]]*)\]|\{title="([^"]*)"\})?\n([\s\S]*?):::/g,
      (_match, type, t1, t2, inner) => {
        const title = t1 || t2 || '';
        console.log(`🔍 Found callout: type=${type}, title=${title}`);
        return `<Callout type="${type}"${title ? ` title="${title}"` : ''}>\n\n${inner.trim()}\n\n</Callout>`;
      }
    );

    // Transform simple callout syntax: :::type\n...:::
    str = str.replace(
      /:::(\w+)\n([\s\S]*?):::/g,
      (_match, type, inner) => {
        console.log(`🔍 Found simple callout: type=${type}`);
        return `<Callout type="${type}">\n\n${inner.trim()}\n\n</Callout>`;
      }
    );

    // Steps -> <Steps>
    str = str.replace(/<steps>/gi, '<Steps>');
    str = str.replace(/<\/steps>/gi, '</Steps>');
    // Step -> <Step>
    str = str.replace(/<step\s/gi, '<Step ');
    str = str.replace(/<\/step>/gi, '</Step>');

    // ExpandableImage shorthand -> full tag
    str = str.replace(
      /<expandableimage\s/gi,
      '<ExpandableImage '
    );
    str = str.replace(/<\/expandableimage>/gi, '</ExpandableImage>');

    console.log('🔍 Processed content preview:', str.substring(0, 800));
    return str;
  };

  const processedContent = processCustomSyntax(content);

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeHighlight,
          [
            rehypeRaw,
            {
              allowDangerousHtml: true,
            },
          ],
        ]}
        components={{
          // Custom callout & steps components
          Callout: ({ type, title, children, ...props }: any) => (
            <Callout type={type} title={title} {...props}>
              {children}
            </Callout>
          ),
          Steps: ({ children, ...props }: any) => <Steps {...props}>{children}</Steps>,
          Step: ({ number, title, children, ...props }: any) => (
            <Step number={parseInt(number, 10)} title={title} {...props}>
              {children}
            </Step>
          ),

          // Render every markdown img as ExpandableImage
          img: ({ src, alt, ...props }: any) => {
            if (!src) return null;
            return (
              <ExpandableImage
                src={src}
                alt={alt}
                defaultWidth={800}
                backdropBlur="lg"
                {...props}
              />
            );
          },
          
          // Also catch manual <ExpandableImage> tags in markdown
          ExpandableImage: ({ src, alt, caption, ...props }: any) => (
            <ExpandableImage
              src={src}
              alt={alt}
              caption={caption}
              defaultWidth={800}
              backdropBlur="lg"
              {...props}
            />
          ),

          // React Router links for internal, external otherwise
          a: ({ href, children, ...props }) =>
            href?.startsWith('/') ? (
              <Link
                to={href}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                {...props}
              >
                {children}
              </Link>
            ) : (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                {...props}
              >
                {children}
              </a>
            ),

          // Table customization
          table: ({ children, ...props }) => <CustomTable {...props}>{children}</CustomTable>,
          thead: ({ children, ...props }) => <CustomTableHeader {...props}>{children}</CustomTableHeader>,
          tbody: ({ children, ...props }) => <CustomTableBody {...props}>{children}</CustomTableBody>,
          tr: ({ children, ...props }) => <CustomTableRow {...props}>{children}</CustomTableRow>,
          th: ({ children, ...props }) => <CustomTableHead {...props}>{children}</CustomTableHead>,
          td: ({ children, ...props }) => <CustomTableCell {...props}>{children}</CustomTableCell>,

          // Headings, code blocks, lists, etc.
          h1: ({ children, ...props }) => (
            <h1
              className="text-4xl font-bold mb-6 mt-8 scroll-mt-20 border-b border-gray-200 dark:border-gray-700 pb-4"
              {...props}
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2
              className="text-3xl font-semibold mb-4 mt-8 scroll-mt-20 border-b border-gray-200 dark:border-gray-700 pb-2"
              {...props}
            >
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
            <pre
              className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto my-6 border"
              {...props}
            >
              {children}
            </pre>
          ),
          code: ({ children, className, ...props }) => {
            const isInline = !className;
            return isInline ? (
              <code
                className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200"
                {...props}
              >
                {children}
              </code>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          ul: ({ children, ...props }) => <ul className="space-y-2 my-4" {...props}>{children}</ul>,
          ol: ({ children, ...props }) => <ol className="space-y-2 my-4" {...props}>{children}</ol>,
          li: ({ children, ...props }) => <li className="leading-relaxed" {...props}>{children}</li>,
          blockquote: ({ children, ...props }) => (
            <blockquote
              className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-950/20 py-4 rounded-r-lg"
              {...props}
            >
              {children}
            </blockquote>
          ),
          p: ({ children, ...props }) => <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300" {...props}>{children}</p>,
          hr: (props) => <hr className="my-8 border-gray-300 dark:border-gray-600" {...props} />,
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}
