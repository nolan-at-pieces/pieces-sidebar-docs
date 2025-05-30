import React from 'react';

const MeetPieces: React.FC = () => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Meet Pieces</h1>
      <p>
        Welcome to Pieces! This documentation is designed to provide a high-level overview of Pieces' features and functionalities, with a quick-start and troubleshooting guides for macOS, Windows, and Linux to help you get started with Pieces as quickly as possible.
      </p>
      
      <h2>What is Pieces?</h2>
      <p>
        Pieces is a powerful developer tool that combines three core functionalities:
      </p>
      <ol>
        <li>
          <strong>Long-Term Memory Engine (LTM-2)</strong>: A powerful, AI-powered live context framework that understands what you're working on across your entire development workflow. The LTM-2 helps by outsourcing the burden of remembering and organizing your work.
        </li>
        <li>
          <strong>Pieces Drive</strong>: The ability to save, search, reference, reuse, and share small developer resources like code snippets, screenshots, links, and text notes.
        </li>
        <li>
          <strong>Pieces Copilot</strong>: An intelligent assistant that helps with generating code, answering questions, and adding code comments while utilizing a LLM of your choice—featuring an adjustable context window to suit your needs.
        </li>
      </ol>

      <h2>Getting Started</h2>
      <p>
        To get started with Pieces, check out our installation guides for your operating system:
      </p>
      <ul>
        <li><a href="/docs/meet-pieces/macos-installation-guide">macOS Installation Guide</a></li>
        <li><a href="/docs/meet-pieces/windows-installation-guide">Windows Installation Guide</a></li>
        <li><a href="/docs/meet-pieces/linux-installation-guide">Linux Installation Guide</a></li>
      </ul>
    </div>
  );
};

export default MeetPieces; 