import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
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
  const processCustomSyntax = (raw: string): string => {
    let str = raw;

    // :::info[Title] → <Callout>…
    str = str.replace(
      /:::(\w+)(?:\[([^\]]*)\])?\n([\s\S]*?):::/g,
      (_m, type, title, body) => {
        const titleAttr = title ? ` title="${title}"` : '';
        return `<Callout type="${type}"${titleAttr}>\n\n${body.trim()}\n\n</Callout>`;
      }
    );

    // Steps & Step tags → uppercase
    str = str.replace(/<steps>/gi, '<Steps>');
    str = str.replace(/<\/steps>/gi, '</Steps>');
    str = str.replace(/<step(\s+)/gi, '<Step$1');
    str = str.replace(/<\/step>/gi, '</Step>');

    // ExpandableImage short syntax → proper tag
    // (if you ever use a `<ExpandableImage src="" alt="" caption=""/>` shorthand)
    str = str.replace(
      /<ExpandableImage\s+src="([^"]+)"\s*\/>/gi,
      (_m, src) => `<ExpandableImage src="${src}" />`
    );

    return str;
  };

  const md = processCustomSyntax(content);

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
              passThrough: ['Callout', 'Steps', 'Step', 'ExpandableImage'],
            },
          ],
        ]}
        components={{
          // **Always** render images with ExpandableImage
          img: ({ src, alt, ...props }) => (
            <ExpandableImage
              src={src!}
              alt={alt}
              // pick a reasonable max width for the expanded image
              // your ExpandableImage implementation should read this prop
              defaultWidth={800}
              // tell it to blur the backdrop when open
              backdropBlur="lg"
              {...props}
            />
          ),

          // Callouts, Steps, and Step
          Callout: ({ type, title, children, ...p }: any) => (
            <Callout type={type} title={title} {...p}>
              {children}
            </Callout>
          ),
          Steps: ({ children, ...p }: any) => <Steps {...p}>{children}</Steps>,
          Step: ({ number, title, children, ...p }: any) => (
            <Step number={parseInt(number, 10)} title={title} {...p}>
              {children}
            </Step>
          ),

          // Links via React Router
          a: ({ href, children, ...p }) =>
            href && href.startsWith('/') ? (
              <Link to={href} {...p} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                {children}
              </Link>
            ) : (
              <a href={href} target="_blank" rel="noopener noreferrer" {...p} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                {children}
              </a>
            ),

          // Tables
          table: ({ children, ...p }) => <CustomTable {...p}>{children}</CustomTable>,
          thead: ({ children, ...p }) => <CustomTableHeader {...p}>{children}</CustomTableHeader>,
          tbody: ({ children, ...p }) => <CustomTableBody {...p}>{children}</CustomTableBody>,
          tr: ({ children, ...p }) => <CustomTableRow {...p}>{children}</CustomTableRow>,
          th: ({ children, ...p }) => <CustomTableHead {...p}>{children}</CustomTableHead>,
          td: ({ children, ...p }) => <CustomTableCell {...p}>{children}</CustomTableCell>,

          // Headings, code blocks, lists, etc.
          h1: ({ children, ...p }) => (
            <h1 className="text-4xl font-bold mb-6 mt-8 scroll-mt-20 border-b border-gray-200 dark:border-gray-700 pb-4" {...p}>
              {children}
            </h1>
          ),
          h2: ({ children, ...p }) => (
            <h2 className="text-3xl font-semibold mb-4 mt-8 scroll-mt-20 border-b border-gray-200 dark:border-gray-700 pb-2" {...p}>
              {children}
            </h2>
          ),
          h3: ({ children, ...p }) => (
            <h3 className="text-2xl font-semibold mb-3 mt-6 scroll-mt-20" {...p}>
              {children}
            </h3>
          ),
          h4: ({ children, ...p }) => (
            <h4 className="text-xl font-semibold mb-2 mt-4 scroll-mt-20" {...p}>
              {children}
            </h4>
          ),
          pre: ({ children, ...p }) => (
            <pre className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-6 rounded-lg overflow-x-auto my-6 border" {...p}>
              {children}
            </pre>
          ),
          code: ({ children, className, ...p }) => {
            const inline = !className;
            return inline ? (
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200" {...p}>
                {children}
              </code>
            ) : (
              <code className={className} {...p}>
                {children}
              </code>
            );
          },
          ul: ({ children, ...p }) => <ul className="space-y-2 my-4" {...p}>{children}</ul>,
          ol: ({ children, ...p }) => <ol className="space-y-2 my-4" {...p}>{children}</ol>,
          li: ({ children, ...p }) => <li className="leading-relaxed" {...p}>{children}</li>,
          blockquote: ({ children, ...p }) => (
            <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-950/20 py-4 rounded-r-lg" {...p}>
              {children}
            </blockquote>
          ),
          p: ({ children, ...p }) => <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300" {...p}>{children}</p>,
          hr: (p) => <hr className="my-8 border-gray-300 dark:border-gray-600" {...p} />,
        }}
      >
        {md}
      </ReactMarkdown>
    </div>
  );
}