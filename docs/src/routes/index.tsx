import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const baseUrl = 'https://ieproduct.github.io/bpi-design-system'

  const tokenPages = [
    {
      label: 'Colors',
      path: '/tokens/colors',
      desc: 'Brand colors, semantic colors (primary, secondary, success, danger, warning, info), background, text, surface tokens, and full 50-950 palette. Includes light vs dark mode comparison.',
    },
    {
      label: 'Typography',
      path: '/tokens/typography',
      desc: 'Font families, font sizes (xs-3xl), font weights (light-bold), and heading/body type scale.',
    },
    {
      label: 'Spacing',
      path: '/tokens/spacing',
      desc: 'Spacing scale from 4px to 64px with CSS variables --spacing-{step}.',
    },
    {
      label: 'Misc',
      path: '/tokens/misc',
      desc: 'Border radius, box shadows, z-index scale, and transition durations.',
    },
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-3">BPI Design System</h1>
        <div className="w-16 h-0.5 bg-[var(--color-text-primary)] mb-6" />
        <p className="text-[var(--color-text-secondary)] text-lg max-w-3xl">
          Central design specification reference for all BPI projects. This site provides design tokens
          (colors, typography, spacing) and component specifications (sizes, variants, states, accessibility).
          Each team implements their own components based on these specs.
        </p>
      </section>

      {/* Architecture overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">How it works</h2>
        <div className="bg-[var(--color-surface-variant)] rounded-lg p-6 space-y-4 text-sm text-[var(--color-text-primary)]">
          <p><strong>Design Tokens</strong> define the visual foundation: colors, spacing, typography, border radius, shadows.
          Use CSS custom properties (e.g. <code className="text-xs font-mono text-blue-600">var(--bpi-primary)</code>) in any framework.</p>
          <p><strong>Component Specs</strong> define how each UI component should look and behave: sizing, color variants,
          interactive states, sub-element styles, and accessibility requirements. These are reference specifications,
          not implementations — each team builds their own components following the spec.</p>
          <p><strong>For AI agents:</strong> Read the token and spec pages to get exact values. When building UI for BPI,
          reference these tokens and follow the component specs to maintain design consistency across systems.</p>
        </div>
      </section>

      {/* AI Agent Integration */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">AI Agent Integration</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-[var(--color-surface-variant)] rounded-lg p-6 space-y-3 text-sm text-[var(--color-text-primary)]">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="text-xl">📄</span> CLAUDE.md
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Drop-in reference file for your project root. AI tools auto-read it and get all token names, values, and usage rules.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                to="/claude-md"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-white transition-colors"
                style={{ backgroundColor: 'var(--color-primary-main)' }}
              >
                View &amp; Download
              </Link>
            </div>
          </div>

          <div className="bg-[var(--color-surface-variant)] rounded-lg p-6 space-y-3 text-sm text-[var(--color-text-primary)]">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="text-xl">🔌</span> MCP Server
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Query design tokens in real-time via Model Context Protocol. AI can search tokens and generate CSS snippets on demand.
            </p>
            <div className="space-y-2 pt-1">
              <p className="text-xs text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-text-primary)]">Setup:</strong> See <Link to="/claude-md" className="text-blue-600 dark:text-blue-400 hover:underline">CLAUDE.md page</Link> for config
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Token reference links */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Design Tokens</h2>
        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)]">
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Token Page</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Contents</th>
              </tr>
            </thead>
            <tbody>
              {tokenPages.map((page) => (
                <tr key={page.path} className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-variant)] transition-colors">
                  <td className="px-4 py-3">
                    <Link to={page.path} className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                      {page.label}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-sm text-[var(--color-text-secondary)]">{page.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Component Specs overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Component Specifications</h2>
        <p className="text-[var(--color-text-secondary)]">
          Each component spec defines sizes, color variants, interactive states, sub-element styles, and accessibility requirements.
          Browse by category:
        </p>
        <div className="grid gap-4 md:grid-cols-1">
          <Link
            to="/components/button"
            className="bg-[var(--color-surface-variant)] rounded-lg p-5 hover:bg-[var(--color-surface-hover)] transition-colors block"
          >
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">Atoms <span className="text-sm font-normal text-[var(--color-text-secondary)]">(21)</span></h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Button, Input, Badge, Checkbox, Switch, Avatar, Alert, Tooltip, and more</p>
          </Link>
          <p className="text-sm text-[var(--color-text-muted)] italic">Molecules & Organisms coming soon.</p>
        </div>
      </section>

      {/* Dark mode */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Dark Mode</h2>
        <div className="bg-[var(--color-surface-variant)] rounded-lg p-6 space-y-4 text-sm text-[var(--color-text-primary)]">
          <p><strong>How it works:</strong> Add <code className="font-mono text-blue-600 dark:text-blue-400">class="dark"</code> to <code className="font-mono text-blue-600 dark:text-blue-400">&lt;html&gt;</code> to activate dark mode. All CSS variables automatically switch. Use the same variable names in both modes.</p>
          <p><strong>For AI agents:</strong> Always use CSS variables like <code className="font-mono text-blue-600 dark:text-blue-400">var(--bpi-primary)</code> — never hard-code hex values. See the <Link to="/tokens/colors" className="text-blue-600 dark:text-blue-400 hover:underline">Colors page</Link> for light vs dark comparison.</p>
        </div>
      </section>

      {/* Source info */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Source &amp; Deployment</h2>
        <div className="bg-[var(--color-surface-variant)] rounded-lg p-6 space-y-2 text-sm text-[var(--color-text-primary)]">
          <div><strong>Repository:</strong> <code className="font-mono text-blue-600">github.com/Ieproduct/bpi-design-system</code></div>
          <div><strong>Token SCSS:</strong> <code className="font-mono text-blue-600">src/tokens/</code></div>
          <div><strong>Component Specs:</strong> <code className="font-mono text-blue-600">docs/src/data/specs.ts</code></div>
          <div><strong>Docs site:</strong> <code className="font-mono text-blue-600">docs/</code> (Vite + React + TanStack Router)</div>
          <div><strong>Deploy:</strong> Push to <code className="font-mono">main</code> → GitHub Actions auto-deploys to GitHub Pages</div>
          <div><strong>Live URL:</strong> <code className="font-mono text-blue-600">{baseUrl}</code></div>
        </div>
      </section>
    </div>
  )
}
