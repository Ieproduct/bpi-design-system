import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/claude-md')({
  component: ClaudeMdPage,
})

/* ── Minimal Markdown → HTML renderer ───────────────────────────── */
function renderMarkdown(md: string): string {
  let html = md
    // Escape HTML entities first
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  // Code blocks (``` ... ```)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_m, lang, code) => {
    return `<pre class="code-block" data-lang="${lang}"><code>${code.trim()}</code></pre>`
  })

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')

  // Headers
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>')
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>')
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>')
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>')

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr />')

  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')

  // Blockquotes
  html = html.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>')

  // Tables
  html = html.replace(
    /^(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)*)/gm,
    (_m, headerRow, _sep, bodyRows) => {
      const headers = headerRow
        .split('|')
        .filter((c: string) => c.trim())
        .map((c: string) => `<th>${c.trim()}</th>`)
        .join('')

      const rows = bodyRows
        .trim()
        .split('\n')
        .map((row: string) => {
          const cells = row
            .split('|')
            .filter((c: string) => c.trim())
            .map((c: string) => `<td>${c.trim()}</td>`)
            .join('')
          return `<tr>${cells}</tr>`
        })
        .join('\n')

      return `<div class="table-wrapper"><table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table></div>`
    }
  )

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>')
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>')

  // Paragraphs (lines that aren't already wrapped in HTML)
  html = html
    .split('\n\n')
    .map((block) => {
      const trimmed = block.trim()
      if (!trimmed) return ''
      if (
        trimmed.startsWith('<h') ||
        trimmed.startsWith('<hr') ||
        trimmed.startsWith('<pre') ||
        trimmed.startsWith('<div') ||
        trimmed.startsWith('<table') ||
        trimmed.startsWith('<ul') ||
        trimmed.startsWith('<blockquote')
      ) {
        return trimmed
      }
      return `<p>${trimmed.replace(/\n/g, '<br />')}</p>`
    })
    .join('\n')

  return html
}

/* ── Download helper ────────────────────────────────────────────── */
function downloadFile(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

function copyToClipboard(text: string, setCopied: (v: boolean) => void) {
  navigator.clipboard.writeText(text).then(() => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  })
}

/* ── Page component ─────────────────────────────────────────────── */
function ClaudeMdPage() {
  const [copied, setCopied] = useState(false)
  const [claudeMdRaw, setClaudeMdRaw] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'CLAUDE.md')
      .then((res) => res.text())
      .then((text) => {
        setClaudeMdRaw(text)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const renderedHtml = claudeMdRaw ? renderMarkdown(claudeMdRaw) : ''

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-[var(--color-text-secondary)]">Loading CLAUDE.md...</div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-3">
          CLAUDE.md
        </h1>
        <div className="w-16 h-0.5 bg-[var(--color-text-primary)] mb-4" />
        <p className="text-[var(--color-text-secondary)] text-lg max-w-3xl">
          AI agent reference file for the BPI Design System. Copy this file to the root of your project
          so AI tools (Claude, Cursor, Copilot, etc.) can automatically reference the correct design tokens.
        </p>
      </section>

      {/* Action buttons */}
      <section className="flex flex-wrap gap-3">
        {/* Download button */}
        <button
          onClick={() => downloadFile(claudeMdRaw, 'CLAUDE.md')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white transition-colors"
          style={{ backgroundColor: 'var(--color-primary-main)' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-main)')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download CLAUDE.md
        </button>

        {/* Copy raw content */}
        <button
          onClick={() => copyToClipboard(claudeMdRaw, setCopied)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border transition-colors"
          style={{
            borderColor: 'var(--color-border-strong)',
            color: 'var(--color-text-primary)',
            backgroundColor: 'var(--color-surface-variant)',
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {copied ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            )}
          </svg>
          {copied ? 'Copied!' : 'Copy to clipboard'}
        </button>

        {/* GitHub link */}
        <a
          href="https://github.com/Ieproduct/bpi-design-system/blob/main/CLAUDE.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border transition-colors"
          style={{
            borderColor: 'var(--color-border-strong)',
            color: 'var(--color-text-primary)',
            backgroundColor: 'var(--color-surface-variant)',
          }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </section>

      {/* Instructions */}
      <section className="bg-[var(--color-surface-variant)] rounded-lg p-5 text-sm text-[var(--color-text-primary)]">
        <p className="font-semibold mb-2">How to use:</p>
        <ol className="list-decimal list-inside space-y-1 text-[var(--color-text-secondary)]">
          <li>Download or copy the CLAUDE.md file above</li>
          <li>Place it in the <strong className="text-[var(--color-text-primary)]">root folder</strong> of your project</li>
          <li>AI tools will automatically read it when working on your codebase</li>
          <li>All design tokens, colors, and conventions will be available to the AI</li>
        </ol>
      </section>

      {/* Rendered content preview */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Preview</h2>
        <div
          className="claude-md-preview rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-paper)] p-6 lg:p-8 overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: renderedHtml }}
        />
      </section>
    </div>
  )
}
