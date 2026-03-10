import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const features = [
    {
      icon: '⚙️',
      title: 'Web Components',
      description:
        'Built with web standards. Works with any framework or vanilla JavaScript.',
    },
    {
      icon: '🎯',
      title: 'Framework Agnostic',
      description:
        'Use BPI components in React, Vue, Angular, Svelte, or any web environment.',
    },
    {
      icon: '🎨',
      title: 'Design Tokens',
      description:
        'Consistent colors, spacing, typography, and more across your applications.',
    },
    {
      icon: '📘',
      title: 'TypeScript Support',
      description:
        'Full type safety and excellent IDE support for all components and utilities.',
    },
  ]

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-12 lg:py-20">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-[var(--color-text-primary)]">
          BPI Design System
        </h1>
        <p className="text-xl lg:text-2xl text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto">
          A modern, accessible design system and component library built for developers and designers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/components/button"
            className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Browse Components
          </Link>
          <Link
            to="/getting-started"
            className="px-8 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors inline-block"
          >
            Getting Started
          </Link>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[var(--color-text-primary)]">Quick Start</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Get up and running with BPI Design System in minutes using the CDN:
          </p>
        </div>
        <div className="bg-[var(--color-surface-variant)] rounded-lg p-6 overflow-auto">
          <pre className="text-sm text-[var(--color-text-primary)]">
            <code>{`import { Button, Input, Card } from '@bpi-design/components';

<Button variant="primary">Click me</Button>
<Input placeholder="Enter text" />
<Card title="Welcome">
  <p>Your content here</p>
</Card>`}</code>
          </pre>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[var(--color-text-primary)]">Features</h2>
          <p className="text-[var(--color-text-secondary)]">
            Everything you need to build beautiful, accessible interfaces.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[var(--color-surface-variant)] rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--color-text-primary)]">
                {feature.title}
              </h3>
              <p className="text-[var(--color-text-secondary)]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[var(--color-primary)] text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-8 opacity-90">
          Explore our components library and see how BPI can accelerate your development.
        </p>
        <Link
          to="/components/button"
          className="inline-block px-8 py-3 bg-white text-[var(--color-primary)] rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          View All Components
        </Link>
      </section>
    </div>
  )
}
