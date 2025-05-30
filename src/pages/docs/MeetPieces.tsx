import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GettingToKnowPieces() {
  return (
    <div className="prose prose-lg max-w-4xl mx-auto px-6 py-12 dark:prose-invert">
      <h1>Getting to Know Pieces</h1>
      <p>
        Pieces is an AI-enabled productivity tool designed to increase developer efficiency through personalized workflow assistance across the entire toolchain, featuring a dedicated desktop application and integrations with many popular IDEs.
      </p>

      <div className="flex justify-center my-8">
        <Image
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1734014941536/9c298363-d6b4-4e4a-9965-72db0fa59bc6.png?auto=compress,format&format=webp&q=75"
          alt="Pieces ecosystem diagram"
          width={960}
          height={540}
          className="rounded-lg shadow-lg"
        />
      </div>

      <h2>Introducing Pieces for Developers</h2>
      <p>
        This documentation is designed to provide a high-level overview of <Link href="/docs/features">Pieces' features and functionalities</Link>, with a quick-start and troubleshooting guide for <Link href="/docs/mac">macOS</Link>, <Link href="/docs/windows">Windows</Link>, and <Link href="/docs/linux">Linux</Link> to help you get started as quickly as possible.
      </p>

      <h3>What is Pieces?</h3>
      <p>
        At its core, Pieces is an all-in-one productivity tool that helps developers work <strong>smarter</strong>, not harder, by anchoring engineers to their workflow with the power of the <strong>Long-Term Memory Engine</strong>, <strong>Pieces Drive</strong>, and the <strong>Pieces Copilot</strong>.
      </p>

      <ol>
        <li>
          <strong>Long-Term Memory Engine (LTM-2):</strong> A powerful, AI-powered live context framework that understands what you’re working on across your entire development workflow.
        </li>
        <li>
          <strong>Pieces Drive:</strong> The ability to save, search, reference, reuse, and share small developer resources like code snippets, screenshots, links, and text notes.
        </li>
        <li>
          <strong>Pieces Copilot:</strong> An intelligent assistant that helps with generating code, answering questions, and adding code comments with an adjustable context window.
        </li>
      </ol>

      <h2>Who is Pieces For?</h2>
      <p>
        Pieces is built from the ground up for developers who frequently reference or reuse small developer materials like code snippets or are looking to pick up where they left off and preserve the context of their workflow.
      </p>
      <p>
        Pieces is an <strong>excellent productivity option for developers of all levels</strong> and across various fields, including front-end developers, data scientists, DevOps engineers, and students.
      </p>

      <ul>
        <li>
          <strong>Preserving Workflow Context:</strong> LTM-2 provides deep-links and anchors to help you recall where you left off.
        </li>
        <li>
          <strong>Managing Developer Materials:</strong> Pieces Drive helps organize and reuse materials like code snippets and screenshots.
        </li>
        <li>
          <strong>Needing Code Assistance:</strong> Pieces Copilot helps understand your code and generate useful suggestions.
        </li>
      </ul>

      <p>Let Pieces do the heavy lifting and preserve your engineering creativity and ingenuity for when you need it most.</p>

      <h2>How Do I Use Pieces?</h2>
      <p>
        PiecesOS serves as the foundational layer of the entire Pieces for Developers Suite, much like Docker for containers. By installing PiecesOS, you enable full functionality of the desktop app and all IDE/browser plugins.
      </p>

      <p>Install instructions:</p>
      <ul>
        <li><Link href="/docs/mac">macOS</Link></li>
        <li><Link href="/docs/windows">Windows</Link></li>
        <li><Link href="/docs/linux">Linux</Link></li>
      </ul>

      <div className="border-l-4 border-orange-400 bg-orange-100 dark:bg-orange-900/30 p-4 mt-8 rounded">
        <p><strong>⚠️ PiecesOS is required</strong> for any Pieces Software to work, including the Pieces Desktop App.</p>
        <p>The Pieces Desktop App is optional but recommended to install alongside PiecesOS.</p>
      </div>

      <p className="text-sm mt-8 text-gray-500 dark:text-gray-400">Updated on May 29, 2025, 2:39 PM UTC</p>
    </div>
  );
}