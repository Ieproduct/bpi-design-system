import { createFileRoute } from '@tanstack/react-router'
import { spacingScale } from '~/data/tokens'

export const Route = createFileRoute('/tokens/spacing')({
  component: SpacingPage,
})

function SpacingPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)]">
          Spacing
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Our spacing scale provides consistent and predictable spacing throughout your designs. Each step is based on a 4px base unit.
        </p>
      </section>

      {/* Spacing Scale Table */}
      <section className="space-y-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-[var(--color-border)]">
                <th className="text-left py-4 px-4 font-semibold text-[var(--color-text-primary)]">
                  Name
                </th>
                <th className="text-left py-4 px-4 font-semibold text-[var(--color-text-primary)]">
                  Value
                </th>
                <th className="text-left py-4 px-4 font-semibold text-[var(--color-text-primary)]">
                  Visual
                </th>
                <th className="text-left py-4 px-4 font-semibold text-[var(--color-text-primary)]">
                  CSS Variable
                </th>
              </tr>
            </thead>
            <tbody>
              {spacingScale.map((token) => (
                <tr
                  key={token.step}
                  className="border-b border-[var(--color-border)] hover:bg-[var(--color-surface-variant)] transition-colors"
                >
                  <td className="py-4 px-4 font-mono text-sm text-[var(--color-text-primary)]">
                    sp-{token.step}
                  </td>
                  <td className="py-4 px-4 text-sm text-[var(--color-text-secondary)]">
                    {token.value}
                  </td>
                  <td className="py-4 px-4">
                    <div
                      style={{ width: `${token.pixels}px` }}
                      className="h-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded"
                      title={`${token.pixels}px wide`}
                    />
                  </td>
                  <td className="py-4 px-4">
                    <code className="font-mono text-xs text-blue-600 dark:text-blue-400">
                      --spacing-{token.step}
                    </code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            Usage
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Use spacing tokens in your CSS or component styles for consistent spacing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CSS Example */}
          <div className="bg-[var(--color-surface-variant)] rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-[var(--color-text-primary)]">
              CSS Custom Properties
            </h3>
            <pre className="text-xs font-mono text-[var(--color-text-secondary)] overflow-x-auto">
              <code>{`.component {
  padding: var(--spacing-4);
  margin-bottom: var(--spacing-6);
  gap: var(--spacing-3);
}`}</code>
            </pre>
          </div>

          {/* SCSS Example */}
          <div className="bg-[var(--color-surface-variant)] rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-[var(--color-text-primary)]">
              Tailwind Utilities
            </h3>
            <pre className="text-xs font-mono text-[var(--color-text-secondary)] overflow-x-auto">
              <code>{`<div class="p-4 mb-6 gap-3 flex">
  Content with spacing utilities
</div>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Visual Reference */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            Visual Reference
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-6">
            See the relative sizes of spacing values stacked vertically.
          </p>
        </div>

        <div className="space-y-2 bg-[var(--color-surface-variant)] p-8 rounded-lg">
          {spacingScale.map((token) => (
            <div
              key={token.step}
              style={{ height: `${token.pixels}px` }}
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded flex items-center px-4"
            >
              <span className="text-white text-xs font-semibold">
                {token.value} (sp-{token.step})
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Best Practices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[var(--color-surface-variant)] p-6 rounded-lg space-y-3">
            <h3 className="font-semibold text-[var(--color-text-primary)]">
              Do
            </h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Always use spacing tokens from the design system</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Use consistent spacing across similar components</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Combine tokens for larger spacing needs</span>
              </li>
            </ul>
          </div>

          <div className="bg-[var(--color-surface-variant)] p-6 rounded-lg space-y-3">
            <h3 className="font-semibold text-[var(--color-text-primary)]">
              Don't
            </h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>Use arbitrary spacing values or magic numbers</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>Mix different spacing scales in the same component</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>Ignore whitespace and visual rhythm</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
