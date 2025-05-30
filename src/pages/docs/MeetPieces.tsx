
import React from 'react';

export default function GettingToKnowPieces() {
  return (
    <div className="prose prose-lg max-w-4xl mx-auto px-6 py-12 dark:prose-invert">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Getting to Know Pieces</h1>
        <p className="text-xl text-muted-foreground">
          Pieces is an AI-enabled productivity tool designed to increase developer efficiency through personalized workflow assistance across the entire toolchain, featuring a dedicated desktop application and integrations with many popular IDEs.
        </p>
      </header>

      <div className="flex justify-center my-12">
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1734014941536/9c298363-d6b4-4e4a-9965-72db0fa59bc6.png?auto=compress,format&format=webp&q=75"
          alt="Pieces ecosystem diagram showing cloud integrations, on-device components, and core dependencies"
          className="rounded-lg shadow-lg max-w-full h-auto border"
        />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Introducing Pieces for Developers</h2>
        <p className="mb-4">
          This documentation is designed to provide a high-level overview of{" "}
          <a href="/docs/features" className="text-primary hover:underline">
            Pieces' features and functionalities
          </a>
          , with a quick-start and troubleshooting guide for{" "}
          <a href="/docs/mac" className="text-primary hover:underline">macOS</a>,{" "}
          <a href="/docs/windows" className="text-primary hover:underline">Windows</a>, and{" "}
          <a href="/docs/linux" className="text-primary hover:underline">Linux</a>{" "}
          to help you get started as quickly as possible.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold mb-4">What is Pieces?</h3>
        <p className="mb-6">
          At its core, Pieces is an all-in-one productivity tool that helps developers work{" "}
          <strong>smarter</strong>, not harder, by anchoring engineers to their workflow with the power of the{" "}
          <strong>Long-Term Memory Engine</strong>, <strong>Pieces Drive</strong>, and the{" "}
          <strong>Pieces Copilot</strong>.
        </p>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
          <div className="bg-card border rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3">1. Long-Term Memory Engine (LTM-2)</h4>
            <p className="text-muted-foreground">
              A powerful, AI-powered live context framework that understands what you're working on across your entire development workflow.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3">2. Pieces Drive</h4>
            <p className="text-muted-foreground">
              The ability to save, search, reference, reuse, and share small developer resources like code snippets, screenshots, links, and text notes.
            </p>
          </div>
          
          <div className="bg-card border rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3">3. Pieces Copilot</h4>
            <p className="text-muted-foreground">
              An intelligent assistant that helps with generating code, answering questions, and adding code comments with an adjustable context window.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Who is Pieces For?</h2>
        <p className="mb-4">
          Pieces is built from the ground up for developers who frequently reference or reuse small developer materials like code snippets or are looking to pick up where they left off and preserve the context of their workflow.
        </p>
        <p className="mb-6">
          Pieces is an <strong>excellent productivity option for developers of all levels</strong> and across various fields, including front-end developers, data scientists, DevOps engineers, and students.
        </p>

        <div className="bg-muted/50 rounded-lg p-6">
          <h4 className="font-semibold mb-4">Key Use Cases:</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong>Preserving Workflow Context:</strong> LTM-2 provides deep-links and anchors to help you recall where you left off.
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong>Managing Developer Materials:</strong> Pieces Drive helps organize and reuse materials like code snippets and screenshots.
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                <strong>Needing Code Assistance:</strong> Pieces Copilot helps understand your code and generate useful suggestions.
              </div>
            </li>
          </ul>
        </div>

        <p className="mt-6 text-center italic text-muted-foreground">
          Let Pieces do the heavy lifting and preserve your engineering creativity and ingenuity for when you need it most.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">How Do I Use Pieces?</h2>
        <p className="mb-6">
          PiecesOS serves as the foundational layer of the entire Pieces for Developers Suite, much like Docker for containers. By installing PiecesOS, you enable full functionality of the desktop app and all IDE/browser plugins.
        </p>

        <div className="bg-card border rounded-lg p-6 mb-6">
          <h4 className="font-semibold mb-4">Install Instructions:</h4>
          <ul className="space-y-2">
            <li>
              <a href="/docs/mac" className="text-primary hover:underline font-medium">
                📱 macOS Installation Guide
              </a>
            </li>
            <li>
              <a href="/docs/windows" className="text-primary hover:underline font-medium">
                🪟 Windows Installation Guide
              </a>
            </li>
            <li>
              <a href="/docs/linux" className="text-primary hover:underline font-medium">
                🐧 Linux Installation Guide
              </a>
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-orange-400 bg-orange-100 dark:bg-orange-900/30 p-6 rounded-r-lg">
          <div className="flex items-start">
            <span className="text-orange-600 dark:text-orange-400 mr-3 text-xl">⚠️</span>
            <div>
              <p className="font-semibold mb-2">PiecesOS is required</p>
              <p className="text-sm mb-2">
                for any Pieces Software to work, including the Pieces Desktop App.
              </p>
              <p className="text-sm text-muted-foreground">
                The Pieces Desktop App is optional but recommended to install alongside PiecesOS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground text-center">
          Updated on May 29, 2025, 2:39 PM UTC
        </p>
      </footer>
    </div>
  );
}
