import React, { useState, useEffect } from 'react';
import { codeToHtml } from 'shiki';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  title,
}) => {
  const [html, setHtml] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const highlightCode = async () => {
      try {
        setIsLoading(true);
        const highlighted = await codeToHtml(code, {
          lang: language,
          theme: 'github-light',
        });
        setHtml(highlighted);
      } catch (error) {
        console.error('Error highlighting code:', error);
        setHtml(null);
      } finally {
        setIsLoading(false);
      }
    };

    highlightCode();
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  return (
    <div className="bg-[var(--color-code-bg)] rounded-lg border border-[var(--color-border)] overflow-hidden">
      {title && (
        <div className="px-4 py-2 border-b border-[var(--color-border)] bg-[var(--color-surface-variant)] text-sm font-mono text-[var(--color-text-secondary)]">
          {title}
        </div>
      )}

      <div className="relative">
        {isLoading ? (
          <pre className="p-4 text-sm font-mono text-[var(--color-text)] overflow-x-auto">
            <code>{code}</code>
          </pre>
        ) : html ? (
          <div
            className="p-4 text-sm overflow-x-auto [&_pre]:m-0 [&_pre]:bg-transparent [&_pre]:p-0"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <pre className="p-4 text-sm font-mono text-[var(--color-text)] overflow-x-auto">
            <code>{code}</code>
          </pre>
        )}

        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs font-medium hover:bg-blue-700 transition-colors"
          title="Copy code"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
