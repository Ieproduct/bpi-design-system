import { createFileRoute } from '@tanstack/react-router'
import { CodeBlock } from '~/components/CodeBlock'

export const Route = createFileRoute('/getting-started/usage')({
  component: UsagePage,
})

function UsagePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)]">
          Usage
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Learn how to use BPI Design System components in your projects. We support HTML, React, Vue, and more.
        </p>
      </section>

      {/* HTML Usage */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            HTML (Vanilla JavaScript)
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Use BPI components directly in your HTML with web standards.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              Basic Example
            </h3>
            <CodeBlock
              code={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BPI Example</title>
    <link rel="stylesheet" href="https://cdn.bpi-design.com/bpi-design/latest.css">
  </head>
  <body>
    <div style="padding: var(--spacing-6);">
      <h1>Welcome to BPI Design System</h1>

      <bpi-button variant="primary" id="myButton">
        Click me!
      </bpi-button>

      <bpi-input
        type="text"
        placeholder="Enter your name"
        id="nameInput"
      ></bpi-input>

      <bpi-card>
        <h3>Card Title</h3>
        <p>This is a card component with content</p>
      </bpi-card>
    </div>

    <script src="https://cdn.bpi-design.com/bpi-design/latest.js"><\/script>
    <script>
      // Access components via JavaScript
      const button = document.getElementById('myButton');
      button.addEventListener('click', () => {
        console.log('Button clicked!');
      });

      const input = document.getElementById('nameInput');
      input.addEventListener('change', (e) => {
        console.log('Input value:', e.target.value);
      });
    <\/script>
  </body>
</html>`}
              language="html"
              title="index.html"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              Working with Events
            </h3>
            <CodeBlock
              code={`<!-- Button with click handler -->
<bpi-button id="submitBtn" variant="primary">
  Submit
</bpi-button>

<!-- Checkbox with change handler -->
<bpi-checkbox id="termsCheckbox" label="I agree to terms">
</bpi-checkbox>

<!-- Select with change handler -->
<bpi-select id="options">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</bpi-select>

<script>
  document.getElementById('submitBtn').addEventListener('click', () => {
    console.log('Submit clicked');
  });

  document.getElementById('termsCheckbox').addEventListener('change', (e) => {
    console.log('Checkbox checked:', e.target.checked);
  });

  document.getElementById('options').addEventListener('change', (e) => {
    console.log('Selected:', e.target.value);
  });
<\/script>`}
              language="html"
            />
          </div>
        </div>
      </section>

      {/* React Usage */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            React
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Use BPI components in your React applications with TypeScript support.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              Setup & Imports
            </h3>
            <CodeBlock
              code={`// main.tsx or main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import BPI styles
import '@bpi-design/components/styles';
import '@bpi-design/tokens/dist/tokens.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);`}
              language="typescript"
              title="main.tsx"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              Component Usage with React
            </h3>
            <CodeBlock
              code={`import { useState } from 'react';
import {
  BpiButton,
  BpiInput,
  BpiCard,
  BpiCheckbox,
  BpiSelect,
} from '@bpi-design/components/react';

export default function App() {
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <div style={{ padding: 'var(--spacing-6)' }}>
      <h1>Welcome to BPI in React</h1>

      <BpiButton
        variant="primary"
        onClick={() => console.log('Clicked!')}
      >
        Click me!
      </BpiButton>

      <BpiInput
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <BpiCheckbox
        label="I agree to terms"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />

      <BpiSelect
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </BpiSelect>

      <BpiCard>
        <h3>Hello {name || 'Guest'}</h3>
        <p>This is a card component with React</p>
        <p>Checkbox checked: {isChecked ? 'Yes' : 'No'}</p>
        <p>Selected: {selected || 'Nothing'}</p>
      </BpiCard>
    </div>
  );
}`}
              language="typescript"
              title="App.tsx"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              TypeScript Types
            </h3>
            <CodeBlock
              code={`import { BpiButtonProps, BpiInputProps } from '@bpi-design/components/react';

interface MyComponentProps {
  onSubmit: (data: string) => void;
}

export function MyComponent({ onSubmit }: MyComponentProps) {
  const handleClick: BpiButtonProps['onClick'] = () => {
    onSubmit('data');
  };

  return (
    <BpiButton variant="primary" onClick={handleClick}>
      Submit
    </BpiButton>
  );
}`}
              language="typescript"
              title="MyComponent.tsx"
            />
          </div>
        </div>
      </section>

      {/* Vue Usage */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            Vue 3
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Use BPI components in your Vue applications with the Composition API.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              Setup
            </h3>
            <CodeBlock
              code={`// main.ts
import { createApp } from 'vue';
import App from './App.vue';

// Import BPI Vue plugin
import { BPIVue } from '@bpi-design/components/vue';
import '@bpi-design/components/styles';
import '@bpi-design/tokens/dist/tokens.css';

const app = createApp(App);

app.use(BPIVue);
app.mount('#app');`}
              language="typescript"
              title="main.ts"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
              Component Usage
            </h3>
            <CodeBlock
              code={`<template>
  <div style="padding: var(--spacing-6)">
    <h1>Welcome to BPI in Vue</h1>

    <bpi-button
      variant="primary"
      @click="handleClick"
    >
      Click me!
    </bpi-button>

    <bpi-input
      v-model="name"
      placeholder="Enter your name"
    />

    <bpi-checkbox
      v-model="isChecked"
      label="I agree to terms"
    />

    <bpi-select v-model="selected">
      <option value="">Choose an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </bpi-select>

    <bpi-card>
      <h3>Hello {{ name || 'Guest' }}</h3>
      <p>This is a card component with Vue</p>
      <p>Checkbox checked: {{ isChecked ? 'Yes' : 'No' }}</p>
      <p>Selected: {{ selected || 'Nothing' }}</p>
    </bpi-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const isChecked = ref(false);
const selected = ref('');

const handleClick = () => {
  console.log('Button clicked!');
};
<\/script>

<style scoped>
/* Your component styles here */
</style>`}
              language="vue"
              title="App.vue"
            />
          </div>
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
              Component Props
            </h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Use TypeScript for better IDE support</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Check prop documentation for each component</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Use proper variants (primary, secondary, danger)</span>
              </li>
            </ul>
          </div>

          <div className="bg-[var(--color-surface-variant)] p-6 rounded-lg space-y-3">
            <h3 className="font-semibold text-[var(--color-text-primary)]">
              Accessibility
            </h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Always provide labels for form inputs</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Use semantic HTML elements</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Test with keyboard navigation</span>
              </li>
            </ul>
          </div>

          <div className="bg-[var(--color-surface-variant)] p-6 rounded-lg space-y-3">
            <h3 className="font-semibold text-[var(--color-text-primary)]">
              Performance
            </h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Lazy load components when possible</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Use code splitting in modern frameworks</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>Don't load unused components</span>
              </li>
            </ul>
          </div>

          <div className="bg-[var(--color-surface-variant)] p-6 rounded-lg space-y-3">
            <h3 className="font-semibold text-[var(--color-text-primary)]">
              Styling
            </h3>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Use design tokens for custom styling</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Follow the design system color palette</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span>Don't override component styles with !important</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
          Common Patterns
        </h2>

        <div className="space-y-4">
          <div className="bg-[var(--color-surface-variant)] p-6 rounded-lg space-y-3">
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">
              Form Submission (React)
            </h3>
            <CodeBlock
              code={`export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitForm({ email });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <BpiInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        disabled={loading}
      />
      <BpiButton
        variant="primary"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </BpiButton>
    </form>
  );
}`}
              language="typescript"
            />
          </div>

          <div className="bg-[var(--color-surface-variant)] p-6 rounded-lg space-y-3">
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">
              Conditional Rendering
            </h3>
            <CodeBlock
              code={`export function AlertMessage({ message, type = 'info' }) {
  if (!message) return null;

  return (
    <div className={getAlertClass(type)}>
      <bpi-alert variant={type} dismissible>
        {message}
      </bpi-alert>
    </div>
  );
}

function getAlertClass(type: string) {
  const baseClass = 'mb-4 p-4 rounded-lg';
  const variants = {
    success: 'bg-green-50 text-green-900',
    error: 'bg-red-50 text-red-900',
    warning: 'bg-yellow-50 text-yellow-900',
    info: 'bg-blue-50 text-blue-900',
  };
  return \`\${baseClass} \${variants[type]}\`;
}`}
              language="typescript"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
