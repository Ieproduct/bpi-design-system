import React from 'react';
import {
  components,
  ComponentMetadata,
  ComponentProp,
  ComponentEvent,
  ComponentSlot,
} from '~/data/components';
import LiveDemo from './LiveDemo';
import PropsTable from './PropsTable';
import CodeBlock from './CodeBlock';

interface ComponentPageProps {
  componentId: string;
}

export const ComponentPage: React.FC<ComponentPageProps> = ({ componentId }) => {
  const component = components.find((c) => c.id === componentId);

  if (!component) {
    return (
      <div className="p-8">
        <p className="text-[var(--color-text-secondary)]">
          Component not found: {componentId}
        </p>
      </div>
    );
  }

  const cdnCode = `<!-- Add to your HTML <head> -->
<link rel="stylesheet" href="https://ieproduct.github.io/bpi-design-system/bpi.min.css">
<script src="https://ieproduct.github.io/bpi-design-system/bpi.iife.js"><\/script>`;

  const importCode = `import { ${component.name} } from '@bpi-design/components';`;

  const propDefList: Array<{
    name: string;
    type: string;
    default?: string;
    required?: boolean;
    description: string;
  }> = component.props.map((prop) => ({
    name: prop.name,
    type: prop.type,
    default: prop.default !== undefined ? String(prop.default) : undefined,
    required: prop.required,
    description: prop.description,
  }));

  const eventDefList: Array<{
    name: string;
    type: string;
    default?: string;
    required?: boolean;
    description: string;
  }> = component.events.map((event) => ({
    name: event.name,
    type: event.detail,
    description: event.description,
  }));

  const slotDefList: Array<{
    name: string;
    type: string;
    default?: string;
    required?: boolean;
    description: string;
  }> = component.slots.map((slot) => ({
    name: slot.name,
    type: 'slot',
    description: slot.description,
  }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4 uppercase tracking-wide">
          {component.category}
        </div>
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-2">
          {component.name}
        </h1>
        <code className="text-sm text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)] px-2 py-1 rounded font-mono">
          &lt;{component.tag}&gt;
        </code>
        <p className="text-lg text-[var(--color-text-secondary)] mt-4">
          {component.description}
        </p>
      </div>

      {/* Installation */}
      <section className="mb-12">
        <h2 id="installation" className="text-2xl font-bold text-[var(--color-text)] mb-4 scroll-mt-20">
          Installation
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">
              CDN
            </h3>
            <CodeBlock code={cdnCode} language="html" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">
              NPM Package
            </h3>
            <CodeBlock code={importCode} language="tsx" />
          </div>
        </div>
      </section>

      {/* Examples */}
      {component.examples.length > 0 && (
        <section className="mb-12">
          <h2 id="examples" className="text-2xl font-bold text-[var(--color-text)] mb-6 scroll-mt-20">
            Examples
          </h2>
          <div className="space-y-8">
            {component.examples.map((example, index) => (
              <LiveDemo
                key={index}
                title={example.title}
                description={example.description}
                code={example.code}
              />
            ))}
          </div>
        </section>
      )}

      {/* Props */}
      {component.props.length > 0 && (
        <section className="mb-12">
          <h2 id="props" className="text-2xl font-bold text-[var(--color-text)] mb-6 scroll-mt-20">
            Props
          </h2>
          <PropsTable props={propDefList} title="Component Props" />
        </section>
      )}

      {/* Events */}
      {component.events.length > 0 && (
        <section className="mb-12">
          <h2 id="events" className="text-2xl font-bold text-[var(--color-text)] mb-6 scroll-mt-20">
            Events
          </h2>
          <PropsTable props={eventDefList} title="Component Events" />
        </section>
      )}

      {/* Slots */}
      {component.slots.length > 0 && (
        <section className="mb-12">
          <h2 id="slots" className="text-2xl font-bold text-[var(--color-text)] mb-6 scroll-mt-20">
            Slots
          </h2>
          <PropsTable props={slotDefList} title="Component Slots" />
        </section>
      )}

      {/* Browser Support */}
      <section className="mt-16 pt-8 border-t border-[var(--color-border)]">
        <h2 className="text-lg font-bold text-[var(--color-text)] mb-4">
          Browser Support
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)]">
          This component supports all modern browsers. For web component support
          in older browsers, consider using polyfills.
        </p>
      </section>
    </div>
  );
};

export default ComponentPage;
