import React from 'react';
import {
  components,
  ComponentMetadata,
  ComponentProp,
  ComponentEvent,
  ComponentSlot,
  CssClassRef,
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

  const cdnCssOnly = `<!-- CSS-only (works with any framework) -->
<link rel="stylesheet" href="https://ieproduct.github.io/bpi-design-system/bpi.min.css">`;

  const cdnCode = `<!-- CSS + Web Components -->
<link rel="stylesheet" href="https://ieproduct.github.io/bpi-design-system/bpi.min.css">
<script src="https://ieproduct.github.io/bpi-design-system/bpi.iife.js"><\/script>`;

  const importCode = `import { ${component.name} } from '@bpi-design/components';`;

  const propDefList = component.props.map((prop) => ({
    name: prop.name,
    type: prop.type,
    default: prop.default !== undefined ? String(prop.default) : undefined,
    required: prop.required,
    description: prop.description,
  }));

  const eventDefList = component.events.map((event) => ({
    name: event.name,
    type: event.detail,
    description: event.description,
  }));

  const slotDefList = component.slots.map((slot) => ({
    name: slot.name,
    type: 'slot',
    description: slot.description,
  }));

  const cssClassDefList = (component.cssClasses || []).map((cls) => ({
    name: cls.name,
    type: 'class',
    description: cls.description,
  }));

  const hasCssExamples = component.cssExamples && component.cssExamples.length > 0;
  const hasCssClasses = component.cssClasses && component.cssClasses.length > 0;

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
        <div className="flex gap-2 flex-wrap mb-4">
          <code className="text-sm text-[var(--color-text-secondary)] bg-[var(--color-surface-variant)] px-2 py-1 rounded font-mono">
            &lt;{component.tag}&gt;
          </code>
          {hasCssClasses && (
            <code className="text-sm text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded font-mono">
              CSS Classes
            </code>
          )}
        </div>
        <p className="text-lg text-[var(--color-text-secondary)]">
          {component.description}
        </p>
      </div>

      {/* Installation */}
      <section className="mb-12">
        <h2 id="installation" className="text-2xl font-bold text-[var(--color-text)] mb-4 scroll-mt-20">
          Installation
        </h2>
        <div className="space-y-4">
          {hasCssExamples && (
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">
                CSS Only (Recommended)
              </h3>
              <CodeBlock code={cdnCssOnly} language="html" />
            </div>
          )}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">
              {hasCssExamples ? 'CSS + Web Components' : 'CDN'}
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

      {/* CSS Examples (Pure HTML — no JS needed) */}
      {hasCssExamples && (
        <section className="mb-12">
          <h2 id="css-examples" className="text-2xl font-bold text-[var(--color-text)] mb-2 scroll-mt-20">
            CSS Examples
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6">
            Pure HTML with CSS classes — works with any framework. No JavaScript needed.
          </p>
          <div className="space-y-8">
            {component.cssExamples!.map((example, index) => (
              <LiveDemo
                key={`css-${index}`}
                title={example.title}
                description={example.description}
                code={example.code}
                rawHtml
              />
            ))}
          </div>
        </section>
      )}

      {/* Web Component Examples */}
      {component.examples.length > 0 && (
        <section className="mb-12">
          <h2 id="examples" className="text-2xl font-bold text-[var(--color-text)] mb-2 scroll-mt-20">
            {hasCssExamples ? 'Web Component Examples' : 'Examples'}
          </h2>
          {hasCssExamples && (
            <p className="text-sm text-[var(--color-text-secondary)] mb-6">
              Using the &lt;{component.tag}&gt; web component with attributes.
            </p>
          )}
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

      {/* CSS Classes Reference */}
      {hasCssClasses && (
        <section className="mb-12">
          <h2 id="css-classes" className="text-2xl font-bold text-[var(--color-text)] mb-6 scroll-mt-20">
            CSS Classes
          </h2>
          <PropsTable props={cssClassDefList} title="Available CSS Classes" />
        </section>
      )}

      {/* Props (Web Component) */}
      {component.props.length > 0 && (
        <section className="mb-12">
          <h2 id="props" className="text-2xl font-bold text-[var(--color-text)] mb-6 scroll-mt-20">
            {hasCssClasses ? 'Web Component Props' : 'Props'}
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
          {hasCssExamples
            ? 'CSS classes work in all modern browsers. Web components require ES2020+ support; consider polyfills for older browsers.'
            : 'This component supports all modern browsers. For web component support in older browsers, consider using polyfills.'}
        </p>
      </section>
    </div>
  );
};

export default ComponentPage;
