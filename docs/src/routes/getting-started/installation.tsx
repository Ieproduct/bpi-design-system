import { createFileRoute } from '@tanstack/react-router'
import { CodeBlock } from '~/components/CodeBlock'

export const Route = createFileRoute('/getting-started/installation')({
  component: InstallationPage,
})

function InstallationPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)]">
          Installation
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Get started with BPI Design System in minutes. Choose the installation method that best fits your project.
        </p>
      </section>

      {/* CDN Installation */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            CDN (Quickest)
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            The fastest way to get started. Perfect for quick prototypes or adding BPI to existing projects.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              1. Add CSS Link
            </h3>
            <CodeBlock
              code={`<link rel="stylesheet" href="https://cdn.bpi-design.com/bpi-design/latest.css">`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              2. Add JavaScript Script
            </h3>
            <CodeBlock
              code={`<script src="https://cdn.bpi-design.com/bpi-design/latest.js"><\/script>`}
              language="html"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              3. Start Using Components
            </h3>
            <CodeBlock
              code={`<html>
  <head>
    <link rel="stylesheet" href="https://cdn.bpi-design.com/bpi-design/latest.css">
  </head>
  <body>
    <bpi-button variant="primary">Click me</bpi-button>
    <bpi-input placeholder="Enter text"></bpi-input>
    <bpi-card>
      <h3>Welcome to BPI</h3>
      <p>Your content here</p>
    </bpi-card>

    <script src="https://cdn.bpi-design.com/bpi-design/latest.js"><\/script>
  </body>
</html>`}
              language="html"
              title="example.html"
            />
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>Tip:</strong> The CDN version includes all components and styles. You can specify a specific version instead of "latest" (e.g., <code className="bg-blue-100 px-1 rounded">v1.0.0</code>) for production environments.
          </p>
        </div>
      </section>

      {/* NPM Installation */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            NPM (Recommended for Modern Projects)
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Perfect for projects using build tools like Webpack, Vite, or Create React App.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              1. Install the Package
            </h3>
            <CodeBlock
              code={`npm install @bpi-design/components @bpi-design/tokens`}
              language="bash"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              2. Import Styles (in your main file)
            </h3>
            <CodeBlock
              code={`import '@bpi-design/components/styles';
import '@bpi-design/tokens/dist/tokens.css';`}
              language="javascript"
              title="main.js or main.ts"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              3. Import Components (React Example)
            </h3>
            <CodeBlock
              code={`import { BpiButton, BpiInput, BpiCard } from '@bpi-design/components/react';

export default function App() {
  return (
    <>
      <BpiButton variant="primary">Click me</BpiButton>
      <BpiInput placeholder="Enter text" />
      <BpiCard>
        <h3>Welcome to BPI</h3>
        <p>Your content here</p>
      </BpiCard>
    </>
  );
}`}
              language="typescript"
              title="App.tsx"
            />
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            <strong>Note:</strong> BPI Design System provides framework-specific entry points for React, Vue, and Angular. Choose the appropriate package for your framework.
          </p>
        </div>
      </section>

      {/* Git Submodule */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            Git Submodule (Advanced)
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            For teams that want direct access to source code and custom builds.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              1. Add the Submodule
            </h3>
            <CodeBlock
              code={`git submodule add https://github.com/bpi-design/design-system.git vendor/bpi-design`}
              language="bash"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              2. Initialize the Submodule
            </h3>
            <CodeBlock
              code={`git submodule init
git submodule update`}
              language="bash"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              3. Build and Use
            </h3>
            <CodeBlock
              code={`cd vendor/bpi-design
npm install
npm run build

# Then import from the local build
import '@bpi-design/components/dist/styles.css';
import { BpiButton } from '@bpi-design/components/dist';`}
              language="bash"
            />
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Verify Installation
        </h2>

        <div className="bg-[var(--color-surface-variant)] p-6 rounded-lg space-y-4">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Check that BPI Design System is properly installed:
          </p>
          <CodeBlock
            code={`<!-- Check if styles are loaded -->
<div style="color: var(--color-text-primary);">
  If you see text, styles are loaded!
</div>

<!-- Check if components are available -->
<bpi-button>If you see a button, components are available!</bpi-button>`}
            language="html"
          />
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-900">
            <strong>Success:</strong> You're all set! You can now start using BPI Design System components in your project.
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Next Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="/getting-started/usage"
            className="bg-[var(--color-surface-variant)] p-6 rounded-lg hover:shadow-md transition-shadow space-y-3 group"
          >
            <h3 className="font-semibold text-[var(--color-primary)] group-hover:underline">
              Usage Guide →
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Learn how to use BPI components in your React, Vue, or HTML projects.
            </p>
          </a>

          <a
            href="/getting-started/customization"
            className="bg-[var(--color-surface-variant)] p-6 rounded-lg hover:shadow-md transition-shadow space-y-3 group"
          >
            <h3 className="font-semibold text-[var(--color-primary)] group-hover:underline">
              Customization →
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Customize colors, spacing, and other tokens to match your brand.
            </p>
          </a>

          <a
            href="/tokens/colors"
            className="bg-[var(--color-surface-variant)] p-6 rounded-lg hover:shadow-md transition-shadow space-y-3 group"
          >
            <h3 className="font-semibold text-[var(--color-primary)] group-hover:underline">
              Design Tokens →
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Explore the complete color, spacing, and typography palette.
            </p>
          </a>

          <a
            href="/components/button"
            className="bg-[var(--color-surface-variant)] p-6 rounded-lg hover:shadow-md transition-shadow space-y-3 group"
          >
            <h3 className="font-semibold text-[var(--color-primary)] group-hover:underline">
              Components →
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Browse all available components and their documentation.
            </p>
          </a>
        </div>
      </section>

      {/* Help Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Need Help?
        </h2>

        <div className="bg-[var(--color-surface-variant)] p-6 rounded-lg space-y-4">
          <div>
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
              Documentation
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-2">
              Check out our comprehensive documentation for detailed guides and API references.
            </p>
            <a
              href="https://docs.bpi-design.com"
              className="text-[var(--color-primary)] hover:underline text-sm"
            >
              Read the docs →
            </a>
          </div>

          <div className="border-t border-[var(--color-border)] pt-4">
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
              Community & Support
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-3">
              Join our community or open an issue on GitHub.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://github.com/bpi-design"
                className="text-[var(--color-primary)] hover:underline text-sm"
              >
                GitHub →
              </a>
              <a
                href="https://discord.gg/bpi-design"
                className="text-[var(--color-primary)] hover:underline text-sm"
              >
                Discord →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
