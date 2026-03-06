// ============================================================
// BPI Design System — React JSX Type Definitions
// Usage: /// <reference types="@bpi/design-system/react" />
// ============================================================

import type {
  ButtonVariant,
  ButtonSize,
  InputType,
  InputSize,
  BadgeVariant,
  IconSize,
  CardVariant,
  BpiInputEventDetail,
  BpiChangeEventDetail,
  BpiBlurEventDetail,
  BpiTableSortEventDetail,
  BpiTableSelectEventDetail,
  BpiPageChangeEventDetail,
} from './index';

type CustomEventHandler<T> = (event: CustomEvent<T>) => void;

interface BpiBaseProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  slot?: string;
  ref?: React.Ref<HTMLElement>;
  key?: React.Key;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  onBlur?: React.FocusEventHandler<HTMLElement>;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bpi-button': BpiBaseProps & {
        variant?: ButtonVariant;
        size?: ButtonSize;
        disabled?: boolean;
        loading?: boolean;
        block?: boolean;
        type?: 'button' | 'submit' | 'reset';
      };

      'bpi-input': BpiBaseProps & {
        type?: InputType;
        size?: InputSize;
        placeholder?: string;
        value?: string;
        disabled?: boolean;
        error?: string;
        hint?: string;
        name?: string;
        required?: boolean;
        'onBpi-input'?: CustomEventHandler<BpiInputEventDetail>;
        'onBpi-change'?: CustomEventHandler<BpiChangeEventDetail>;
        'onBpi-blur'?: CustomEventHandler<BpiBlurEventDetail>;
      };

      'bpi-badge': BpiBaseProps & {
        variant?: BadgeVariant;
        dot?: boolean;
      };

      'bpi-icon': BpiBaseProps & {
        name?: string;
        size?: IconSize;
      };

      'bpi-form-field': BpiBaseProps & {
        label?: string;
        required?: boolean;
        error?: string;
        hint?: string;
      };

      'bpi-search-bar': BpiBaseProps & {
        placeholder?: string;
        value?: string;
        'onBpi-input'?: CustomEventHandler<BpiInputEventDetail>;
      };

      'bpi-card': BpiBaseProps & {
        title?: string;
        variant?: CardVariant;
      };

      'bpi-data-table': BpiBaseProps & {
        columns?: string;
        striped?: boolean;
        page?: number;
        'page-size'?: number;
        total?: number;
        'empty-text'?: string;
        'onBpi-sort'?: CustomEventHandler<BpiTableSortEventDetail>;
        'onBpi-table-select'?: CustomEventHandler<BpiTableSelectEventDetail>;
        'onBpi-page-change'?: CustomEventHandler<BpiPageChangeEventDetail>;
      };

      'bpi-navbar': BpiBaseProps & {
        brand?: string;
      };

      'bpi-sidebar': BpiBaseProps & {
        collapsed?: boolean;
      };
    }
  }
}

export {};
