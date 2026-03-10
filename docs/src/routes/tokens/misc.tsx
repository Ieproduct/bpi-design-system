import { createFileRoute } from '@tanstack/react-router'
import { borderRadius, boxShadows, zIndexScale } from '~/data/tokens'

export const Route = createFileRoute('/tokens/misc')({
  component: MiscTokensPage,
})

function MiscTokensPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)]">
          Miscellaneous Tokens
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Border radius, box shadows, z-index levels, and transitions. Use CSS variable names or raw values in your project.
        </p>
      </section>

      {/* Border Radius — Table format */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Border Radius</h2>
          <p className="text-[var(--color-text-secondary)]">Predefined border radius values for consistent corner rounding.</p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)]">
                <th className="px-4 py-2 border-b border-[var(--color-border)] w-20">Preview</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Name</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">CSS Variable</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Value</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Description</th>
              </tr>
            </thead>
            <tbody>
              {borderRadius.map((radius) => (
                <tr key={radius.name} className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-variant)]">
                  <td className="px-4 py-3">
                    <div style={{ borderRadius: radius.pixels }} className="w-16 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)]" />
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text-primary)]">{radius.name}</td>
                  <td className="px-4 py-3">
                    <code className="text-xs font-mono text-blue-600 dark:text-blue-400">--radius-{radius.name}</code>
                  </td>
                  <td className="px-4 py-3">
                    <code className="text-xs font-mono text-[var(--color-text-secondary)]">{radius.pixels}</code>
                  </td>
                  <td className="px-4 py-3 text-xs text-[var(--color-text-secondary)]">{radius.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Box Shadows — Table format */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Box Shadows</h2>
          <p className="text-[var(--color-text-secondary)]">Shadow effects for depth and visual hierarchy.</p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)]">
                <th className="px-4 py-2 border-b border-[var(--color-border)] w-28">Preview</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Name</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">CSS Variable</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Value</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Description</th>
              </tr>
            </thead>
            <tbody>
              {boxShadows.map((shadow) => (
                <tr key={shadow.name} className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-variant)]">
                  <td className="px-4 py-4">
                    <div style={{ boxShadow: shadow.value }} className="w-20 h-14 bg-white rounded-lg border border-gray-100" />
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-[var(--color-text-primary)]">{shadow.name}</td>
                  <td className="px-4 py-4">
                    <code className="text-xs font-mono text-blue-600 dark:text-blue-400">--shadow-{shadow.name}</code>
                  </td>
                  <td className="px-4 py-4">
                    <code className="text-[10px] font-mono text-[var(--color-text-secondary)] break-all">{shadow.value}</code>
                  </td>
                  <td className="px-4 py-4 text-xs text-[var(--color-text-secondary)]">{shadow.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Z-Index Scale — Table format with CSS var */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Z-Index Scale</h2>
          <p className="text-[var(--color-text-secondary)]">Standardized z-index values for proper layering.</p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)]">
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Name</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">CSS Variable</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Value</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Description</th>
              </tr>
            </thead>
            <tbody>
              {zIndexScale.map((item) => (
                <tr key={item.name} className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-variant)] transition-colors">
                  <td className="py-3 px-4 text-sm font-medium text-[var(--color-text-primary)]">{item.name}</td>
                  <td className="py-3 px-4">
                    <code className="text-xs font-mono text-blue-600 dark:text-blue-400">--z-{item.name}</code>
                  </td>
                  <td className="py-3 px-4">
                    <code className="text-xs font-mono text-[var(--color-text-secondary)]">{item.value}</code>
                  </td>
                  <td className="py-3 px-4 text-xs text-[var(--color-text-secondary)]">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Transitions — Table format */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Transitions</h2>
          <p className="text-[var(--color-text-secondary)]">Standard animation timings and easing functions.</p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)]">
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Name</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">CSS Variable</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Value</th>
                <th className="px-4 py-2 border-b border-[var(--color-border)]">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-variant)]">
                <td className="py-3 px-4 text-sm font-medium text-[var(--color-text-primary)]">Fast</td>
                <td className="py-3 px-4"><code className="text-xs font-mono text-blue-600 dark:text-blue-400">--duration-fast</code></td>
                <td className="py-3 px-4"><code className="text-xs font-mono text-[var(--color-text-secondary)]">150ms</code></td>
                <td className="py-3 px-4 text-xs text-[var(--color-text-secondary)]">Micro-interactions and feedback</td>
              </tr>
              <tr className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-variant)]">
                <td className="py-3 px-4 text-sm font-medium text-[var(--color-text-primary)]">Standard</td>
                <td className="py-3 px-4"><code className="text-xs font-mono text-blue-600 dark:text-blue-400">--duration-standard</code></td>
                <td className="py-3 px-4"><code className="text-xs font-mono text-[var(--color-text-secondary)]">250ms</code></td>
                <td className="py-3 px-4 text-xs text-[var(--color-text-secondary)]">Default state changes and interactions</td>
              </tr>
              <tr className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-variant)]">
                <td className="py-3 px-4 text-sm font-medium text-[var(--color-text-primary)]">Slow</td>
                <td className="py-3 px-4"><code className="text-xs font-mono text-blue-600 dark:text-blue-400">--duration-slow</code></td>
                <td className="py-3 px-4"><code className="text-xs font-mono text-[var(--color-text-secondary)]">400ms</code></td>
                <td className="py-3 px-4 text-xs text-[var(--color-text-secondary)]">Complex animations and modals</td>
              </tr>
              <tr className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface-variant)]">
                <td className="py-3 px-4 text-sm font-medium text-[var(--color-text-primary)]">Ease Out</td>
                <td className="py-3 px-4"><code className="text-xs font-mono text-blue-600 dark:text-blue-400">--ease-out</code></td>
                <td className="py-3 px-4"><code className="text-xs font-mono text-[var(--color-text-secondary)]">cubic-bezier(0.4, 0, 0.2, 1)</code></td>
                <td className="py-3 px-4 text-xs text-[var(--color-text-secondary)]">Entering/appearing animations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
