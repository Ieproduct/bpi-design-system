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
      desc: 'Brand colors, semantic colors (primary, secondary, success, danger, warning, info), background, text, surface tokens, and full 50–950 palette for 22 color families. Includes light vs dark mode comparison tables.',
    },
    {
      label: 'Typography',
      path: '/tokens/typography',
      desc: 'Font families, font sizes (xs–3xl), font weights (light–bold), and heading/body type scale with CSS classes.',
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
      {/* ── AI-readable header ── */}
      <section>
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-3">BPI Design System</h1>
        <div className="w-16 h-0.5 bg-[var(--color-text-primary)] mb-6" />
        <p className="text-[var(--color-text-secondary)] text-lg max-w-3xl">
          Design token reference for BPI projects. This site is the single source of truth for colors,
          typography, spacing, and other visual tokens. AI agents and developers should read values from
          these pages to keep designs consistent across all projects, regardless of framework.
        </p>
      </section>

      {/* ── How to use ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">How to use this reference</h2>
        <div className="bg-[var(--color-surface-variant)] rounded-lg p-6 space-y-4 text-sm text-[var(--color-text-primary)]">
          <p><strong>For AI agents:</strong> Read the token pages below to get exact CSS variable names and hex values.
          When building UI for any BPI project, always reference these tokens instead of hard-coding colors or sizes.
          Every token has a CSS variable (e.g. <code className="text-xs font-mono text-blue-600">--color-primary-main</code>) and a raw value (e.g. <code className="text-xs font-mono text-blue-600">#E32321</code>).
          </p>
          <p><strong>For developers:</strong> Import the design system CSS and use the CSS variables in your code.
          The tokens are framework-agnostic — they work with React, Vue, Angular, Svelte, plain HTML, or any other technology.
          </p>
          <p><strong>When updating:</strong> Edit the token data in <code className="text-xs font-mono text-blue-600">docs/src/data/tokens.ts</code>, push to <code className="text-xs font-mono text-blue-600">main</code>, and GitHub Actions will auto-deploy.</p>
        </div>
      </section>

      {/* ── AI Agent Integration ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">AI Agent Integration</h2>
        <p className="text-[var(--color-text-secondary)]">
          Two ways for AI agents (Claude, Cursor, Copilot, etc.) to access design tokens programmatically:
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {/* CLAUDE.md card */}
          <div className="bg-[var(--color-surface-variant)] rounded-lg p-6 space-y-3 text-sm text-[var(--color-text-primary)]">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="text-xl">📄</span> CLAUDE.md
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Drop-in reference file for your project root. AI tools auto-read it and get all token names, values, and usage rules instantly.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                to="/claude-md"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-white transition-colors"
                style={{ backgroundColor: 'var(--color-primary-main)' }}
              >
                View &amp; Download
              </Link>
              <a
                href="https://github.com/Ieproduct/bpi-design-system/blob/main/CLAUDE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold border transition-colors"
                style={{ borderColor: 'var(--color-border-strong)', color: 'var(--color-text-primary)' }}
              >
                GitHub
              </a>
            </div>
          </div>

          {/* MCP Server card */}
          <div className="bg-[var(--color-surface-variant)] rounded-lg p-6 space-y-3 text-sm text-[var(--color-text-primary)]">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="text-xl">🔌</span> MCP Server
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Query design tokens in real-time via Model Context Protocol. AI can search tokens, get colors, and generate CSS snippets on demand.
            </p>
            <div className="space-y-2 pt-1">
              <p className="text-xs text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-text-primary)]">Tools:</strong> list_categories, get_tokens, get_color, search_tokens, get_css_snippet
              </p>
              <p className="text-xs text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-text-primary)]">Setup:</strong> See <Link to="/claude-md" className="text-blue-600 dark:text-blue-400 hover:underline">CLAUDE.md page</Link> for config instructions
              </p>
              <p className="text-xs text-[var(--color-text-secondary)]">
                <strong className="text-[var(--color-text-primary)]">Source:</strong> <code className="font-mono text-blue-600 dark:text-blue-400">mcp/index.js</code> in the repository
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dark mode guide ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Dark Mode</h2>
        <div className="bg-[var(--color-surface-variant)] rounded-lg p-6 space-y-4 text-sm text-[var(--color-text-primary)]">
          <p><strong>How it works:</strong> Add <code className="font-mono text-blue-600 dark:text-blue-400">class="dark"</code> to <code className="font-mono text-blue-600 dark:text-blue-400">&lt;html&gt;</code> to activate dark mode. All CSS variables automatically switch to their dark values. Use the same variable names in both modes.</p>
          <p><strong>Toggle in JS:</strong> <code className="font-mono text-blue-600 dark:text-blue-400">document.documentElement.classList.toggle('dark')</code></p>
          <p><strong>Persist preference:</strong> <code className="font-mono text-blue-600 dark:text-blue-400">localStorage.setItem('theme', 'dark')</code> — On page load, check <code className="font-mono text-blue-600 dark:text-blue-400">localStorage.getItem('theme')</code> or fall back to <code className="font-mono text-blue-600 dark:text-blue-400">window.matchMedia('(prefers-color-scheme: dark)').matches</code></p>
          <p><strong>What changes in dark mode:</strong> Semantic colors (primary, secondary, success, danger, warning, info), background colors, text colors, and surface/border tokens all have dark mode values. The full 50–950 color palette does NOT change — those are absolute values.</p>
          <p><strong>For AI agents:</strong> Always use CSS variables like <code className="font-mono text-blue-600 dark:text-blue-400">var(--color-primary-main)</code> — never hard-code hex values. This ensures your UI automatically adapts to light/dark mode. See the <Link to="/tokens/colors" className="text-blue-600 dark:text-blue-400 hover:underline">Colors page</Link> for a full side-by-side comparison of all light vs dark values.</p>
          <p><strong>CSS file:</strong> <code className="font-mono text-blue-600 dark:text-blue-400">docs/src/styles/app.css</code> — all dark mode overrides are in the <code className="font-mono">.dark {'{'} ... {'}'}</code> block.</p>
          <p><strong>Token data:</strong> <code className="font-mono text-blue-600 dark:text-blue-400">docs/src/data/tokens.ts</code> — exports <code className="font-mono">darkSemanticColors</code>, <code className="font-mono">darkBackgroundColors</code>, <code className="font-mono">darkTextColors</code>, <code className="font-mono">darkSurfaceTokens</code>.</p>
        </div>
      </section>

      {/* ── Token reference links ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Token Reference</h2>
        <p className="text-[var(--color-text-secondary)]">Each page contains tables with Swatch, CSS Variable, and Hex value — click any value to copy.</p>

        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)]">
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Token Page</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">URL</th>
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
                  <td className="px-4 py-3">
                    <code className="text-xs font-mono text-[var(--color-text-secondary)]">{baseUrl}{page.path}</code>
                  </td>
                  <td className="px-4 py-3 text-sm text-[var(--color-text-secondary)]">{page.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Quick reference ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Quick Reference — Key Tokens</h2>
        <p className="text-[var(--color-text-secondary)]">Most commonly used tokens at a glance.</p>

        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)]">
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Category</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">CSS Variable</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Value</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Usage</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                ['Brand', '--color-primary-main', '#E32321', 'Primary buttons, links, key actions'],
                ['Brand', '--color-secondary-main', '#262626', 'Secondary buttons, supporting UI'],
                ['Brand', '--color-primary-lighter', '#FEF2F2', 'Light primary backgrounds, hover states'],
                ['Success', '--color-success-main', '#16A34A', 'Success messages, confirmations'],
                ['Danger', '--color-danger-main', '#DC2626', 'Error states, destructive actions'],
                ['Warning', '--color-warning-main', '#D97706', 'Warning alerts, caution states'],
                ['Info', '--color-info-main', '#0284C7', 'Info messages, help text'],
                ['Background', '--color-bg-default', '#F8FAFC', 'Default page background'],
                ['Background', '--color-bg-paper', '#FFFFFF', 'Cards, dialogs, elevated surfaces'],
                ['Text', '--color-text-primary', '#0F172A', 'Headings, body text'],
                ['Text', '--color-text-secondary', '#64748B', 'Supporting text, labels'],
                ['Palette', '--color-blue-500', '#3b82f6', 'Example: blue from the 50–950 palette'],
                ['Palette', '--color-red-500', '#ef4444', 'Example: red from the 50–950 palette'],
                ['Spacing', '--spacing-4', '16px', 'Default spacing unit'],
                ['Radius', '--radius-md', '6px', 'Default border radius'],
              ].map(([cat, cssVar, value, usage], i) => (
                <tr key={i} className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-variant)]">
                  <td className="px-4 py-2 text-[var(--color-text-secondary)]">{cat}</td>
                  <td className="px-4 py-2">
                    <code className="text-xs font-mono text-blue-600 dark:text-blue-400">{cssVar}</code>
                  </td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    {cssVar.includes('color') && (
                      <div style={{ backgroundColor: value }} className="w-4 h-4 rounded border border-[var(--color-border)] shrink-0" />
                    )}
                    <code className="text-xs font-mono text-[var(--color-text-secondary)]">{value}</code>
                  </td>
                  <td className="px-4 py-2 text-[var(--color-text-secondary)]">{usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── CSS Variable naming convention ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">CSS Variable Naming Convention</h2>
        <div className="bg-[var(--color-surface-variant)] rounded-lg p-6 space-y-3 text-sm text-[var(--color-text-primary)]">
          <div><code className="font-mono text-blue-600">--color-{'{'}name{'}'}-{'{'}shade{'}'}</code> — Semantic colors (e.g. <code className="font-mono">--color-primary-main</code>, <code className="font-mono">--color-danger-lighter</code>)</div>
          <div><code className="font-mono text-blue-600">--color-{'{'}color{'}'}-{'{'}50-950{'}'}</code> — Palette colors (e.g. <code className="font-mono">--color-blue-500</code>, <code className="font-mono">--color-red-100</code>)</div>
          <div><code className="font-mono text-blue-600">--color-bg-{'{'}name{'}'}</code> — Background colors (e.g. <code className="font-mono">--color-bg-default</code>, <code className="font-mono">--color-bg-paper</code>)</div>
          <div><code className="font-mono text-blue-600">--color-text-{'{'}name{'}'}</code> — Text colors (e.g. <code className="font-mono">--color-text-primary</code>, <code className="font-mono">--color-text-secondary</code>)</div>
          <div><code className="font-mono text-blue-600">--color-brand-{'{'}name{'}'}</code> — Brand colors (e.g. <code className="font-mono">--color-brand-primary</code>)</div>
          <div><code className="font-mono text-blue-600">--spacing-{'{'}step{'}'}</code> — Spacing (e.g. <code className="font-mono">--spacing-4</code> = 16px)</div>
          <div><code className="font-mono text-blue-600">--radius-{'{'}size{'}'}</code> — Border radius (e.g. <code className="font-mono">--radius-md</code> = 6px)</div>
          <div><code className="font-mono text-blue-600">--shadow-{'{'}size{'}'}</code> — Box shadows (e.g. <code className="font-mono">--shadow-md</code>)</div>
        </div>
      </section>

      {/* ── Source info ── */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Source &amp; Deployment</h2>
        <div className="bg-[var(--color-surface-variant)] rounded-lg p-6 space-y-2 text-sm text-[var(--color-text-primary)]">
          <div><strong>Repository:</strong> <code className="font-mono text-blue-600">github.com/Ieproduct/bpi-design-system</code></div>
          <div><strong>Token data:</strong> <code className="font-mono text-blue-600">docs/src/data/tokens.ts</code></div>
          <div><strong>Docs site:</strong> <code className="font-mono text-blue-600">docs/</code> subfolder (Vite + React + TanStack Router)</div>
          <div><strong>Deploy:</strong> Push to <code className="font-mono">main</code> → GitHub Actions auto-builds and deploys to GitHub Pages</div>
          <div><strong>Live URL:</strong> <code className="font-mono text-blue-600">{baseUrl}</code></div>
        </div>
      </section>
    </div>
  )
}
