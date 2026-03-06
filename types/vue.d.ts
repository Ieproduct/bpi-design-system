// ============================================================
// BPI Design System — Vue / Volar Type Definitions
// Usage: import '@bpi/design-system/vue'
// ============================================================

import type {
  ButtonVariant,
  ButtonSize,
  InputType,
  InputSize,
  BadgeVariant,
  IconSize,
  CardVariant,
  BpiInputEvent,
  BpiChangeEvent,
  BpiBlurEvent,
  BpiTableSortEvent,
  BpiTableSelectEvent,
  BpiPageChangeEvent,
} from './index';

declare module 'vue' {
  export interface GlobalComponents {
    'bpi-button': {
      variant?: ButtonVariant;
      size?: ButtonSize;
      disabled?: boolean;
      loading?: boolean;
      block?: boolean;
      type?: 'button' | 'submit' | 'reset';
    };

    'bpi-input': {
      type?: InputType;
      size?: InputSize;
      placeholder?: string;
      value?: string;
      disabled?: boolean;
      error?: string;
      hint?: string;
      name?: string;
      required?: boolean;
      'onBpi-input'?: (event: BpiInputEvent) => void;
      'onBpi-change'?: (event: BpiChangeEvent) => void;
      'onBpi-blur'?: (event: BpiBlurEvent) => void;
    };

    'bpi-badge': {
      variant?: BadgeVariant;
      dot?: boolean;
    };

    'bpi-icon': {
      name?: string;
      size?: IconSize;
    };

    'bpi-form-field': {
      label?: string;
      required?: boolean;
      error?: string;
      hint?: string;
    };

    'bpi-search-bar': {
      placeholder?: string;
      value?: string;
      'onBpi-input'?: (event: BpiInputEvent) => void;
    };

    'bpi-card': {
      title?: string;
      variant?: CardVariant;
    };

    'bpi-data-table': {
      columns?: string;
      striped?: boolean;
      page?: number;
      'page-size'?: number;
      total?: number;
      'empty-text'?: string;
      'onBpi-sort'?: (event: BpiTableSortEvent) => void;
      'onBpi-table-select'?: (event: BpiTableSelectEvent) => void;
      'onBpi-page-change'?: (event: BpiPageChangeEvent) => void;
    };

    'bpi-navbar': {
      brand?: string;
    };

    'bpi-sidebar': {
      collapsed?: boolean;
    };
  }
}

// Extend HTML attribute types for direct template usage
declare module '@vue/runtime-dom' {
  interface HTMLAttributes {
    'bpi-input'?: string;
    'bpi-change'?: string;
    'bpi-blur'?: string;
    'bpi-sort'?: string;
    'bpi-page-change'?: string;
  }
}

export {};
