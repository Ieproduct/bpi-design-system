import { createFileRoute } from '@tanstack/react-router'
import { CodeBlock } from '~/components/CodeBlock'

export const Route = createFileRoute('/getting-started/customization')({
  component: CustomizationPage,
})

function CustomizationPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)]">
          Customization
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Customize BPI Design System to match your brand. Override colors, spacing, typography, and more using CSS custom properties or SCSS variables.
        </p>
      </section>

      {/* Quick Start */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
          Quick Start
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          The easiest way to customize BPI is through CSS custom properties. All design tokens are exposed as CSS variables that you can override.
        </p>

        <CodeBlock
          code={`:root {
  /* Colors */
  --color-primary: #1e40af;
  --color-secondary: #7c3aed;
  --color-accent: #0891b2;

  /* Spacing */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-4: 16px;
  --spacing-6: 24px;

  /* Typography */
  --font-family-display: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-family-body: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-size-base: 16px;
  --font-weight-normal: 400;
  --font-weight-semibold: 600;

  /* Border Radius */
  --radius-md: 6px;
  --radius-lg: 8px;
}`}
          language="css"
          title="styles.css"
        />
      </section>

      {/* CSS Custom Properties */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            CSS Custom Properties
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Override design tokens using CSS custom properties in your root stylesheet.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              Colors
            </h3>
            <CodeBlock
              code={`:root {
  /* Brand Colors */
  --color-primary: #0066cc;    /* Changed from #1e40af */
  --color-secondary: #cc00ff;  /* Changed from #7c3aed */
  --color-accent: #ff6600;     /* Changed from #0891b2 */

  /* Semantic Colors */
  --color-success: #00cc00;
  --color-danger: #ff0000;
  --color-warning: #ffaa00;
  --color-info: #0099ff;

  /* Neutral Colors */
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #666666;
  --color-text-disabled: #999999;
  --color-surface: #ffffff;
  --color-surface-variant: #f5f5f5;
  --color-border: #e0e0e0;
  --color-border-strong: #cccccc;
}`}
              language="css"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              Spacing Scale
            </h3>
            <CodeBlock
              code={`:root {
  /* Modify spacing scale */
  --spacing-1: 6px;    /* Changed from 4px */
  --spacing-2: 12px;   /* Changed from 8px */
  --spacing-3: 18px;   /* Changed from 12px */
  --spacing-4: 24px;   /* Changed from 16px */
  --spacing-6: 36px;   /* Changed from 24px */
  --spacing-8: 48px;   /* Changed from 32px */
}`}
              language="css"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              Typography
            </h3>
            <CodeBlock
              code={`:root {
  /* Font Families */
  --font-family-display: "Poppins", sans-serif;
  --font-family-body: "Roboto", sans-serif;
  --font-family-mono: "Source Code Pro", monospace;

  /* Font Sizes */
  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-base: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 18px;
  --font-size-2xl: 20px;
  --font-size-3xl: 24px;

  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Line Heights */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}`}
              language="css"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              Border Radius & Shadows
            </h3>
            <CodeBlock
              code={`:root {
  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 3px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 9999px;

  /* Box Shadows */
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}`}
              language="css"
            />
          </div>
        </div>
      </section>

      {/* Theme Customization */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            Dark Mode & Multiple Themes
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Create multiple themes by using different CSS variable sets for different selectors.
          </p>
        </div>

        <CodeBlock
          code={`/* Light theme (default) */
:root {
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #666666;
  --color-surface: #ffffff;
  --color-surface-variant: #f5f5f5;
  --color-border: #e0e0e0;
}

/* Dark theme */
[data-theme="dark"] {
  --color-text-primary: #f0f0f0;
  --color-text-secondary: #b0b0b0;
  --color-surface: #1a1a1a;
  --color-surface-variant: #2a2a2a;
  --color-border: #404040;
}

/* High contrast theme */
[data-theme="high-contrast"] {
  --color-text-primary: #000000;
  --color-text-secondary: #000000;
  --color-surface: #ffffff;
  --color-border: #000000;
}

/* Implementation in HTML */
<html data-theme="light">
  <!-- Content -->
</html>

<!-- JavaScript toggle -->
<script>
  function toggleTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Apply saved theme on load
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
<\/script>`}
          language="css"
          title="themes.css & theme.js"
        />
      </section>

      {/* SCSS Variables */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            SCSS Variables (Advanced)
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            If you use SCSS, you can also customize tokens using SCSS variables for compile-time customization.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              Define Custom Variables
            </h3>
            <CodeBlock
              code={`// _custom-tokens.scss
$primary-color: #0066cc;
$secondary-color: #cc00ff;
$accent-color: #ff6600;

$spacing-base: 8px;
$spacing-unit: 4px;

$border-radius: 6px;
$border-radius-large: 8px;

$font-family-primary: "Inter", sans-serif;
$font-family-mono: "JetBrains Mono", monospace;

// Export as CSS custom properties
:root {
  --color-primary: #{$primary-color};
  --color-secondary: #{$secondary-color};
  --color-accent: #{$accent-color};
  --spacing-base: #{$spacing-base};
  --font-family-primary: #{$font-family-primary};
}`}
              language="scss"
              title="_custom-tokens.scss"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              Use in Components
            </h3>
            <CodeBlock
              code={`// _button.scss
@import 'custom-tokens';

.bpi-button {
  padding: $spacing-base;
  border-radius: $border-radius;
  background-color: $primary-color;
  font-family: $font-family-primary;

  &:hover {
    background-color: darken($primary-color, 10%);
  }

  &.secondary {
    background-color: $secondary-color;

    &:hover {
      background-color: darken($secondary-color, 10%);
    }
  }
}`}
              language="scss"
              title="_button.scss"
            />
          </div>
        </div>
      </section>

      {/* Responding to User Preferences */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            Respect User Preferences
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Auto-detect and respect user system preferences for dark mode and color schemes.
          </p>
        </div>

        <CodeBlock
          code={`/* Auto-detect dark mode from system preferences */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text-primary: #f0f0f0;
    --color-text-secondary: #b0b0b0;
    --color-surface: #1a1a1a;
    --color-surface-variant: #2a2a2a;
    --color-border: #404040;
  }
}

/* Respect reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast for accessibility */
@media (prefers-contrast: more) {
  :root {
    --color-border: #000000;
    --font-weight-normal: 500;
  }
}`}
          language="css"
        />
      </section>

      {/* Component-Level Customization */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            Component-Level Customization
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Override styles for specific components using CSS scoping or CSS-in-JS.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              CSS Scoping
            </h3>
            <CodeBlock
              code={`.my-form {
  /* Override BPI button styling within this form */
  --color-primary: #0066cc;
}

.my-form bpi-button {
  width: 100%;
  padding: var(--spacing-4);
}

.my-form bpi-input {
  margin-bottom: var(--spacing-3);
}

.my-form bpi-card {
  border: 1px solid var(--color-border-strong);
}`}
              language="css"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              CSS-in-JS (React)
            </h3>
            <CodeBlock
              code={`import styled from 'styled-components';

const CustomButton = styled.button\`
  --color-primary: #0066cc;
  --color-secondary: #cc00ff;

  background-color: var(--color-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);

  &:hover {
    opacity: 0.9;
  }
\`;

export function MyComponent() {
  return (
    <CustomButton>
      Styled Button
    </CustomButton>
  );
}`}
              language="typescript"
            />
          </div>
        </div>
      </section>

      {/* Configuration Files */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            Tailwind Configuration
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            If using Tailwind CSS v4 with BPI, customize the theme configuration.
          </p>
        </div>

        <CodeBlock
          code={`/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
      },
      spacing: {
        1: 'var(--spacing-1)',
        2: 'var(--spacing-2)',
        3: 'var(--spacing-3)',
        4: 'var(--spacing-4)',
        6: 'var(--spacing-6)',
        8: 'var(--spacing-8)',
      },
      fontFamily: {
        display: 'var(--font-family-display)',
        body: 'var(--font-family-body)',
        mono: 'var(--font-family-mono)',
      },
      borderRadius: {
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        full: 'var(--radius-full)',
      },
    },
  },
  plugins: [],
};`}
          language="javascript"
          title="tailwind.config.js"
        />
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
                <span>Use CSS variables for runtime customization</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Maintain sufficient color contrast</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Test customizations across browsers</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Document your custom tokens</span>
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
                <span>Override component styles with !important</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>Remove accessibility features</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>Use arbitrary spacing and sizing</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>Break the design system consistency</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Need Help?
        </h2>

        <div className="bg-[var(--color-surface-variant)] p-6 rounded-lg space-y-4">
          <p className="text-[var(--color-text-secondary)]">
            Check out the complete list of CSS variables and their default values in the Design Tokens section.
          </p>
          <a
            href="/tokens/colors"
            className="inline-block text-[var(--color-primary)] hover:underline font-semibold"
          >
            View all design tokens →
          </a>
        </div>
      </section>
    </div>
  )
}
