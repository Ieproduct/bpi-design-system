export interface ComponentProp {
  name: string;
  type: string;
  default?: string | number | boolean;
  required?: boolean;
  description: string;
}

export interface ComponentEvent {
  name: string;
  detail: string;
  description: string;
}

export interface ComponentSlot {
  name: string;
  description: string;
}

export interface ComponentExample {
  title: string;
  description: string;
  code: string;
}

export interface ComponentMetadata {
  id: string;
  name: string;
  tag: string;
  category: 'atom' | 'molecule' | 'organism';
  description: string;
  props: ComponentProp[];
  events: ComponentEvent[];
  slots: ComponentSlot[];
  examples: ComponentExample[];
}

export const components: ComponentMetadata[] = [
  {
    id: 'button',
    name: 'Button',
    tag: 'bpi-button',
    category: 'atom',
    description: 'A versatile button component for triggering actions with multiple variants, sizes, and states. Supports loading states, disabled states, and can be rendered as full-width blocks. Essential for interactive user interfaces.',
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'danger' | 'outline' | 'ghost' | 'success'",
        default: "'primary'",
        required: false,
        description: 'Visual style variant of the button',
      },
      {
        name: 'size',
        type: "'xs' | 'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Size of the button',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Disables the button and prevents interaction',
      },
      {
        name: 'loading',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Shows loading state with spinner',
      },
      {
        name: 'block',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Makes button full width',
      },
      {
        name: 'type',
        type: "'button' | 'submit' | 'reset'",
        default: "'button'",
        required: false,
        description: 'HTML button type',
      },
    ],
    events: [
      {
        name: 'click',
        detail: 'MouseEvent',
        description: 'Emitted when button is clicked',
      },
    ],
    slots: [
      {
        name: 'default',
        description: 'Button content (text or HTML)',
      },
    ],
    examples: [
      {
        title: 'Basic Variants',
        description: 'All six button variants showcasing different visual styles and use cases for various actions.',
        code: `<div style="display: flex; gap: 8px; flex-wrap: wrap;">
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="success">Success</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
</div>`,
      },
      {
        title: 'Sizes',
        description: 'Buttons in all available sizes from extra small to large for different layout contexts.',
        code: `<div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
  <Button size="xs">Extra Small</Button>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>`,
      },
      {
        title: 'Loading State',
        description: 'Button with loading spinner indicating an ongoing async operation. The button remains disabled during loading.',
        code: `<Button loading>Submitting...</Button>`,
      },
      {
        title: 'Block Button',
        description: 'Full-width button that stretches to fill its container, useful for mobile layouts and prominent actions.',
        code: `<Button block variant="primary">Sign Up Now</Button>`,
      },
      {
        title: 'Disabled States',
        description: 'Buttons in disabled state are visually dimmed and do not respond to user interaction.',
        code: `<div style="display: flex; gap: 8px; flex-wrap: wrap;">
  <Button disabled>Disabled Primary</Button>
  <Button variant="secondary" disabled>Disabled Secondary</Button>
  <Button variant="outline" disabled>Disabled Outline</Button>
</div>`,
      },
      {
        title: 'Icon with Button',
        description: 'Buttons with icon elements displayed before or after the text label.',
        code: `<div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
  <Button variant="primary">
    <Icon name="download" size="sm" style="margin-right: 4px;" />
    Download
  </Button>
  <Button variant="secondary">
    <Icon name="share" size="sm" style="margin-right: 4px;" />
    Share
  </Button>
  <Button variant="ghost">
    <Icon name="delete" size="sm" />
  </Button>
</div>`,
      },
      {
        title: 'Button Group Pattern',
        description: 'Multiple buttons grouped together for related actions, commonly used in toolbars or action bars.',
        code: `<div style="display: flex; border: 1px solid #e0e0e0; border-radius: 4px; overflow: hidden;">
  <Button variant="outline" style="border-radius: 0; border-right: 1px solid #e0e0e0;">
    <Icon name="align-left" size="sm" />
  </Button>
  <Button variant="outline" style="border-radius: 0; border-right: 1px solid #e0e0e0;">
    <Icon name="align-center" size="sm" />
  </Button>
  <Button variant="outline" style="border-radius: 0;">
    <Icon name="align-right" size="sm" />
  </Button>
</div>`,
      },
    ],
  },
  {
    id: 'input',
    name: 'Input',
    tag: 'bpi-input',
    category: 'atom',
    description: 'A basic input field for text entry with support for validation states, sizes, and different input types. Provides visual feedback for user input and validation status.',
    props: [
      {
        name: 'type',
        type: "'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'",
        default: "'text'",
        required: false,
        description: 'HTML input type',
      },
      {
        name: 'placeholder',
        type: 'string',
        required: false,
        description: 'Placeholder text when input is empty',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Disables the input field',
      },
      {
        name: 'readonly',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Makes input read-only',
      },
      {
        name: 'value',
        type: 'string',
        required: false,
        description: 'Current input value',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Size of the input field',
      },
      {
        name: 'error',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Shows error state styling',
      },
    ],
    events: [
      {
        name: 'input',
        detail: 'Event',
        description: 'Emitted when value changes',
      },
      {
        name: 'change',
        detail: 'Event',
        description: 'Emitted when input loses focus',
      },
    ],
    slots: [],
    examples: [
      {
        title: 'Basic Input',
        description: 'A simple text input field ready for user text entry.',
        code: `<Input placeholder="Enter your name" />`,
      },
      {
        title: 'Input Sizes',
        description: 'Inputs available in three sizes for different layout contexts and visual hierarchy.',
        code: `<div style="display: flex; flex-direction: column; gap: 12px;">
  <Input size="sm" placeholder="Small input" />
  <Input size="md" placeholder="Medium input" />
  <Input size="lg" placeholder="Large input" />
</div>`,
      },
      {
        title: 'Input with Validation',
        description: 'Shows error state styling to indicate invalid input that requires user correction.',
        code: `<div style="display: flex; flex-direction: column; gap: 8px;">
  <Input placeholder="Valid input" />
  <Input error placeholder="Invalid email" />
</div>`,
      },
      {
        title: 'Disabled Input',
        description: 'Disabled inputs are not editable and appear visually dimmed to indicate they cannot be interacted with.',
        code: `<Input disabled value="Disabled input" />`,
      },
      {
        title: 'Password Input',
        description: 'Specialized input type that masks character input for secure password entry.',
        code: `<Input type="password" placeholder="Enter password" />`,
      },
      {
        title: 'Input with Hint',
        description: 'Input with supporting text below to provide guidance, constraints, or helper information.',
        code: `<div style="display: flex; flex-direction: column; gap: 4px;">
  <Input type="email" placeholder="your@email.com" />
  <span style="font-size: 12px; color: #666;">We'll use this to send account updates</span>
</div>`,
      },
    ],
  },
  {
    id: 'badge',
    name: 'Badge',
    tag: 'bpi-badge',
    category: 'atom',
    description: 'A compact element for displaying labels, counts, or status indicators. Supports multiple color variants and can be used as a dot badge or with content.',
    props: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'",
        default: "'primary'",
        required: false,
        description: 'Color variant of the badge',
      },
      {
        name: 'dot',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Shows badge as a small dot',
      },
      {
        name: 'content',
        type: 'string | number',
        required: false,
        description: 'Badge content or count',
      },
    ],
    events: [],
    slots: [
      {
        name: 'default',
        description: 'Badge content',
      },
    ],
    examples: [
      {
        title: 'Basic Badge',
        description: 'Standard badge displaying text or numeric content.',
        code: `<Badge>New</Badge>`,
      },
      {
        title: 'Color Variants',
        description: 'Badges in different color variants for various semantic meanings and statuses.',
        code: `<div style="display: flex; gap: 8px; flex-wrap: wrap;">
  <Badge variant="primary">Primary</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="danger">Danger</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="info">Info</Badge>
</div>`,
      },
      {
        title: 'Dot Badge',
        description: 'Compact dot-style badge used as status indicators without text content.',
        code: `<div style="display: flex; gap: 12px; align-items: center;">
  <span>Online Status</span>
  <Badge dot variant="success" />
  <span>Offline Status</span>
  <Badge dot variant="danger" />
</div>`,
      },
      {
        title: 'Badge with Content',
        description: 'Badge displaying numeric content, commonly used for notification counts or message indicators.',
        code: `<div style="display: flex; gap: 16px; align-items: center;">
  <div style="position: relative; display: inline-block;">
    <Icon name="bell" size="lg" />
    <Badge content="5" variant="danger" style="position: absolute; top: -8px; right: -8px;" />
  </div>
  <div style="position: relative; display: inline-block;">
    <Icon name="mail" size="lg" />
    <Badge content="12" variant="warning" style="position: absolute; top: -8px; right: -8px;" />
  </div>
</div>`,
      },
    ],
  },
  {
    id: 'icon',
    name: 'Icon',
    tag: 'bpi-icon',
    category: 'atom',
    description: 'A flexible icon component supporting multiple sizes and colors. Integrates with icon libraries and can be used standalone or inline with other components.',
    props: [
      {
        name: 'name',
        type: 'string',
        required: true,
        description: 'Icon name or identifier',
      },
      {
        name: 'size',
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        required: false,
        description: 'Icon size',
      },
      {
        name: 'color',
        type: 'string',
        required: false,
        description: 'Icon color (hex, rgb, or color name)',
      },
    ],
    events: [],
    slots: [],
    examples: [
      {
        title: 'Basic Icons',
        description: 'Common icons in their default medium size and color.',
        code: `<div style="display: flex; gap: 16px; align-items: center;">
  <Icon name="home" />
  <Icon name="settings" />
  <Icon name="user" />
  <Icon name="check" />
  <Icon name="close" />
  <Icon name="delete" />
</div>`,
      },
      {
        title: 'Icon Sizes',
        description: 'Icons in all available sizes from extra small to extra large.',
        code: `<div style="display: flex; gap: 16px; align-items: center;">
  <Icon name="star" size="xs" />
  <Icon name="star" size="sm" />
  <Icon name="star" size="md" />
  <Icon name="star" size="lg" />
  <Icon name="star" size="xl" />
</div>`,
      },
      {
        title: 'Icon in Context',
        description: 'Icons used inline with other components and text for visual enhancement and clarity.',
        code: `<div style="display: flex; flex-direction: column; gap: 8px;">
  <div style="display: flex; align-items: center; gap: 8px;">
    <Icon name="location" color="#4CAF50" />
    <span>123 Bangkok Street, Thailand</span>
  </div>
  <div style="display: flex; align-items: center; gap: 8px;">
    <Icon name="phone" color="#2196F3" />
    <span>+66 2 123 4567</span>
  </div>
  <div style="display: flex; align-items: center; gap: 8px;">
    <Icon name="email" color="#FF9800" />
    <span>contact@example.co.th</span>
  </div>
</div>`,
      },
    ],
  },
  {
    id: 'stack',
    name: 'Stack',
    tag: 'bpi-stack',
    category: 'atom',
    description: 'A layout component for arranging children in a flex container with consistent spacing and direction. Simplifies responsive layouts without manual flex styling.',
    props: [
      {
        name: 'direction',
        type: "'row' | 'column'",
        default: "'column'",
        required: false,
        description: 'Stack direction (flex-direction)',
      },
      {
        name: 'spacing',
        type: 'number | string',
        default: '8',
        required: false,
        description: 'Gap between items in pixels',
      },
      {
        name: 'align',
        type: "'start' | 'center' | 'end' | 'stretch'",
        default: "'stretch'",
        required: false,
        description: 'Align items horizontally',
      },
      {
        name: 'justify',
        type: "'start' | 'center' | 'end' | 'space-between' | 'space-around'",
        default: "'start'",
        required: false,
        description: 'Justify content along main axis',
      },
      {
        name: 'divider',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Show divider between items',
      },
    ],
    events: [],
    slots: [
      {
        name: 'default',
        description: 'Stack content (child elements)',
      },
    ],
    examples: [
      {
        title: 'Basic Stack',
        description: 'Vertical stack of elements with consistent spacing automatically applied.',
        code: `<Stack spacing={16}>
  <div style="padding: 12px; background: #f5f5f5; border-radius: 4px;">Item 1</div>
  <div style="padding: 12px; background: #f5f5f5; border-radius: 4px;">Item 2</div>
  <div style="padding: 12px; background: #f5f5f5; border-radius: 4px;">Item 3</div>
</Stack>`,
      },
      {
        title: 'Direction (Row)',
        description: 'Horizontal stack arrangement with items flowing left to right.',
        code: `<Stack direction="row" spacing={12}>
  <Button variant="outline">Save</Button>
  <Button variant="outline">Cancel</Button>
  <Button variant="primary">Submit</Button>
</Stack>`,
      },
      {
        title: 'Spacing',
        description: 'Various spacing values demonstrating gap control between stacked items.',
        code: `<div style="display: flex; flex-direction: column; gap: 24px;">
  <div>
    <p style="font-size: 12px; color: #666; margin-bottom: 8px;">Spacing: 4px</p>
    <Stack spacing={4}>
      <div style="padding: 8px; background: #e0e0e0;">Item</div>
      <div style="padding: 8px; background: #e0e0e0;">Item</div>
      <div style="padding: 8px; background: #e0e0e0;">Item</div>
    </Stack>
  </div>
  <div>
    <p style="font-size: 12px; color: #666; margin-bottom: 8px;">Spacing: 16px</p>
    <Stack spacing={16}>
      <div style="padding: 8px; background: #e0e0e0;">Item</div>
      <div style="padding: 8px; background: #e0e0e0;">Item</div>
      <div style="padding: 8px; background: #e0e0e0;">Item</div>
    </Stack>
  </div>
</div>`,
      },
      {
        title: 'Dividers',
        description: 'Stack with visual separators between items for visual organization.',
        code: `<Stack spacing={16} divider>
  <div style="padding: 12px 0;">Menu Item 1</div>
  <div style="padding: 12px 0;">Menu Item 2</div>
  <div style="padding: 12px 0;">Menu Item 3</div>
  <div style="padding: 12px 0;">Menu Item 4</div>
</Stack>`,
      },
      {
        title: 'Alignment',
        description: 'Demonstrating different alignment values for horizontal and vertical centering.',
        code: `<div style="display: flex; flex-direction: column; gap: 20px;">
  <div>
    <p style="font-size: 12px; color: #666; margin-bottom: 8px;">align="start"</p>
    <Stack direction="row" spacing={12} align="start" style="height: 80px; background: #f5f5f5; padding: 8px;">
      <div style="padding: 8px; background: white;">Short</div>
      <div style="padding: 8px; background: white;">Taller item here</div>
      <div style="padding: 8px; background: white;">Med</div>
    </Stack>
  </div>
  <div>
    <p style="font-size: 12px; color: #666; margin-bottom: 8px;">align="center"</p>
    <Stack direction="row" spacing={12} align="center" style="height: 80px; background: #f5f5f5; padding: 8px;">
      <div style="padding: 8px; background: white;">Short</div>
      <div style="padding: 8px; background: white;">Taller item here</div>
      <div style="padding: 8px; background: white;">Med</div>
    </Stack>
  </div>
</div>`,
      },
      {
        title: 'Nested Stacks',
        description: 'Combining vertical and horizontal stacks for complex, responsive layouts.',
        code: `<Stack spacing={16}>
  <div style="padding: 16px; background: #2196F3; color: white; border-radius: 4px;">Header</div>
  <Stack direction="row" spacing={16}>
    <div style="flex: 0 0 20%; padding: 16px; background: #f5f5f5; border-radius: 4px;">Sidebar</div>
    <div style="flex: 1; padding: 16px; background: #f5f5f5; border-radius: 4px;">Main Content</div>
  </Stack>
  <div style="padding: 16px; background: #757575; color: white; border-radius: 4px;">Footer</div>
</Stack>`,
      },
    ],
  },
  {
    id: 'box',
    name: 'Box',
    tag: 'bpi-box',
    category: 'atom',
    description: 'A fundamental layout component providing styling support for spacing, display, and flex properties. Use as a wrapper for building consistent layouts.',
    props: [
      {
        name: 'display',
        type: 'string',
        required: false,
        description: 'CSS display property',
      },
      {
        name: 'padding',
        type: 'string | number',
        required: false,
        description: 'Padding shorthand (e.g., "16px" or "8px 16px")',
      },
      {
        name: 'margin',
        type: 'string | number',
        required: false,
        description: 'Margin shorthand',
      },
      {
        name: 'flexDirection',
        type: 'string',
        required: false,
        description: 'Flex direction when display is flex',
      },
      {
        name: 'gap',
        type: 'string | number',
        required: false,
        description: 'Gap between flex items',
      },
    ],
    events: [],
    slots: [
      {
        name: 'default',
        description: 'Box content',
      },
    ],
    examples: [
      {
        title: 'Basic Box',
        description: 'Simple box container with basic styling and padding.',
        code: `<Box padding="16px" style="background: #f5f5f5; border-radius: 8px;">
  <p>Basic box with padding and background</p>
</Box>`,
      },
      {
        title: 'Spacing & Padding',
        description: 'Box with various padding and margin configurations.',
        code: `<div style="display: flex; flex-direction: column; gap: 16px;">
  <Box padding="8px" style="background: #e8f5e9; border-left: 4px solid #4CAF50;">
    <p style="margin: 0;">Compact padding</p>
  </Box>
  <Box padding="16px" style="background: #e3f2fd; border-left: 4px solid #2196F3;">
    <p style="margin: 0;">Standard padding</p>
  </Box>
  <Box padding="24px" style="background: #f3e5f5; border-left: 4px solid #9C27B0;">
    <p style="margin: 0;">Generous padding</p>
  </Box>
</div>`,
      },
      {
        title: 'Flex Layout',
        description: 'Box using flex display for responsive alignment and distribution.',
        code: `<Box display="flex" gap="12px" style="background: #fafafa; padding: 16px; border-radius: 8px;">
  <div style="flex: 1; padding: 12px; background: white; border-radius: 4px; text-align: center;">Column 1</div>
  <div style="flex: 1; padding: 12px; background: white; border-radius: 4px; text-align: center;">Column 2</div>
  <div style="flex: 1; padding: 12px; background: white; border-radius: 4px; text-align: center;">Column 3</div>
</Box>`,
      },
      {
        title: 'Nested Boxes',
        description: 'Multiple boxes nested together for hierarchical layout structure.',
        code: `<Box padding="16px" style="background: #eceff1; border-radius: 8px;">
  <Box padding="12px" margin="0 0 12px 0" style="background: #cfd8dc; border-radius: 4px;">
    <strong>Outer Box Section 1</strong>
  </Box>
  <Box padding="12px" style="background: #cfd8dc; border-radius: 4px;">
    <strong>Outer Box Section 2</strong>
  </Box>
</Box>`,
      },
      {
        title: 'Responsive Card Layout',
        description: 'Card-like box with consistent spacing used as a reusable layout component.',
        code: `<Box padding="20px" style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  <div style="margin-bottom: 12px;">
    <h3 style="margin: 0 0 4px 0; font-size: 18px;">Product Card</h3>
    <p style="margin: 0; color: #666; font-size: 14px;">Premium quality item</p>
  </div>
  <div style="margin-bottom: 12px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
    This is the main content area with detailed information about the product.
  </div>
  <div style="display: flex; gap: 8px;">
    <Button variant="outline" size="sm">Learn More</Button>
    <Button variant="primary" size="sm">Add to Cart</Button>
  </div>
</Box>`,
      },
    ],
  },
  {
    id: 'typography',
    name: 'Typography',
    tag: 'bpi-typography',
    category: 'atom',
    description: 'A semantic text component supporting multiple heading levels, body text, and helper text. Provides consistent typography styling throughout the application.',
    props: [
      {
        name: 'variant',
        type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline'",
        default: "'body1'",
        required: false,
        description: 'Typography variant determining size and weight',
      },
      {
        name: 'align',
        type: "'left' | 'center' | 'right' | 'justify'",
        default: "'left'",
        required: false,
        description: 'Text alignment',
      },
      {
        name: 'color',
        type: 'string',
        required: false,
        description: 'Text color (hex, rgb, or color name)',
      },
      {
        name: 'weight',
        type: "'normal' | 'medium' | 'semibold' | 'bold'",
        default: "'normal'",
        required: false,
        description: 'Font weight',
      },
    ],
    events: [],
    slots: [
      {
        name: 'default',
        description: 'Text content',
      },
    ],
    examples: [
      {
        title: 'Heading Variants',
        description: 'All heading levels from h1 to h6 with decreasing visual prominence.',
        code: `<div style="display: flex; flex-direction: column; gap: 12px;">
  <Typography variant="h1">Heading 1</Typography>
  <Typography variant="h2">Heading 2</Typography>
  <Typography variant="h3">Heading 3</Typography>
  <Typography variant="h4">Heading 4</Typography>
  <Typography variant="h5">Heading 5</Typography>
  <Typography variant="h6">Heading 6</Typography>
</div>`,
      },
      {
        title: 'Title & Subtitle',
        description: 'Section titles and subtitles for creating visual hierarchy in content.',
        code: `<div style="display: flex; flex-direction: column; gap: 4px;">
  <Typography variant="h2">Main Title</Typography>
  <Typography variant="subtitle1" color="#666">This is a supporting subtitle that provides additional context</Typography>
</div>`,
      },
      {
        title: 'Body Text',
        description: 'Standard body text for paragraphs and main content.',
        code: `<div style="display: flex; flex-direction: column; gap: 12px;">
  <Typography variant="body1">This is body1 text, used for regular paragraph content and main text body with standard font size and weight.</Typography>
  <Typography variant="body2">This is body2 text, slightly smaller than body1, commonly used for secondary content or descriptions.</Typography>
</div>`,
      },
      {
        title: 'Caption & Helper',
        description: 'Small helper text for labels, hints, and additional information.',
        code: `<div style="display: flex; flex-direction: column; gap: 8px;">
  <label>
    <Typography variant="body2" weight="semibold">Email Address</Typography>
    <Input type="email" placeholder="example@email.com" />
  </label>
  <Typography variant="caption" color="#666">We'll send confirmation to this email address</Typography>
</div>`,
      },
      {
        title: 'Text Alignment',
        description: 'Text with different alignment values from left to justified.',
        code: `<div style="display: flex; flex-direction: column; gap: 16px;">
  <Typography variant="body2" align="left">Left aligned text</Typography>
  <Typography variant="body2" align="center">Center aligned text</Typography>
  <Typography variant="body2" align="right">Right aligned text</Typography>
</div>`,
      },
      {
        title: 'Font Weight',
        description: 'Same text in different weights to show emphasis and hierarchy.',
        code: `<div style="display: flex; flex-direction: column; gap: 8px;">
  <Typography variant="body1" weight="normal">Normal weight text</Typography>
  <Typography variant="body1" weight="medium">Medium weight text</Typography>
  <Typography variant="body1" weight="semibold">Semibold weight text</Typography>
  <Typography variant="body1" weight="bold">Bold weight text</Typography>
</div>`,
      },
      {
        title: 'Color Variants',
        description: 'Typography with different color values for semantic meaning.',
        code: `<div style="display: flex; flex-direction: column; gap: 8px;">
  <Typography variant="body1">Default text color</Typography>
  <Typography variant="body1" color="#2196F3">Primary blue text</Typography>
  <Typography variant="body1" color="#4CAF50">Success green text</Typography>
  <Typography variant="body1" color="#F44336">Danger red text</Typography>
  <Typography variant="body1" color="#999">Muted gray text</Typography>
</div>`,
      },
    ],
  },
  {
    id: 'textfield',
    name: 'TextField',
    tag: 'bpi-text-field',
    category: 'atom',
    description: 'A complete form input component combining Input with label and helper text. Provides built-in validation states and error messaging for better form experiences.',
    props: [
      {
        name: 'label',
        type: 'string',
        required: false,
        description: 'Field label text',
      },
      {
        name: 'placeholder',
        type: 'string',
        required: false,
        description: 'Placeholder text',
      },
      {
        name: 'helperText',
        type: 'string',
        required: false,
        description: 'Helper text below the input',
      },
      {
        name: 'error',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Shows error state',
      },
      {
        name: 'errorMessage',
        type: 'string',
        required: false,
        description: 'Error message to display',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Disables the field',
      },
      {
        name: 'required',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Marks field as required',
      },
      {
        name: 'multiline',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Renders as textarea',
      },
      {
        name: 'rows',
        type: 'number',
        default: 3,
        required: false,
        description: 'Number of rows for multiline',
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Takes full width of container',
      },
    ],
    events: [
      {
        name: 'input',
        detail: 'Event',
        description: 'Emitted when value changes',
      },
    ],
    slots: [],
    examples: [
      {
        title: 'Basic TextField',
        description: 'Simple text field with label and placeholder for basic form input.',
        code: `<TextField label="Full Name" placeholder="Enter your full name" />`,
      },
      {
        title: 'TextField Variants',
        description: 'Different input types within TextField for various data entry scenarios.',
        code: `<div style="display: flex; flex-direction: column; gap: 16px;">
  <TextField label="Email" type="email" placeholder="your@email.com" />
  <TextField label="Phone Number" type="tel" placeholder="+66 2 123 4567" />
  <TextField label="Website" type="url" placeholder="https://example.co.th" />
</div>`,
      },
      {
        title: 'Validation States',
        description: 'TextField showing valid input and error state with error messages.',
        code: `<div style="display: flex; flex-direction: column; gap: 16px;">
  <TextField label="Valid Input" placeholder="This is valid" />
  <TextField label="Invalid Email" error errorMessage="Please enter a valid email address" placeholder="invalid@email" />
</div>`,
      },
      {
        title: 'Disabled',
        description: 'Disabled text field that cannot be edited.',
        code: `<TextField label="Disabled Field" disabled value="Cannot edit this field" />`,
      },
      {
        title: 'Multiline',
        description: 'Multiline textarea field for longer text input.',
        code: `<TextField label="Message" placeholder="Type your message here..." multiline rows={4} fullWidth />`,
      },
      {
        title: 'Full-width Form',
        description: 'Form layout with full-width text fields and helper text.',
        code: `<div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
  <TextField label="Full Name" placeholder="Enter your full name" fullWidth required />
  <TextField label="Email Address" type="email" placeholder="you@example.co.th" fullWidth required helperText="We'll never share your email" />
  <TextField label="Message" multiline rows={4} placeholder="Tell us more..." fullWidth />
  <Button variant="primary" block>Send Message</Button>
</div>`,
      },
    ],
  },
  {
    id: 'alert',
    name: 'Alert',
    tag: 'bpi-alert',
    category: 'atom',
    description: 'A notification component for displaying important messages, warnings, or status information. Supports multiple severity levels with semantic colors.',
    props: [
      {
        name: 'severity',
        type: "'success' | 'info' | 'warning' | 'error'",
        default: "'info'",
        required: false,
        description: 'Alert severity level',
      },
      {
        name: 'title',
        type: 'string',
        required: false,
        description: 'Alert title text',
      },
      {
        name: 'closable',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Shows close button',
      },
      {
        name: 'icon',
        type: 'string',
        required: false,
        description: 'Custom icon name',
      },
      {
        name: 'dense',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Compact alert variant',
      },
    ],
    events: [
      {
        name: 'close',
        detail: 'CustomEvent',
        description: 'Emitted when alert is closed',
      },
    ],
    slots: [
      {
        name: 'default',
        description: 'Alert message content',
      },
      {
        name: 'action',
        description: 'Action button slot',
      },
    ],
    examples: [
      {
        title: 'Basic Alerts',
        description: 'All four severity levels showing different semantic meanings and colors.',
        code: `<div style="display: flex; flex-direction: column; gap: 12px;">
  <Alert severity="success">Success message - Operation completed successfully!</Alert>
  <Alert severity="info">Info message - Here is some helpful information for you.</Alert>
  <Alert severity="warning">Warning message - Please review this before proceeding.</Alert>
  <Alert severity="error">Error message - Something went wrong. Please try again.</Alert>
</div>`,
      },
      {
        title: 'Alert with Title',
        description: 'Alert with a prominent title and descriptive message.',
        code: `<Alert severity="info" title="Update Available">
  A new version of the application is available. Please refresh to get the latest features and improvements.
</Alert>`,
      },
      {
        title: 'Closable Alert',
        description: 'Alert with a close button allowing users to dismiss the message.',
        code: `<Alert severity="warning" closable>
  Your session will expire in 5 minutes. Would you like to extend it?
</Alert>`,
      },
      {
        title: 'Custom Icon',
        description: 'Alert with a custom icon overriding the default severity-based icon.',
        code: `<Alert severity="success" icon="thumb-up">
  Great job! Your profile has been updated successfully.
</Alert>`,
      },
      {
        title: 'Dense Alert',
        description: 'Compact alert variant for space-constrained layouts.',
        code: `<div style="display: flex; flex-direction: column; gap: 8px;">
  <Alert severity="success" dense>✓ File uploaded</Alert>
  <Alert severity="info" dense>ℹ Processing request</Alert>
</div>`,
      },
      {
        title: 'Alert Actions',
        description: 'Alert with action buttons for user interaction and decision-making.',
        code: `<Alert severity="warning" closable title="Unsaved Changes">
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span>You have unsaved changes.</span>
    <div style="display: flex; gap: 8px;">
      <Button size="sm" variant="outline">Discard</Button>
      <Button size="sm" variant="primary">Save Now</Button>
    </div>
  </div>
</Alert>`,
      },
    ],
  },
  {
    id: 'skeleton',
    name: 'Skeleton',
    tag: 'bpi-skeleton',
    category: 'atom',
    description: 'A placeholder component for loading states that mimics the shape of content being loaded. Helps improve perceived performance with smooth loading animations.',
    props: [
      {
        name: 'variant',
        type: "'text' | 'circular' | 'rectangular'",
        default: "'text'",
        required: false,
        description: 'Shape of the skeleton',
      },
      {
        name: 'width',
        type: 'string | number',
        required: false,
        description: 'Width of skeleton',
      },
      {
        name: 'height',
        type: 'string | number',
        required: false,
        description: 'Height of skeleton',
      },
      {
        name: 'animation',
        type: "'wave' | 'pulse'",
        default: "'wave'",
        required: false,
        description: 'Loading animation type',
      },
    ],
    events: [],
    slots: [],
    examples: [
      {
        title: 'Text Skeleton',
        description: 'Skeleton loader mimicking text lines for content loading state.',
        code: `<div style="display: flex; flex-direction: column; gap: 8px;">
  <Skeleton variant="text" height={24} />
  <Skeleton variant="text" height={20} />
  <Skeleton variant="text" height={20} width="80%" />
</div>`,
      },
      {
        title: 'Circular Skeleton',
        description: 'Round skeleton placeholder commonly used for avatar images.',
        code: `<Skeleton variant="circular" width={64} height={64} />`,
      },
      {
        title: 'Rectangular',
        description: 'Rectangle skeleton for image and media placeholders.',
        code: `<div style="display: flex; gap: 16px;">
  <Skeleton variant="rectangular" width={120} height={120} />
  <div style="flex: 1;">
    <Skeleton variant="text" height={24} />
    <Skeleton variant="text" height={20} style="margin-top: 8px;" />
    <Skeleton variant="text" height={20} width="60%" style="margin-top: 8px;" />
  </div>
</div>`,
      },
      {
        title: 'Wave Animation',
        description: 'Skeleton with wave animation effect for smooth loading experience.',
        code: `<Skeleton variant="rectangular" width="100%" height={200} animation="wave" />`,
      },
      {
        title: 'Card Loading State',
        description: 'Complete card skeleton showing layout structure during content load.',
        code: `<Box padding="16px" style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  <Skeleton variant="rectangular" width="100%" height={200} style="margin-bottom: 16px;" />
  <Skeleton variant="text" height={24} style="margin-bottom: 8px;" />
  <Skeleton variant="text" height={20} style="margin-bottom: 8px;" />
  <Skeleton variant="text" height={20} width="60%" />
</Box>`,
      },
    ],
  },
  {
    id: 'circularprogress',
    name: 'CircularProgress',
    tag: 'bpi-circular-progress',
    category: 'atom',
    description: 'A circular progress indicator for showing loading states or progress completion. Can be indeterminate for ongoing operations or determinate with percentage values.',
    props: [
      {
        name: 'value',
        type: 'number',
        required: false,
        description: 'Progress value 0-100, undefined for indeterminate',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Size of the progress indicator',
      },
      {
        name: 'color',
        type: "'primary' | 'success' | 'warning' | 'error'",
        default: "'primary'",
        required: false,
        description: 'Progress color variant',
      },
      {
        name: 'thickness',
        type: 'number',
        default: 4,
        required: false,
        description: 'Stroke thickness in pixels',
      },
    ],
    events: [],
    slots: [],
    examples: [
      {
        title: 'Indeterminate',
        description: 'Loading spinner showing indeterminate progress for ongoing operations.',
        code: `<CircularProgress />`,
      },
      {
        title: 'Determinate with Value',
        description: 'Circular progress showing specific percentage completion.',
        code: `<div style="display: flex; gap: 20px; justify-content: center; align-items: center; flex-wrap: wrap;">
  <div style="text-align: center;">
    <CircularProgress value={25} />
    <p style="margin-top: 8px; font-size: 12px;">25%</p>
  </div>
  <div style="text-align: center;">
    <CircularProgress value={50} />
    <p style="margin-top: 8px; font-size: 12px;">50%</p>
  </div>
  <div style="text-align: center;">
    <CircularProgress value={75} />
    <p style="margin-top: 8px; font-size: 12px;">75%</p>
  </div>
  <div style="text-align: center;">
    <CircularProgress value={100} />
    <p style="margin-top: 8px; font-size: 12px;">100%</p>
  </div>
</div>`,
      },
      {
        title: 'Sizes',
        description: 'Circular progress indicators in small, medium, and large sizes.',
        code: `<div style="display: flex; gap: 24px; align-items: center;">
  <CircularProgress value={60} size="sm" />
  <CircularProgress value={60} size="md" />
  <CircularProgress value={60} size="lg" />
</div>`,
      },
      {
        title: 'Color Variants',
        description: 'Progress indicators with different semantic colors.',
        code: `<div style="display: flex; gap: 24px; justify-content: center; flex-wrap: wrap;">
  <CircularProgress value={60} color="primary" />
  <CircularProgress value={60} color="success" />
  <CircularProgress value={60} color="warning" />
  <CircularProgress value={60} color="error" />
</div>`,
      },
    ],
  },
  {
    id: 'linearprogress',
    name: 'LinearProgress',
    tag: 'bpi-linear-progress',
    category: 'atom',
    description: 'A horizontal progress bar component for showing loading or completion percentage. Supports indeterminate and determinate modes with color variants.',
    props: [
      {
        name: 'value',
        type: 'number',
        required: false,
        description: 'Progress value 0-100, undefined for indeterminate',
      },
      {
        name: 'variant',
        type: "'determinate' | 'indeterminate' | 'buffer' | 'query'",
        default: "'indeterminate'",
        required: false,
        description: 'Progress variant',
      },
      {
        name: 'valueBuffer',
        type: 'number',
        required: false,
        description: 'Buffer value for buffer variant',
      },
      {
        name: 'color',
        type: "'primary' | 'success' | 'warning' | 'error'",
        default: "'primary'",
        required: false,
        description: 'Progress color',
      },
      {
        name: 'height',
        type: 'string | number',
        default: 4,
        required: false,
        description: 'Progress bar height',
      },
    ],
    events: [],
    slots: [],
    examples: [
      {
        title: 'Indeterminate',
        description: 'Progress bar in indeterminate mode showing ongoing loading without specific percentage.',
        code: `<LinearProgress />`,
      },
      {
        title: 'Determinate',
        description: 'Progress bar showing specific percentage of completion.',
        code: `<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <div style="font-size: 12px; margin-bottom: 4px;">25% Complete</div>
    <LinearProgress value={25} variant="determinate" />
  </div>
  <div>
    <div style="font-size: 12px; margin-bottom: 4px;">50% Complete</div>
    <LinearProgress value={50} variant="determinate" />
  </div>
  <div>
    <div style="font-size: 12px; margin-bottom: 4px;">75% Complete</div>
    <LinearProgress value={75} variant="determinate" />
  </div>
  <div>
    <div style="font-size: 12px; margin-bottom: 4px;">100% Complete</div>
    <LinearProgress value={100} variant="determinate" />
  </div>
</div>`,
      },
      {
        title: 'Buffer',
        description: 'Progress bar with buffer showing both progress and buffered content.',
        code: `<LinearProgress value={40} valueBuffer={70} variant="buffer" />`,
      },
      {
        title: 'Color Variants',
        description: 'Progress bars with different semantic colors.',
        code: `<div style="display: flex; flex-direction: column; gap: 16px;">
  <LinearProgress value={60} variant="determinate" color="primary" />
  <LinearProgress value={60} variant="determinate" color="success" />
  <LinearProgress value={60} variant="determinate" color="warning" />
  <LinearProgress value={60} variant="determinate" color="error" />
</div>`,
      },
    ],
  },
  {
    id: 'avatar',
    name: 'Avatar',
    tag: 'bpi-avatar',
    category: 'atom',
    description: 'A visual representation component for users with support for images, initials, and fallback icons. Can be used alone or grouped together.',
    props: [
      {
        name: 'src',
        type: 'string',
        required: false,
        description: 'Image URL for avatar',
      },
      {
        name: 'alt',
        type: 'string',
        required: false,
        description: 'Alt text for image',
      },
      {
        name: 'children',
        type: 'string',
        required: false,
        description: 'Initials or icon name',
      },
      {
        name: 'size',
        type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
        default: "'md'",
        required: false,
        description: 'Avatar size',
      },
      {
        name: 'color',
        type: 'string',
        required: false,
        description: 'Background color when showing initials',
      },
    ],
    events: [],
    slots: [
      {
        name: 'default',
        description: 'Avatar initials or icon',
      },
    ],
    examples: [
      {
        title: 'Image Avatar',
        description: 'Avatar displaying user profile image.',
        code: `<Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="John Doe" />`,
      },
      {
        title: 'Letter Avatar',
        description: 'Avatar showing user initials with colored background.',
        code: `<div style="display: flex; gap: 12px;">
  <Avatar color="#FF6B6B">AS</Avatar>
  <Avatar color="#4ECDC4">MD</Avatar>
  <Avatar color="#45B7D1">JK</Avatar>
  <Avatar color="#FFA07A">SP</Avatar>
</div>`,
      },
      {
        title: 'Sizes',
        description: 'Avatar in all available sizes from extra small to extra large.',
        code: `<div style="display: flex; gap: 12px; align-items: center;">
  <Avatar size="xs">A</Avatar>
  <Avatar size="sm">B</Avatar>
  <Avatar size="md">C</Avatar>
  <Avatar size="lg">D</Avatar>
  <Avatar size="xl">E</Avatar>
</div>`,
      },
      {
        title: 'Fallback Icon',
        description: 'Avatar with fallback icon when image fails to load.',
        code: `<Avatar src="invalid-url.jpg">
  <Icon name="user" />
</Avatar>`,
      },
      {
        title: 'Avatar Group',
        description: 'Multiple avatars grouped together showing a collection of users.',
        code: `<div style="display: flex; margin-left: -8px;">
  <Avatar size="sm" src="https://api.dicebear.com/7.x/avataaars/svg?seed=User1" style="border: 2px solid white; position: relative; z-index: 3;" />
  <Avatar size="sm" src="https://api.dicebear.com/7.x/avataaars/svg?seed=User2" style="border: 2px solid white; position: relative; z-index: 2; margin-left: -16px;" />
  <Avatar size="sm" src="https://api.dicebear.com/7.x/avataaars/svg?seed=User3" style="border: 2px solid white; position: relative; z-index: 1; margin-left: -16px;" />
  <div style="width: 36px; height: 36px; border-radius: 50%; background: #e0e0e0; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #666; margin-left: -16px; border: 2px solid white;">+3</div>
</div>`,
      },
    ],
  },
  {
    id: 'chip',
    name: 'Chip',
    tag: 'bpi-chip',
    category: 'atom',
    description: 'A compact component for displaying labels, tags, or selections. Supports deletable chips, color variants, and various sizes for tagging and filtering.',
    props: [
      {
        name: 'label',
        type: 'string',
        required: true,
        description: 'Chip label text',
      },
      {
        name: 'variant',
        type: "'filled' | 'outlined'",
        default: "'filled'",
        required: false,
        description: 'Chip style variant',
      },
      {
        name: 'color',
        type: "'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'",
        default: "'primary'",
        required: false,
        description: 'Chip color',
      },
      {
        name: 'deletable',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Shows delete button',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Chip size',
      },
      {
        name: 'icon',
        type: 'string',
        required: false,
        description: 'Icon name to display',
      },
    ],
    events: [
      {
        name: 'delete',
        detail: 'CustomEvent',
        description: 'Emitted when chip is deleted',
      },
    ],
    slots: [
      {
        name: 'default',
        description: 'Chip content',
      },
    ],
    examples: [
      {
        title: 'Basic Chip',
        description: 'Simple chip component displaying a label.',
        code: `<Chip label="React" />`,
      },
      {
        title: 'Outlined Chip',
        description: 'Chip with outlined variant styling.',
        code: `<div style="display: flex; gap: 8px; flex-wrap: wrap;">
  <Chip label="Design" variant="outlined" />
  <Chip label="Development" variant="outlined" />
  <Chip label="Testing" variant="outlined" />
</div>`,
      },
      {
        title: 'Deletable',
        description: 'Chips with delete button allowing users to remove them.',
        code: `<div style="display: flex; gap: 8px; flex-wrap: wrap;">
  <Chip label="JavaScript" deletable />
  <Chip label="TypeScript" deletable />
  <Chip label="Vue.js" deletable />
</div>`,
      },
      {
        title: 'Color Variants',
        description: 'Chips in different semantic colors.',
        code: `<div style="display: flex; gap: 8px; flex-wrap: wrap;">
  <Chip label="Primary" color="primary" />
  <Chip label="Success" color="success" />
  <Chip label="Warning" color="warning" />
  <Chip label="Error" color="error" />
</div>`,
      },
      {
        title: 'Sizes',
        description: 'Chips in small, medium, and large sizes.',
        code: `<div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
  <Chip label="Small" size="sm" />
  <Chip label="Medium" size="md" />
  <Chip label="Large" size="lg" />
</div>`,
      },
      {
        title: 'Chip Array',
        description: 'Multiple chips displayed together for tagging or filtering.',
        code: `<div style="display: flex; gap: 8px; flex-wrap: wrap;">
  <Chip label="React" icon="react" deletable />
  <Chip label="Node.js" icon="nodejs" deletable />
  <Chip label="MongoDB" icon="database" deletable />
  <Chip label="AWS" icon="cloud" deletable />
</div>`,
      },
    ],
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    tag: 'bpi-tooltip',
    category: 'atom',
    description: 'An informational overlay that appears on hover or focus. Displays helpful text or descriptions without cluttering the interface.',
    props: [
      {
        name: 'title',
        type: 'string',
        required: true,
        description: 'Tooltip text content',
      },
      {
        name: 'placement',
        type: "'top' | 'bottom' | 'left' | 'right'",
        default: "'top'",
        required: false,
        description: 'Tooltip position relative to trigger',
      },
      {
        name: 'arrow',
        type: 'boolean',
        default: true,
        required: false,
        description: 'Shows arrow pointing to trigger',
      },
      {
        name: 'delay',
        type: 'number',
        default: 200,
        required: false,
        description: 'Delay before showing tooltip in ms',
      },
    ],
    events: [],
    slots: [
      {
        name: 'default',
        description: 'Trigger element content',
      },
    ],
    examples: [
      {
        title: 'Basic Tooltip',
        description: 'Simple tooltip appearing on hover with descriptive text.',
        code: `<Tooltip title="This is helpful information">
  <Icon name="info" />
</Tooltip>`,
      },
      {
        title: 'Positioned Tooltip',
        description: 'Tooltips positioned at different directions around the trigger.',
        code: `<div style="display: flex; gap: 40px; justify-content: center; padding: 40px;">
  <Tooltip title="Top tooltip" placement="top">
    <Button variant="outline">Top</Button>
  </Tooltip>
  <Tooltip title="Right tooltip" placement="right">
    <Button variant="outline">Right</Button>
  </Tooltip>
  <Tooltip title="Bottom tooltip" placement="bottom">
    <Button variant="outline">Bottom</Button>
  </Tooltip>
  <Tooltip title="Left tooltip" placement="left">
    <Button variant="outline">Left</Button>
  </Tooltip>
</div>`,
      },
      {
        title: 'Tooltip on Button',
        description: 'Tooltip wrapping action buttons to provide additional context.',
        code: `<div style="display: flex; gap: 8px;">
  <Tooltip title="Download this file">
    <Button variant="ghost" size="sm">
      <Icon name="download" />
    </Button>
  </Tooltip>
  <Tooltip title="Share with others">
    <Button variant="ghost" size="sm">
      <Icon name="share" />
    </Button>
  </Tooltip>
  <Tooltip title="Delete permanently">
    <Button variant="ghost" size="sm">
      <Icon name="delete" />
    </Button>
  </Tooltip>
</div>`,
      },
      {
        title: 'Tooltip with HTML',
        description: 'Tooltip containing formatted HTML content for rich formatting.',
        code: `<Tooltip title="<strong>Keyboard Shortcut:</strong><br/>Press Ctrl+S to save">
  <Button variant="outline">Save</Button>
</Tooltip>`,
      },
    ],
  },
  {
    id: 'divider',
    name: 'Divider',
    tag: 'bpi-divider',
    category: 'atom',
    description: 'A visual separator component for creating visual breaks between content sections. Supports horizontal and vertical orientations with optional text labels.',
    props: [
      {
        name: 'orientation',
        type: "'horizontal' | 'vertical'",
        default: "'horizontal'",
        required: false,
        description: 'Divider direction',
      },
      {
        name: 'variant',
        type: "'fullwidth' | 'inset' | 'middle'",
        default: "'fullwidth'",
        required: false,
        description: 'Divider extent',
      },
      {
        name: 'children',
        type: 'string',
        required: false,
        description: 'Text label in divider',
      },
    ],
    events: [],
    slots: [
      {
        name: 'default',
        description: 'Divider label text',
      },
    ],
    examples: [
      {
        title: 'Horizontal',
        description: 'Standard horizontal divider separating vertical content.',
        code: `<div>
  <Typography variant="h6">Section 1</Typography>
  <p style="margin: 0; padding: 12px 0;">Content for the first section goes here.</p>
  <Divider style="margin: 16px 0;" />
  <Typography variant="h6">Section 2</Typography>
  <p style="margin: 0; padding: 12px 0;">Content for the second section goes here.</p>
</div>`,
      },
      {
        title: 'Vertical',
        description: 'Vertical divider separating horizontal content.',
        code: `<div style="display: flex; gap: 16px;">
  <div style="flex: 1;">Left section content</div>
  <Divider orientation="vertical" style="min-height: 100px;" />
  <div style="flex: 1;">Right section content</div>
</div>`,
      },
      {
        title: 'With Text',
        description: 'Horizontal divider with a text label in the center.',
        code: `<div style="margin: 24px 0;">
  <Divider>Or continue with</Divider>
</div>`,
      },
      {
        title: 'Inset Divider',
        description: 'Divider with inset variant that does not extend full width.',
        code: `<div style="display: flex; flex-direction: column;">
  <div style="padding: 12px; display: flex; align-items: center; gap: 12px;">
    <Avatar size="sm">JD</Avatar>
    <Typography variant="body2">John Doe</Typography>
  </div>
  <Divider variant="inset" style="margin: '0;" />
  <div style="padding: 12px; display: flex; align-items: center; gap: 12px;">
    <Avatar size="sm">AB</Avatar>
    <Typography variant="body2">Alice Brown</Typography>
  </div>
</div>`,
      },
    ],
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    tag: 'bpi-checkbox',
    category: 'atom',
    description: 'A binary choice component for selecting or deselecting options. Supports indeterminate state and can be used standalone or in groups.',
    props: [
      {
        name: 'checked',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Checkbox checked state',
      },
      {
        name: 'indeterminate',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Indeterminate state for mixed selections',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Disables the checkbox',
      },
      {
        name: 'label',
        type: 'string',
        required: false,
        description: 'Label text',
      },
    ],
    events: [
      {
        name: 'change',
        detail: 'Event',
        description: 'Emitted when checkbox is toggled',
      },
    ],
    slots: [
      {
        name: 'default',
        description: 'Label content',
      },
    ],
    examples: [
      {
        title: 'Basic Checkbox',
        description: 'Simple checkbox for binary selection.',
        code: `<Checkbox />`,
      },
      {
        title: 'With Label',
        description: 'Checkbox with associated label text.',
        code: `<div style="display: flex; flex-direction: column; gap: 12px;">
  <Checkbox label="I agree to the terms and conditions" />
  <Checkbox label="Remember my preferences" checked />
</div>`,
      },
      {
        title: 'Indeterminate',
        description: 'Checkbox showing mixed/partial selection state.',
        code: `<div>
  <Checkbox indeterminate label="Select all items" />
  <div style="margin-left: 24px; margin-top: 8px;">
    <Checkbox label="Item 1" checked />
    <Checkbox label="Item 2" />
    <Checkbox label="Item 3" checked />
  </div>
</div>`,
      },
      {
        title: 'Disabled',
        description: 'Disabled checkboxes in checked and unchecked states.',
        code: `<div style="display: flex; flex-direction: column; gap: 12px;">
  <Checkbox disabled label="Cannot modify - unchecked" />
  <Checkbox disabled checked label="Cannot modify - checked" />
</div>`,
      },
      {
        title: 'Checkbox Group',
        description: 'Multiple checkboxes for multi-select options.',
        code: `<fieldset style="border: none; padding: 0;">
  <legend style="font-weight: 600; margin-bottom: 12px;">Select your interests:</legend>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <Checkbox label="Design" />
    <Checkbox label="Development" />
    <Checkbox label="Marketing" />
    <Checkbox label="Sales" />
  </div>
</fieldset>`,
      },
    ],
  },
  {
    id: 'radio',
    name: 'Radio',
    tag: 'bpi-radio',
    category: 'atom',
    description: 'A single-choice selection component for mutually exclusive options. Used in groups where only one option can be selected at a time.',
    props: [
      {
        name: 'checked',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Radio button checked state',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Disables the radio button',
      },
      {
        name: 'label',
        type: 'string',
        required: false,
        description: 'Label text',
      },
      {
        name: 'value',
        type: 'string | number',
        required: false,
        description: 'Radio button value',
      },
    ],
    events: [
      {
        name: 'change',
        detail: 'Event',
        description: 'Emitted when radio is selected',
      },
    ],
    slots: [
      {
        name: 'default',
        description: 'Label content',
      },
    ],
    examples: [
      {
        title: 'Basic Radio',
        description: 'Single radio button component.',
        code: `<Radio />`,
      },
      {
        title: 'Radio Group',
        description: 'Group of mutually exclusive radio buttons.',
        code: `<fieldset style="border: none; padding: 0;">
  <legend style="font-weight: 600; margin-bottom: 12px;">Preferred contact method:</legend>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <Radio checked label="Email" value="email" />
    <Radio label="Phone" value="phone" />
    <Radio label="SMS" value="sms" />
  </div>
</fieldset>`,
      },
      {
        title: 'Disabled',
        description: 'Disabled radio buttons in selected and unselected states.',
        code: `<div style="display: flex; flex-direction: column; gap: 12px;">
  <Radio disabled label="Unavailable option 1" />
  <Radio disabled checked label="Unavailable option 2" />
</div>`,
      },
      {
        title: 'With Label',
        description: 'Radio button with descriptive label text.',
        code: `<div style="display: flex; flex-direction: column; gap: 16px;">
  <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
    <Radio value="standard" checked />
    <div>
      <div style="font-weight: 600;">Standard Shipping</div>
      <div style="font-size: 12px; color: #666;">Arrives in 5-7 business days</div>
    </div>
  </label>
  <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
    <Radio value="express" />
    <div>
      <div style="font-weight: 600;">Express Shipping</div>
      <div style="font-size: 12px; color: #666;">Arrives in 1-2 business days</div>
    </div>
  </label>
</div>`,
      },
    ],
  },
  {
    id: 'switch',
    name: 'Switch',
    tag: 'bpi-switch',
    category: 'atom',
    description: 'A toggle component for binary on/off choices. Commonly used for settings and feature toggles with clear visual feedback.',
    props: [
      {
        name: 'checked',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Switch checked state',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Disables the switch',
      },
      {
        name: 'label',
        type: 'string',
        required: false,
        description: 'Label text',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Switch size',
      },
    ],
    events: [
      {
        name: 'change',
        detail: 'Event',
        description: 'Emitted when switch is toggled',
      },
    ],
    slots: [
      {
        name: 'default',
        description: 'Label content',
      },
    ],
    examples: [
      {
        title: 'Basic Switch',
        description: 'Simple toggle switch for on/off states.',
        code: `<Switch />`,
      },
      {
        title: 'With Label',
        description: 'Switch with descriptive label text.',
        code: `<div style="display: flex; flex-direction: column; gap: 16px;">
  <div style="display: flex; align-items: center; justify-content: space-between;">
    <Typography variant="body2">Dark Mode</Typography>
    <Switch />
  </div>
  <div style="display: flex; align-items: center; justify-content: space-between;">
    <Typography variant="body2">Notifications</Typography>
    <Switch checked />
  </div>
</div>`,
      },
      {
        title: 'Disabled',
        description: 'Disabled switches in both on and off states.',
        code: `<div style="display: flex; flex-direction: column; gap: 12px;">
  <Switch disabled label="Locked - Off" />
  <Switch disabled checked label="Locked - On" />
</div>`,
      },
      {
        title: 'Sizes',
        description: 'Switches in small, medium, and large sizes.',
        code: `<div style="display: flex; gap: 16px; align-items: center;">
  <Switch size="sm" />
  <Switch size="md" />
  <Switch size="lg" />
</div>`,
      },
    ],
  },
  {
    id: 'slider',
    name: 'Slider',
    tag: 'bpi-slider',
    category: 'atom',
    description: 'A continuous value selector component for selecting a value within a range. Supports single value or range selection with drag interaction.',
    props: [
      {
        name: 'value',
        type: 'number | number[]',
        required: false,
        description: 'Current value or range',
      },
      {
        name: 'min',
        type: 'number',
        default: 0,
        required: false,
        description: 'Minimum value',
      },
      {
        name: 'max',
        type: 'number',
        default: 100,
        required: false,
        description: 'Maximum value',
      },
      {
        name: 'step',
        type: 'number',
        default: 1,
        required: false,
        description: 'Step increment',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Disables the slider',
      },
      {
        name: 'marks',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Show step marks',
      },
    ],
    events: [
      {
        name: 'change',
        detail: 'CustomEvent',
        description: 'Emitted when value changes',
      },
    ],
    slots: [],
    examples: [
      {
        title: 'Basic Slider',
        description: 'Simple slider for selecting a single value within range.',
        code: `<Slider value={30} />`,
      },
      {
        title: 'Range',
        description: 'Slider for selecting a value range with two thumbs.',
        code: `<Slider value={[25, 75]} />`,
      },
      {
        title: 'Disabled',
        description: 'Disabled slider that cannot be interacted with.',
        code: `<Slider value={50} disabled />`,
      },
      {
        title: 'With Labels',
        description: 'Slider with labels showing current values and constraints.',
        code: `<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
      <Typography variant="caption" color="#666">Volume</Typography>
      <Typography variant="caption" weight="semibold">65%</Typography>
    </div>
    <Slider value={65} />
  </div>
  <div>
    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
      <Typography variant="caption" color="#666">Price Range</Typography>
      <Typography variant="caption" weight="semibold">฿500 - ฿5,000</Typography>
    </div>
    <Slider value={[500, 5000]} min={100} max={10000} />
  </div>
</div>`,
      },
    ],
  },
  {
    id: 'table',
    name: 'Table',
    tag: 'bpi-table',
    category: 'atom',
    description: 'A component for displaying structured data in rows and columns. Supports striped rows, borders, sorting, selection, and sticky headers. Use with HTML table elements: thead, tbody, tr, th, td.',
    props: [
      {
        name: 'striped',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Alternate row background colors',
      },
      {
        name: 'hover',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Highlight rows on hover',
      },
      {
        name: 'bordered',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Show borders between rows',
      },
      {
        name: 'dense',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Reduce padding for compact view',
      },
      {
        name: 'stickyHeader',
        type: 'boolean',
        default: false,
        required: false,
        description: 'Sticky header on scroll',
      },
    ],
    events: [],
    slots: [
      {
        name: 'default',
        description: 'Table content (thead, tbody)',
      },
    ],
    examples: [
      {
        title: 'Basic Table',
        description: 'Simple table displaying data in rows and columns with proper semantic HTML structure.',
        code: `<Table>
  <thead>
    <tr>
      <th>Order ID</th>
      <th>Customer</th>
      <th>Items</th>
      <th>Total</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#ORD-2024-001</td>
      <td>สมชาย มั่งมี</td>
      <td>3</td>
      <td>฿2,450</td>
      <td>2024-03-01</td>
    </tr>
    <tr>
      <td>#ORD-2024-002</td>
      <td>David Johnson</td>
      <td>2</td>
      <td>฿1,680</td>
      <td>2024-03-02</td>
    </tr>
    <tr>
      <td>#ORD-2024-003</td>
      <td>Sojida Abdullah</td>
      <td>5</td>
      <td>฿3,920</td>
      <td>2024-03-03</td>
    </tr>
  </tbody>
</Table>`,
      },
      {
        title: 'Dense Table',
        description: 'Table with reduced padding for compact display of large datasets.',
        code: `<Table dense>
  <thead>
    <tr>
      <th>SKU</th>
      <th>Product</th>
      <th>Stock</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SKU-001</td>
      <td>Laptop</td>
      <td>12</td>
      <td>฿25,000</td>
    </tr>
    <tr>
      <td>SKU-002</td>
      <td>Mouse</td>
      <td>156</td>
      <td>฿450</td>
    </tr>
    <tr>
      <td>SKU-003</td>
      <td>Keyboard</td>
      <td>89</td>
      <td>฿1,200</td>
    </tr>
  </tbody>
</Table>`,
      },
      {
        title: 'Sorting & Selection',
        description: 'Table with checkboxes for selection and sorting indicators on headers.',
        code: `<Table striped>
  <thead>
    <tr>
      <th style="width: 40px;"><Checkbox /></th>
      <th style="display: flex; align-items: center; gap: 4px;">Name <Icon name="unfold-more" size="sm" /></th>
      <th style="display: flex; align-items: center; gap: 4px;">Email <Icon name="unfold-more" size="sm" /></th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><Checkbox checked /></td>
      <td>Anita Sanchez</td>
      <td>anita@example.com</td>
      <td><Badge variant="success">Active</Badge></td>
    </tr>
    <tr>
      <td><Checkbox /></td>
      <td>Marco Rossi</td>
      <td>marco@example.com</td>
      <td><Badge variant="warning">Pending</Badge></td>
    </tr>
    <tr>
      <td><Checkbox /></td>
      <td>Yuki Tanaka</td>
      <td>yuki@example.com</td>
      <td><Badge variant="info">Inactive</Badge></td>
    </tr>
  </tbody>
</Table>`,
      },
      {
        title: 'Bordered Table',
        description: 'Table with visible borders separating all cells for clear visual distinction.',
        code: `<Table bordered striped>
  <thead>
    <tr>
      <th>Dessert</th>
      <th align="right">Calories</th>
      <th align="right">Fat (g)</th>
      <th align="right">Carbs (g)</th>
      <th align="right">Protein (g)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Frozen yogurt</td>
      <td align="right">159</td>
      <td align="right">6.0</td>
      <td align="right">24</td>
      <td align="right">4.0</td>
    </tr>
    <tr>
      <td>Ice cream</td>
      <td align="right">237</td>
      <td align="right">9.0</td>
      <td align="right">37</td>
      <td align="right">4.3</td>
    </tr>
    <tr>
      <td>Eclair</td>
      <td align="right">262</td>
      <td align="right">16.0</td>
      <td align="right">24</td>
      <td align="right">6.0</td>
    </tr>
  </tbody>
</Table>`,
      },
      {
        title: 'Sticky Header',
        description: 'Table with sticky header that remains visible when scrolling through data.',
        code: `<Table stickyHeader striped hover style="max-height: 300px;">
  <thead>
    <tr>
      <th>Transaction ID</th>
      <th>Description</th>
      <th>Amount</th>
      <th>Date</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>#TRX-001</td><td>Product Purchase</td><td>฿1,500</td><td>2024-03-01</td><td><Badge variant="success">Completed</Badge></td></tr>
    <tr><td>#TRX-002</td><td>Refund</td><td>-฿500</td><td>2024-03-02</td><td><Badge variant="info">Processed</Badge></td></tr>
    <tr><td>#TRX-003</td><td>Subscription</td><td>฿3,000</td><td>2024-03-03</td><td><Badge variant="success">Completed</Badge></td></tr>
    <tr><td>#TRX-004</td><td>Service Fee</td><td>฿250</td><td>2024-03-04</td><td><Badge variant="warning">Pending</Badge></td></tr>
    <tr><td>#TRX-005</td><td>Adjustment</td><td>-฿100</td><td>2024-03-05</td><td><Badge variant="info">Processed</Badge></td></tr>
  </tbody>
</Table>`,
      },
      {
        title: 'Customized Table',
        description: 'Table with custom styling, badges, and interactive elements in cells.',
        code: `<Table striped hover>
  <thead>
    <tr style="background: #f5f5f5;">
      <th>Employee</th>
      <th>Department</th>
      <th>Role</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="font-weight: 600;">Pattawan Silpakul</td>
      <td>Engineering</td>
      <td>Senior Dev</td>
      <td><Badge color="success">Active</Badge></td>
      <td><Button size="sm" variant="ghost"><Icon name="edit" size="sm" /></Button></td>
    </tr>
    <tr>
      <td style="font-weight: 600;">Lisa Mueller</td>
      <td>Design</td>
      <td>Design Lead</td>
      <td><Badge color="success">Active</Badge></td>
      <td><Button size="sm" variant="ghost"><Icon name="edit" size="sm" /></Button></td>
    </tr>
    <tr>
      <td style="font-weight: 600;">Carlos Rodriguez</td>
      <td>Marketing</td>
      <td>Manager</td>
      <td><Badge color="warning">On Leave</Badge></td>
      <td><Button size="sm" variant="ghost"><Icon name="edit" size="sm" /></Button></td>
    </tr>
  </tbody>
</Table>`,
      },
    ],
  },
  // MOLECULES
  {
    id: 'form-field',
    name: 'FormField',
    tag: 'bpi-form-field',
    category: 'molecule',
    description: 'A compound form field component that combines a label, input, and optional error/hint messaging. Provides consistent styling and validation feedback for form inputs. Handles required state indicators and error states automatically.',
    props: [
      {
        name: 'label',
        type: 'string',
        required: false,
        description: 'Label text displayed above the input field',
      },
      {
        name: 'required',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Shows required indicator next to label',
      },
      {
        name: 'error',
        type: 'string',
        required: false,
        description: 'Error message displayed below the field',
      },
      {
        name: 'hint',
        type: 'string',
        required: false,
        description: 'Helper text displayed below the field',
      },
    ],
    events: [],
    slots: [],
    examples: [
      {
        title: 'Basic FormField',
        description: 'Simple form field with label and input.',
        code: `<FormField label="Email Address">
  <TextField type="email" placeholder="you@example.com" />
</FormField>`,
      },
      {
        title: 'Required Field',
        description: 'Form field with required indicator and validation.',
        code: `<FormField label="Full Name" required hint="Enter your first and last name">
  <TextField placeholder="John Doe" />
</FormField>`,
      },
      {
        title: 'With Error',
        description: 'Form field displaying validation error state.',
        code: `<FormField label="Password" error="Password must be at least 8 characters">
  <TextField type="password" placeholder="Enter password" />
</FormField>`,
      },
      {
        title: 'With Hint Text',
        description: 'Form field with helpful hint below the input.',
        code: `<FormField label="Username" hint="3-20 characters, alphanumeric only">
  <TextField placeholder="username123" />
</FormField>`,
      },
    ],
  },
  {
    id: 'search-bar',
    name: 'SearchBar',
    tag: 'bpi-search-bar',
    category: 'molecule',
    description: 'A specialized input component designed for search functionality with magnifying glass icon and clear button. Emits input events as the user types and provides visual feedback. Often includes optional filtering or autocomplete capabilities.',
    props: [
      {
        name: 'placeholder',
        type: 'string',
        default: "'Search...'",
        required: false,
        description: 'Placeholder text shown when input is empty',
      },
      {
        name: 'value',
        type: 'string',
        required: false,
        description: 'Current search value',
      },
    ],
    events: [
      {
        name: 'bpi-input',
        detail: '{ value: string }',
        description: 'Emitted when user types in the search field',
      },
    ],
    slots: [],
    examples: [
      {
        title: 'Basic SearchBar',
        description: 'Simple search input with default styling.',
        code: `<SearchBar />`,
      },
      {
        title: 'With Placeholder',
        description: 'Search bar with custom placeholder text.',
        code: `<SearchBar placeholder="Search products, orders, or customers..." />`,
      },
      {
        title: 'With Input Handling',
        description: 'Search bar with placeholder for text input.',
        code: `<SearchBar placeholder="Enter search term..." />`,
      },
    ],
  },
  {
    id: 'card',
    name: 'Card',
    tag: 'bpi-card',
    category: 'molecule',
    description: 'A container component for grouping related content with optional title and multiple layout variants. Supports flat and elevated visual styles for different emphasis levels. Can include header actions and footer sections for rich content composition.',
    props: [
      {
        name: 'title',
        type: 'string',
        required: false,
        description: 'Title displayed at the top of the card',
      },
      {
        name: 'variant',
        type: "'flat' | 'elevated'",
        default: "'flat'",
        required: false,
        description: 'Visual style variant of the card',
      },
    ],
    events: [],
    slots: [
      {
        name: 'default',
        description: 'Main content area of the card',
      },
      {
        name: 'header-action',
        description: 'Action buttons or controls displayed in the card header',
      },
      {
        name: 'footer',
        description: 'Footer content area typically for actions',
      },
    ],
    examples: [
      {
        title: 'Basic Card',
        description: 'Simple card with title and content.',
        code: `<Card title="Product Information">
  <p>High-quality product description and details go here.</p>
</Card>`,
      },
      {
        title: 'Elevated Card',
        description: 'Card with elevated variant for emphasis.',
        code: `<Card title="Premium Feature" variant="elevated">
  <p>This feature is highlighted with an elevated card style.</p>
</Card>`,
      },
      {
        title: 'Card with Header Actions',
        description: 'Card with action buttons in the header.',
        code: `<Card title="Settings">
  <p>Configure your preferences here.</p>
  <template slot="header-action">
    <Button variant="ghost" size="sm"><Icon name="settings" /></Button>
  </template>
</Card>`,
      },
      {
        title: 'Card with Footer',
        description: 'Card with footer actions.',
        code: `<Card title="Order Summary">
  <p>Total: ฿2,450</p>
  <template slot="footer">
    <Button>Place Order</Button>
    <Button variant="ghost">Cancel</Button>
  </template>
</Card>`,
      },
      {
        title: 'Media Card',
        description: 'Card with image and content side by side.',
        code: `<Card variant="elevated">
  <img src="product.jpg" alt="Product" style="width: 100%; border-radius: 4px; margin-bottom: 16px;" />
  <h3>Premium Wireless Headphones</h3>
  <p>High-quality sound with 30-hour battery life.</p>
  <template slot="footer">
    <Button>Add to Cart</Button>
    <span>฿3,990</span>
  </template>
</Card>`,
      },
    ],
  },
  {
    id: 'dialog',
    name: 'Dialog',
    tag: 'bpi-dialog',
    category: 'molecule',
    description: 'A modal dialog component for important user interactions and confirmations. Supports various sizes and can be configured as closable or persistent. Typically overlays the main content and requires user action to dismiss.',
    props: [
      {
        name: 'open',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Controls whether the dialog is visible',
      },
      {
        name: 'title',
        type: 'string',
        required: false,
        description: 'Dialog title displayed in the header',
      },
      {
        name: 'size',
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        required: false,
        description: 'Dialog size variant',
      },
      {
        name: 'closable',
        type: 'boolean',
        default: 'true',
        required: false,
        description: 'Shows close button in header',
      },
    ],
    events: [
      {
        name: 'bpi-close',
        detail: '{}',
        description: 'Emitted when dialog is closed',
      },
    ],
    slots: [],
    examples: [
      {
        title: 'Basic Dialog',
        description: 'Simple dialog with title and content. Click the button to open.',
        code: `<div>
  <Button variant="primary" onclick="this.nextElementSibling.setAttribute('open','')">Open Dialog</Button>
  <Dialog title="Welcome" closable>
    <p>Welcome to our application. This is a basic dialog.</p>
  </Dialog>
</div>`,
      },
      {
        title: 'Form Dialog',
        description: 'Dialog containing form inputs for user input.',
        code: `<div>
  <Button variant="primary" onclick="this.nextElementSibling.setAttribute('open','')">Create Account</Button>
  <Dialog title="Create Account" size="md" closable>
    <FormField label="Email" required>
      <TextField type="email" placeholder="you@example.com" />
    </FormField>
    <FormField label="Password" required>
      <TextField type="password" placeholder="Enter password" />
    </FormField>
    <div style="margin-top: 20px; display: flex; gap: 8px;">
      <Button>Create</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  </Dialog>
</div>`,
      },
      {
        title: 'Confirmation Dialog',
        description: 'Dialog for confirming destructive actions.',
        code: `<div>
  <Button variant="danger" onclick="this.nextElementSibling.setAttribute('open','')">Delete Item</Button>
  <Dialog title="Delete Item?" closable>
    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    <div style="margin-top: 20px; display: flex; gap: 8px; justify-content: flex-end;">
      <Button variant="danger">Delete</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  </Dialog>
</div>`,
      },
      {
        title: 'Dialog Sizes',
        description: 'Dialogs in small, medium, and large sizes.',
        code: `<div style="display: flex; gap: 8px; flex-wrap: wrap;">
  <Button variant="outline" onclick="this.parentElement.querySelector('#dlg-sm').setAttribute('open','')">Small</Button>
  <Button variant="outline" onclick="this.parentElement.querySelector('#dlg-md').setAttribute('open','')">Medium</Button>
  <Button variant="outline" onclick="this.parentElement.querySelector('#dlg-lg').setAttribute('open','')">Large</Button>
  <Dialog id="dlg-sm" title="Small Dialog" size="sm" closable>
    <p>This is a small dialog.</p>
  </Dialog>
  <Dialog id="dlg-md" title="Medium Dialog" size="md" closable>
    <p>This is a medium dialog with more room for content.</p>
  </Dialog>
  <Dialog id="dlg-lg" title="Large Dialog" size="lg" closable>
    <p>This is a large dialog for complex content and forms.</p>
  </Dialog>
</div>`,
      },
      {
        title: 'Dialog with Scrollable Content',
        description: 'Dialog with scrollable body for long content.',
        code: `<div>
  <Button variant="primary" onclick="this.nextElementSibling.setAttribute('open','')">Terms & Conditions</Button>
  <Dialog title="Terms & Conditions" size="md" closable>
    <div style="max-height: 300px; overflow-y: auto;">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
    <div style="margin-top: 20px;">
      <Button>Accept</Button>
    </div>
  </Dialog>
</div>`,
      },
    ],
  },
  {
    id: 'snackbar',
    name: 'Snackbar',
    tag: 'bpi-snackbar',
    category: 'molecule',
    description: 'A lightweight notification component that appears at the bottom of the screen to display brief messages. Supports multiple variants for different message types and can auto-dismiss after a set duration. Often used for confirming actions or displaying system feedback.',
    props: [
      {
        name: 'open',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Controls visibility of the snackbar',
      },
      {
        name: 'variant',
        type: "'success' | 'error' | 'warning' | 'info'",
        default: "'info'",
        required: false,
        description: 'Visual variant indicating message type',
      },
      {
        name: 'message',
        type: 'string',
        required: true,
        description: 'Text message displayed in the snackbar',
      },
      {
        name: 'duration',
        type: 'number',
        default: '3000',
        required: false,
        description: 'Auto-dismiss duration in milliseconds',
      },
      {
        name: 'position',
        type: 'string',
        default: "'bottom-center'",
        required: false,
        description: 'Position on screen (e.g., bottom-center, top-right)',
      },
    ],
    events: [
      {
        name: 'bpi-close',
        detail: '{}',
        description: 'Emitted when snackbar is dismissed',
      },
    ],
    slots: [],
    examples: [
      {
        title: 'Basic Snackbar',
        description: 'Click the button to show a snackbar notification.',
        code: `<div>
  <Button variant="primary" onclick="this.nextElementSibling.setAttribute('open','')">Show Snackbar</Button>
  <Snackbar message="Your changes have been saved." duration="0" />
</div>`,
      },
      {
        title: 'Variant Snackbar',
        description: 'Snackbars with different variants for various message types. Click each button to preview.',
        code: `<div style="display: flex; gap: 8px; flex-wrap: wrap;">
  <Button variant="success" onclick="this.parentElement.querySelector('#snack-success').setAttribute('open','')">Success</Button>
  <Button variant="danger" onclick="this.parentElement.querySelector('#snack-error').setAttribute('open','')">Error</Button>
  <Button variant="outline" onclick="this.parentElement.querySelector('#snack-warning').setAttribute('open','')">Warning</Button>
  <Button variant="primary" onclick="this.parentElement.querySelector('#snack-info').setAttribute('open','')">Info</Button>
  <Snackbar id="snack-success" variant="success" message="Operation completed successfully!" duration="3000" />
  <Snackbar id="snack-error" variant="error" message="An error occurred. Please try again." duration="3000" />
  <Snackbar id="snack-warning" variant="warning" message="This action is irreversible." duration="3000" />
  <Snackbar id="snack-info" variant="info" message="New updates are available." duration="3000" />
</div>`,
      },
      {
        title: 'Snackbar with Action',
        description: 'Snackbar with an action button for user interaction.',
        code: `<div>
  <Button variant="primary" onclick="this.nextElementSibling.setAttribute('open','')">Delete Item</Button>
  <Snackbar message="Item deleted" duration="0">
    <Button variant="ghost" size="sm">Undo</Button>
  </Snackbar>
</div>`,
      },
      {
        title: 'Auto-dismiss',
        description: 'Snackbar that automatically closes after 5 seconds.',
        code: `<div>
  <Button variant="primary" onclick="this.nextElementSibling.setAttribute('open','')">Show Auto-dismiss</Button>
  <Snackbar message="Processing your request..." duration="5000" />
</div>`,
      },
    ],
  },
  {
    id: 'tabs',
    name: 'Tabs',
    tag: 'bpi-tabs',
    category: 'molecule',
    description: 'A tabbed interface component for organizing content into multiple sections. Users can switch between tabs by clicking tab headers. Supports various tab styles and can display many tabs with horizontal scrolling when needed.',
    props: [
      {
        name: 'value',
        type: 'number | string',
        required: false,
        description: 'Index or identifier of the active tab',
      },
    ],
    events: [
      {
        name: 'bpi-tab-change',
        detail: '{ value: number | string }',
        description: 'Emitted when user switches to a different tab',
      },
    ],
    slots: [
      {
        name: 'default',
        description: 'Tab children elements with label attributes',
      },
    ],
    examples: [
      {
        title: 'Basic Tabs',
        description: 'Simple tab interface with three tabs.',
        code: `<Tabs value="overview">
  <Tab label="Overview">
    <p>Overview content goes here.</p>
  </Tab>
  <Tab label="Details">
    <p>Detailed information displayed here.</p>
  </Tab>
  <Tab label="Settings">
    <p>Settings and configuration options.</p>
  </Tab>
</Tabs>`,
      },
      {
        title: 'Tabs with Content',
        description: 'Tabs containing various content types.',
        code: `<Tabs value="profile">
  <Tab label="Profile">
    <Card title="User Profile">
      <p>Name: Pattawan Silpakul</p>
      <p>Email: pattawan@example.com</p>
    </Card>
  </Tab>
  <Tab label="Activity">
    <List>
      <ListItem>Logged in - 2024-03-05 10:30</ListItem>
      <ListItem>Changed password - 2024-03-03</ListItem>
    </List>
  </Tab>
</Tabs>`,
      },
      {
        title: 'Scrollable Tabs',
        description: 'Multiple tabs that scroll horizontally.',
        code: `<Tabs value="jan">
  <Tab label="Jan">January data</Tab>
  <Tab label="Feb">February data</Tab>
  <Tab label="Mar">March data</Tab>
  <Tab label="Apr">April data</Tab>
  <Tab label="May">May data</Tab>
  <Tab label="Jun">June data</Tab>
  <Tab label="Jul">July data</Tab>
  <Tab label="Aug">August data</Tab>
</Tabs>`,
      },
      {
        title: 'Icon Tabs',
        description: 'Tabs with icons for visual recognition.',
        code: `<Tabs value="home">
  <Tab label={<><Icon name="home" /> Home</>}>Home content</Tab>
  <Tab label={<><Icon name="notifications" /> Alerts</>}>3 new alerts</Tab>
  <Tab label={<><Icon name="settings" /> Settings</>}>Settings panel</Tab>
</Tabs>`,
      },
    ],
  },
  {
    id: 'breadcrumbs',
    name: 'Breadcrumbs',
    tag: 'bpi-breadcrumbs',
    category: 'molecule',
    description: 'A navigation component showing the current page location within a hierarchy. Typically displayed at the top of a page to help users understand their location and navigate back. Supports custom separators and clickable links.',
    props: [
      {
        name: 'separator',
        type: 'string',
        default: "'/'",
        required: false,
        description: 'Character or text used between breadcrumb items',
      },
    ],
    events: [],
    slots: [],
    examples: [
      {
        title: 'Basic Breadcrumbs',
        description: 'Simple breadcrumb navigation with text items.',
        code: `<Breadcrumbs>
  <BreadcrumbItem>Home</BreadcrumbItem>
  <BreadcrumbItem>Products</BreadcrumbItem>
  <BreadcrumbItem>Electronics</BreadcrumbItem>
  <BreadcrumbItem>Smartphones</BreadcrumbItem>
</Breadcrumbs>`,
      },
      {
        title: 'Custom Separator',
        description: 'Breadcrumbs with custom separator character.',
        code: `<Breadcrumbs separator=">">
  <BreadcrumbItem>Dashboard</BreadcrumbItem>
  <BreadcrumbItem>Reports</BreadcrumbItem>
  <BreadcrumbItem>Sales</BreadcrumbItem>
  <BreadcrumbItem>Q1 2024</BreadcrumbItem>
</Breadcrumbs>`,
      },
      {
        title: 'With Links',
        description: 'Breadcrumbs with clickable navigation links.',
        code: `<Breadcrumbs>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem href="/products/category">Category</BreadcrumbItem>
  <BreadcrumbItem>Current Product</BreadcrumbItem>
</Breadcrumbs>`,
      },
    ],
  },
  {
    id: 'pagination',
    name: 'Pagination',
    tag: 'bpi-pagination',
    category: 'molecule',
    description: 'A navigation component for splitting large datasets into pages. Provides controls to navigate between pages with optional page size selection. Often used with tables and lists to improve performance and user experience.',
    props: [
      {
        name: 'total',
        type: 'number',
        required: true,
        description: 'Total number of items in the dataset',
      },
      {
        name: 'page',
        type: 'number',
        default: '1',
        required: false,
        description: 'Current page number (1-indexed)',
      },
      {
        name: 'page-size',
        type: 'number',
        default: '10',
        required: false,
        description: 'Number of items displayed per page',
      },
    ],
    events: [
      {
        name: 'bpi-page-change',
        detail: '{ page: number }',
        description: 'Emitted when user navigates to a different page',
      },
    ],
    slots: [],
    examples: [
      {
        title: 'Basic Pagination',
        description: 'Simple pagination with default settings.',
        code: `<Pagination total="50" page="1" pageSize="10" />`,
      },
      {
        title: 'Large Dataset',
        description: 'Pagination for a large dataset with many pages.',
        code: `<Pagination total="500" page="1" pageSize="20" />`,
      },
      {
        title: 'Custom Page Size',
        description: 'Pagination with customizable items per page.',
        code: `<Pagination total="100" page="1" pageSize="10">
  <Select placeholder="Per page">
    <option value="5">5 per page</option>
    <option value="10">10 per page</option>
    <option value="25">25 per page</option>
  </Select>
</Pagination>`,
      },
      {
        title: 'Compact',
        description: 'Compact pagination for space-constrained layouts.',
        code: `<Pagination total="80" page="1" pageSize="10" compact />`,
      },
    ],
  },
  {
    id: 'menu',
    name: 'Menu',
    tag: 'bpi-menu',
    category: 'molecule',
    description: 'A dropdown menu component for displaying lists of actions or navigation options. Can be triggered by a button or context menu and supports icons, dividers, and disabled states. Automatically closes when an item is selected.',
    props: [
      {
        name: 'open',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Controls whether the menu is visible',
      },
    ],
    events: [
      {
        name: 'bpi-close',
        detail: '{}',
        description: 'Emitted when menu is closed',
      },
    ],
    slots: [],
    examples: [
      {
        title: 'Basic Menu',
        description: 'Simple dropdown menu with text items. Click the button to toggle.',
        code: `<div style="position: relative; display: inline-block;">
  <Button variant="outline" onclick="event.stopPropagation(); var m=this.nextElementSibling; m.hasAttribute('open') ? m.removeAttribute('open') : m.setAttribute('open','')">
    <Icon name="more-vertical" size="sm" /> Actions
  </Button>
  <Menu>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Duplicate</MenuItem>
    <MenuItem>Delete</MenuItem>
  </Menu>
</div>`,
      },
      {
        title: 'Menu with Icons',
        description: 'Menu items with icons for visual clarity.',
        code: `<div style="position: relative; display: inline-block;">
  <Button variant="primary" onclick="event.stopPropagation(); var m=this.nextElementSibling; m.hasAttribute('open') ? m.removeAttribute('open') : m.setAttribute('open','')">
    Profile Menu
  </Button>
  <Menu>
    <MenuItem><Icon name="edit" size="sm" /> Edit Profile</MenuItem>
    <MenuItem><Icon name="download" size="sm" /> Download Data</MenuItem>
    <MenuItem><Icon name="share" size="sm" /> Share</MenuItem>
    <MenuItem><Icon name="settings" size="sm" /> Settings</MenuItem>
  </Menu>
</div>`,
      },
      {
        title: 'Menu with Dividers',
        description: 'Menu with visual separators for grouping items.',
        code: `<div style="position: relative; display: inline-block;">
  <Button variant="outline" onclick="event.stopPropagation(); var m=this.nextElementSibling; m.hasAttribute('open') ? m.removeAttribute('open') : m.setAttribute('open','')">
    File Menu
  </Button>
  <Menu>
    <MenuItem>New File</MenuItem>
    <MenuItem>Open</MenuItem>
    <Divider />
    <MenuItem>Save</MenuItem>
    <MenuItem>Export</MenuItem>
    <Divider />
    <MenuItem>Exit</MenuItem>
  </Menu>
</div>`,
      },
      {
        title: 'Disabled Items',
        description: 'Menu with disabled items that cannot be selected.',
        code: `<div style="position: relative; display: inline-block;">
  <Button variant="outline" onclick="event.stopPropagation(); var m=this.nextElementSibling; m.hasAttribute('open') ? m.removeAttribute('open') : m.setAttribute('open','')">
    Edit Menu
  </Button>
  <Menu>
    <MenuItem>Cut</MenuItem>
    <MenuItem>Copy</MenuItem>
    <MenuItem disabled>Paste</MenuItem>
    <Divider />
    <MenuItem>Select All</MenuItem>
  </Menu>
</div>`,
      },
    ],
  },
  {
    id: 'select',
    name: 'Select',
    tag: 'bpi-select',
    category: 'molecule',
    description: 'A dropdown selection component for choosing one or more options from a list. Supports filtering with placeholder text, disabled states, error states, and single or multiple selection modes. Commonly used in forms and filters.',
    props: [
      {
        name: 'value',
        type: 'string | number | string[]',
        required: false,
        description: 'Currently selected value(s)',
      },
      {
        name: 'placeholder',
        type: 'string',
        required: false,
        description: 'Placeholder text shown when no option is selected',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables the select component',
      },
      {
        name: 'error',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Shows error state styling',
      },
      {
        name: 'label',
        type: 'string',
        required: false,
        description: 'Label displayed above the select',
      },
      {
        name: 'multiple',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Allows selecting multiple options',
      },
    ],
    events: [
      {
        name: 'bpi-change',
        detail: '{ value: string | string[] }',
        description: 'Emitted when selection changes',
      },
    ],
    slots: [],
    examples: [
      {
        title: 'Basic Select',
        description: 'Simple select dropdown with options.',
        code: `<Select placeholder="Choose an option">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</Select>`,
      },
      {
        title: 'With Placeholder',
        description: 'Select with placeholder and label.',
        code: `<Select label="Country" placeholder="Select a country">
  <option value="th">Thailand</option>
  <option value="us">United States</option>
  <option value="jp">Japan</option>
  <option value="uk">United Kingdom</option>
</Select>`,
      },
      {
        title: 'Disabled',
        description: 'Disabled select preventing user interaction.',
        code: `<Select label="Status" disabled value="readonly">
  <option value="readonly">Read Only</option>
</Select>`,
      },
      {
        title: 'Error State',
        description: 'Select in error state showing validation message.',
        code: `<FormField label="Category" error="Please select a category">
  <Select error placeholder="Select a category">
    <option value="electronics">Electronics</option>
    <option value="clothing">Clothing</option>
    <option value="food">Food</option>
  </Select>
</FormField>`,
      },
      {
        title: 'Multiple Select',
        description: 'Select allowing multiple options to be chosen.',
        code: `<Select label="Tags" multiple placeholder="Select tags">
  <option value="tag1">React</option>
  <option value="tag2">Vue</option>
  <option value="tag3">Angular</option>
  <option value="tag4">Svelte</option>
</Select>`,
      },
    ],
  },
  {
    id: 'autocomplete',
    name: 'Autocomplete',
    tag: 'bpi-autocomplete',
    category: 'molecule',
    description: 'An input component that provides suggestions as the user types. Filters options based on input and allows quick selection from suggestions. Supports grouped options and custom filtering logic.',
    props: [
      {
        name: 'options',
        type: 'Array',
        required: true,
        description: 'Array of options in JSON format',
      },
      {
        name: 'placeholder',
        type: 'string',
        required: false,
        description: 'Placeholder text for the input',
      },
      {
        name: 'value',
        type: 'string',
        required: false,
        description: 'Current input value',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables the autocomplete input',
      },
      {
        name: 'label',
        type: 'string',
        required: false,
        description: 'Label displayed above the input',
      },
    ],
    events: [
      {
        name: 'bpi-change',
        detail: '{ value: string }',
        description: 'Emitted when value or selection changes',
      },
    ],
    slots: [],
    examples: [
      {
        title: 'Basic Autocomplete',
        description: 'Autocomplete with simple string options.',
        code: `<Autocomplete
  label="Search Users"
  options={['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince']}
/>`,
      },
      {
        title: 'With Placeholder',
        description: 'Autocomplete with custom placeholder.',
        code: `<Autocomplete
  placeholder="Type to search countries..."
  options={['Thailand', 'Turkey', 'Tunisia', 'Tanzania']}
/>`,
      },
      {
        title: 'Disabled',
        description: 'Disabled autocomplete field.',
        code: `<Autocomplete
  label="Fixed Value"
  disabled
  value="No Selection"
  options={[]}
/>`,
      },
      {
        title: 'Grouped Options',
        description: 'Autocomplete with option groups.',
        code: `<Autocomplete
  label="Programming Languages"
  options={[
    { group: 'Frontend', options: ['JavaScript', 'TypeScript', 'React'] },
    { group: 'Backend', options: ['Node.js', 'Python', 'Go'] }
  ]}
/>`,
      },
    ],
  },
  {
    id: 'list',
    name: 'List',
    tag: 'bpi-list',
    category: 'molecule',
    description: 'A container component for displaying a vertical list of items. Supports dense and standard spacing modes. Can include icons, avatars, and action buttons for rich list item content.',
    props: [
      {
        name: 'dense',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Reduces spacing for compact layout',
      },
    ],
    events: [],
    slots: [],
    examples: [
      {
        title: 'Basic List',
        description: 'Simple list with text items.',
        code: `<List>
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</List>`,
      },
      {
        title: 'Dense List',
        description: 'Compact list with reduced spacing.',
        code: `<List dense>
  <ListItem>Inbox</ListItem>
  <ListItem>Drafts</ListItem>
  <ListItem>Sent</ListItem>
  <ListItem>Trash</ListItem>
</List>`,
      },
      {
        title: 'List with Icons',
        description: 'List items with icons for visual context.',
        code: `<List>
  <ListItem><Icon name="home" /> Home</ListItem>
  <ListItem><Icon name="user" /> Profile</ListItem>
  <ListItem><Icon name="settings" /> Settings</ListItem>
  <ListItem><Icon name="help-circle" /> Help</ListItem>
</List>`,
      },
      {
        title: 'Interactive List',
        description: 'List with clickable items and action buttons.',
        code: `<List>
  <ListItem>
    <span>Pattawan Silpakul</span>
    <Button variant="ghost" size="sm"><Icon name="delete" /></Button>
  </ListItem>
  <ListItem>
    <span>David Johnson</span>
    <Button variant="ghost" size="sm"><Icon name="delete" /></Button>
  </ListItem>
  <ListItem>
    <span>Yuki Tanaka</span>
    <Button variant="ghost" size="sm"><Icon name="delete" /></Button>
  </ListItem>
</List>`,
      },
    ],
  },
  {
    id: 'accordion',
    name: 'Accordion',
    tag: 'bpi-accordion',
    category: 'molecule',
    description: 'A collapsible content component for organizing information into expandable sections. Only one section can be open at a time in standard mode. Useful for FAQs, product specifications, and progressive disclosure of information.',
    props: [
      {
        name: 'open',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Controls whether the accordion section is expanded',
      },
      {
        name: 'title',
        type: 'string',
        required: true,
        description: 'Title displayed in the accordion header',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Prevents opening this accordion section',
      },
    ],
    events: [
      {
        name: 'bpi-toggle',
        detail: '{ open: boolean }',
        description: 'Emitted when accordion is opened or closed',
      },
    ],
    slots: [],
    examples: [
      {
        title: 'Basic Accordion',
        description: 'Single accordion section with expandable content.',
        code: `<Accordion title="What is this product?">
  <p>This is a detailed description of the product and its features.</p>
</Accordion>`,
      },
      {
        title: 'Multiple Accordions (FAQ)',
        description: 'Multiple accordion sections for frequently asked questions.',
        code: `<div>
  <Accordion title="How do I reset my password?">
    <p>Click on 'Forgot Password' on the login page and follow the instructions sent to your email.</p>
  </Accordion>
  <Accordion title="What payment methods do you accept?">
    <p>We accept credit cards, debit cards, and digital wallets like Apple Pay and Google Pay.</p>
  </Accordion>
  <Accordion title="Is there a free trial?">
    <p>Yes, we offer a 14-day free trial with full access to all features.</p>
  </Accordion>
</div>`,
      },
      {
        title: 'Disabled',
        description: 'Accordion section that cannot be expanded.',
        code: `<Accordion title="Premium Feature (Locked)" disabled>
  <p>This feature is available in the premium plan.</p>
</Accordion>`,
      },
      {
        title: 'With Rich Content',
        description: 'Accordion containing complex content like forms or lists.',
        code: `<Accordion title="Shipping Information">
  <FormField label="Address" required>
    <TextField placeholder="Enter shipping address" />
  </FormField>
  <FormField label="City" required>
    <TextField placeholder="City" />
  </FormField>
  <FormField label="Postal Code" required>
    <TextField placeholder="Postal code" />
  </FormField>
</Accordion>`,
      },
    ],
  },
  {
    id: 'drawer',
    name: 'Drawer',
    tag: 'bpi-drawer',
    category: 'molecule',
    description: 'A side panel component that slides in from the edge of the screen. Commonly used for navigation menus, filters, or secondary content. Can slide from left or right and supports various width configurations.',
    props: [
      {
        name: 'open',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Controls whether the drawer is visible',
      },
      {
        name: 'position',
        type: "'left' | 'right'",
        default: "'left'",
        required: false,
        description: 'Side from which the drawer slides in',
      },
      {
        name: 'size',
        type: 'string',
        default: "'auto'",
        required: false,
        description: 'Width of the drawer (e.g., 250px, 40%, auto)',
      },
    ],
    events: [
      {
        name: 'bpi-close',
        detail: '{}',
        description: 'Emitted when drawer is closed',
      },
    ],
    slots: [],
    examples: [
      {
        title: 'Left Drawer',
        description: 'Navigation drawer sliding from the left. Click the button to open.',
        code: `<div>
  <Button variant="primary" onclick="this.nextElementSibling.setAttribute('open','')">
    <Icon name="menu" size="sm" /> Open Menu
  </Button>
  <Drawer position="left">
    <h3 style="padding: 16px;">Navigation</h3>
    <List>
      <ListItem>Dashboard</ListItem>
      <ListItem>Products</ListItem>
      <ListItem>Orders</ListItem>
      <ListItem>Analytics</ListItem>
    </List>
  </Drawer>
</div>`,
      },
      {
        title: 'Right Drawer',
        description: 'Filter drawer sliding from the right.',
        code: `<div>
  <Button variant="outline" onclick="this.nextElementSibling.setAttribute('open','')">
    <Icon name="filter" size="sm" /> Filters
  </Button>
  <Drawer position="right">
    <h3 style="padding: 16px;">Filters</h3>
    <div style="padding: 0 16px;">
      <FormField label="Category">
        <Select placeholder="Select category">
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
        </Select>
      </FormField>
      <FormField label="Price Range">
        <Slider min="0" max="10000" />
      </FormField>
    </div>
  </Drawer>
</div>`,
      },
      {
        title: 'Navigation Drawer',
        description: 'Full-height navigation menu drawer with custom width.',
        code: `<div>
  <Button variant="primary" onclick="this.nextElementSibling.setAttribute('open','')">Navigation</Button>
  <Drawer position="left" size="280px">
    <div style="padding: 20px;">
      <h2>Menu</h2>
      <List>
        <ListItem><Icon name="home" size="sm" /> Home</ListItem>
        <ListItem><Icon name="shopping-bag" size="sm" /> Shop</ListItem>
        <ListItem><Icon name="heart" size="sm" /> Wishlist</ListItem>
        <ListItem><Icon name="user" size="sm" /> Account</ListItem>
      </List>
    </div>
  </Drawer>
</div>`,
      },
      {
        title: 'Wide Drawer',
        description: 'Wide drawer for detailed content.',
        code: `<div>
  <Button variant="primary" onclick="this.nextElementSibling.setAttribute('open','')">Product Details</Button>
  <Drawer position="right" size="500px">
    <Card title="Product Details">
      <p>Detailed product information, specifications, and reviews go here.</p>
    </Card>
  </Drawer>
</div>`,
      },
    ],
  },
  {
    id: 'date-picker',
    name: 'DatePicker',
    tag: 'bpi-date-picker',
    category: 'molecule',
    description: 'An input component for selecting dates with an interactive calendar popup. Supports date range constraints with min and max properties. Can be used in forms for booking, filtering, or event scheduling.',
    props: [
      {
        name: 'value',
        type: 'string',
        required: false,
        description: 'Selected date in ISO format (YYYY-MM-DD)',
      },
      {
        name: 'min',
        type: 'string',
        required: false,
        description: 'Minimum selectable date (YYYY-MM-DD)',
      },
      {
        name: 'max',
        type: 'string',
        required: false,
        description: 'Maximum selectable date (YYYY-MM-DD)',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Disables the date picker',
      },
      {
        name: 'label',
        type: 'string',
        required: false,
        description: 'Label displayed above the input',
      },
      {
        name: 'placeholder',
        type: 'string',
        default: "'MM/DD/YYYY'",
        required: false,
        description: 'Placeholder text shown in the input',
      },
    ],
    events: [
      {
        name: 'bpi-change',
        detail: '{ value: string }',
        description: 'Emitted when date is selected',
      },
    ],
    slots: [],
    examples: [
      {
        title: 'Basic DatePicker',
        description: 'Simple date picker for selecting a date. Click the input to open the calendar.',
        code: `<DatePicker label="Event Date" />`,
      },
      {
        title: 'With Pre-selected Value',
        description: 'Date picker with a pre-selected date.',
        code: `<DatePicker label="Start Date" value="2024-06-15" />`,
      },
      {
        title: 'With Min/Max Range',
        description: 'Date picker with restricted selectable date range.',
        code: `<DatePicker label="Booking Date" min="2024-03-06" max="2024-12-31" />`,
      },
      {
        title: 'Disabled',
        description: 'Disabled date picker showing a fixed date.',
        code: `<DatePicker label="Appointment (Read-only)" disabled value="2024-03-15" />`,
      },
    ],
  },
  // ORGANISMS
  {
    id: 'data-table',
    name: 'DataTable',
    tag: 'bpi-data-table',
    category: 'organism',
    description: 'A comprehensive table component for displaying large datasets with built-in pagination, sorting, and filtering capabilities. Supports striped rows, responsive layouts, and custom cell content. Essential for data-heavy applications and admin dashboards.',
    props: [
      {
        name: 'striped',
        type: 'boolean',
        default: 'false',
        required: false,
        description: 'Alternates row colors for better readability',
      },
      {
        name: 'page',
        type: 'number',
        default: '1',
        required: false,
        description: 'Current page number',
      },
      {
        name: 'page-size',
        type: 'number',
        default: '10',
        required: false,
        description: 'Number of rows per page',
      },
      {
        name: 'total',
        type: 'number',
        required: true,
        description: 'Total number of rows in the dataset',
      },
      {
        name: 'empty-text',
        type: 'string',
        default: "'No data available'",
        required: false,
        description: 'Message displayed when table has no data',
      },
    ],
    events: [
      {
        name: 'bpi-sort',
        detail: '{ column: string; direction: asc | desc }',
        description: 'Emitted when user clicks sortable column header',
      },
      {
        name: 'bpi-page-change',
        detail: '{ page: number }',
        description: 'Emitted when user navigates to different page',
      },
    ],
    slots: [
      {
        name: 'default',
        description: 'Table content including thead and tbody elements',
      },
    ],
    examples: [
      {
        title: 'Basic Table',
        description: 'Order management table showing customer orders with status badges.',
        code: `<DataTable total={5} page={1} pageSize={5}>
  <thead>
    <tr>
      <th>Order ID</th>
      <th>Customer</th>
      <th>Items</th>
      <th>Total</th>
      <th>Date</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#ORD-2024-001</td>
      <td>Somchai Thongdee</td>
      <td>3</td>
      <td>฿4,590</td>
      <td>2024-03-05</td>
      <td><Badge variant="success">Delivered</Badge></td>
    </tr>
    <tr>
      <td>#ORD-2024-002</td>
      <td>Pattawan Srisuk</td>
      <td>1</td>
      <td>฿12,900</td>
      <td>2024-03-04</td>
      <td><Badge variant="warning">Shipping</Badge></td>
    </tr>
    <tr>
      <td>#ORD-2024-003</td>
      <td>David Johnson</td>
      <td>5</td>
      <td>฿2,340</td>
      <td>2024-03-03</td>
      <td><Badge variant="info">Processing</Badge></td>
    </tr>
    <tr>
      <td>#ORD-2024-004</td>
      <td>Nanthawan Kaewprasert</td>
      <td>2</td>
      <td>฿8,750</td>
      <td>2024-03-02</td>
      <td><Badge variant="success">Delivered</Badge></td>
    </tr>
    <tr>
      <td>#ORD-2024-005</td>
      <td>Wichit Promrak</td>
      <td>4</td>
      <td>฿15,200</td>
      <td>2024-03-01</td>
      <td><Badge variant="danger">Cancelled</Badge></td>
    </tr>
  </tbody>
</DataTable>`,
      },
      {
        title: 'Striped Rows',
        description: 'Employee directory with alternating row colors for improved readability.',
        code: `<DataTable striped total={8} page={1} pageSize={8}>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Department</th>
      <th>Position</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pattawan Silpakul</td>
      <td>pattawan@company.com</td>
      <td>Engineering</td>
      <td>Senior Developer</td>
      <td><Badge variant="success">Active</Badge></td>
    </tr>
    <tr>
      <td>Lisa Mueller</td>
      <td>lisa@company.com</td>
      <td>Design</td>
      <td>Design Lead</td>
      <td><Badge variant="success">Active</Badge></td>
    </tr>
    <tr>
      <td>Carlos Rodriguez</td>
      <td>carlos@company.com</td>
      <td>Marketing</td>
      <td>Marketing Manager</td>
      <td><Badge variant="warning">On Leave</Badge></td>
    </tr>
    <tr>
      <td>Hiroshi Yamamoto</td>
      <td>hiroshi@company.com</td>
      <td>Engineering</td>
      <td>DevOps Engineer</td>
      <td><Badge variant="success">Active</Badge></td>
    </tr>
    <tr>
      <td>Nina Patel</td>
      <td>nina@company.com</td>
      <td>Product</td>
      <td>Product Manager</td>
      <td><Badge variant="success">Active</Badge></td>
    </tr>
    <tr>
      <td>Jean Dubois</td>
      <td>jean@company.com</td>
      <td>Sales</td>
      <td>Sales Director</td>
      <td><Badge variant="success">Active</Badge></td>
    </tr>
    <tr>
      <td>Sofia Rossi</td>
      <td>sofia@company.com</td>
      <td>Engineering</td>
      <td>QA Engineer</td>
      <td><Badge variant="success">Active</Badge></td>
    </tr>
    <tr>
      <td>Michael Chen</td>
      <td>michael@company.com</td>
      <td>Finance</td>
      <td>Financial Analyst</td>
      <td><Badge variant="success">Active</Badge></td>
    </tr>
  </tbody>
</DataTable>`,
      },
      {
        title: 'With Pagination',
        description: 'Table displaying paginated data with 24 total records showing 5 per page.',
        code: `<DataTable striped total={24} page={1} pageSize={5}>
  <thead>
    <tr>
      <th>Product</th>
      <th>SKU</th>
      <th>Stock</th>
      <th>Price</th>
      <th>Last Updated</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Wireless Mouse</td>
      <td>SKU-001</td>
      <td>45</td>
      <td>฿890</td>
      <td>2024-03-05</td>
    </tr>
    <tr>
      <td>Mechanical Keyboard</td>
      <td>SKU-002</td>
      <td>28</td>
      <td>฿2,450</td>
      <td>2024-03-04</td>
    </tr>
    <tr>
      <td>USB-C Hub</td>
      <td>SKU-003</td>
      <td>12</td>
      <td>฿1,290</td>
      <td>2024-03-03</td>
    </tr>
    <tr>
      <td>Monitor Stand</td>
      <td>SKU-004</td>
      <td>8</td>
      <td>฿1,590</td>
      <td>2024-03-02</td>
    </tr>
    <tr>
      <td>Webcam HD</td>
      <td>SKU-005</td>
      <td>22</td>
      <td>฿1,450</td>
      <td>2024-03-01</td>
    </tr>
  </tbody>
</DataTable>`,
      },
      {
        title: 'Sortable Columns',
        description: 'Table with sortable column headers for reordering data.',
        code: `<DataTable striped total={12} page={1} pageSize={12}>
  <thead>
    <tr>
      <th style="cursor: pointer;">Project <Icon name="arrow-up" size="sm" /></th>
      <th style="cursor: pointer;">Team <Icon name="arrow-up" size="sm" /></th>
      <th style="cursor: pointer;">Progress <Icon name="arrow-up" size="sm" /></th>
      <th style="cursor: pointer;">Deadline <Icon name="arrow-up" size="sm" /></th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Website Redesign</td>
      <td>Design Team</td>
      <td><Slider value={75} disabled style="width: 100px;" /></td>
      <td>2024-04-15</td>
      <td><Badge variant="warning">In Progress</Badge></td>
    </tr>
    <tr>
      <td>Mobile App</td>
      <td>Engineering</td>
      <td><Slider value={45} disabled style="width: 100px;" /></td>
      <td>2024-05-30</td>
      <td><Badge variant="warning">In Progress</Badge></td>
    </tr>
    <tr>
      <td>API Integration</td>
      <td>Backend Team</td>
      <td><Slider value={90} disabled style="width: 100px;" /></td>
      <td>2024-03-20</td>
      <td><Badge variant="success">Near Complete</Badge></td>
    </tr>
  </tbody>
</DataTable>`,
      },
      {
        title: 'Empty State',
        description: 'Table displaying custom empty state when no data is available.',
        code: `<DataTable total={0} page={1} pageSize={10} emptyText="No orders found. Start by creating a new order.">
  <thead>
    <tr>
      <th>Order ID</th>
      <th>Customer</th>
      <th>Amount</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</DataTable>`,
      },
      {
        title: 'With Status Badges',
        description: 'Project tracking table with multiple status badge variants.',
        code: `<DataTable striped total={6} page={1} pageSize={6}>
  <thead>
    <tr>
      <th>Project</th>
      <th>Manager</th>
      <th>Budget</th>
      <th>Spent</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Q1 Marketing Campaign</td>
      <td>Carlos Rodriguez</td>
      <td>฿50,000</td>
      <td>฿42,300</td>
      <td><Badge variant="success">On Track</Badge></td>
    </tr>
    <tr>
      <td>Infrastructure Upgrade</td>
      <td>Pattawan Silpakul</td>
      <td>฿120,000</td>
      <td>฿98,500</td>
      <td><Badge variant="warning">At Risk</Badge></td>
    </tr>
    <tr>
      <td>Customer Portal</td>
      <td>Lisa Mueller</td>
      <td>฿80,000</td>
      <td>฿65,200</td>
      <td><Badge variant="success">On Track</Badge></td>
    </tr>
    <tr>
      <td>Data Analytics Setup</td>
      <td>Michael Chen</td>
      <td>฿35,000</td>
      <td>฿28,900</td>
      <td><Badge variant="info">Planning</Badge></td>
    </tr>
    <tr>
      <td>Security Audit</td>
      <td>Sofia Rossi</td>
      <td>฿45,000</td>
      <td>฿45,000</td>
      <td><Badge variant="success">Completed</Badge></td>
    </tr>
    <tr>
      <td>Mobile App Launch</td>
      <td>Hiroshi Yamamoto</td>
      <td>฿95,000</td>
      <td>฿110,200</td>
      <td><Badge variant="danger">Over Budget</Badge></td>
    </tr>
  </tbody>
</DataTable>`,
      },
    ],
  },
  {
    id: 'navbar',
    name: 'Navbar',
    tag: 'bpi-navbar',
    category: 'organism',
    description: 'A horizontal navigation bar typically positioned at the top of the page. Contains logo, navigation links, and user account actions. Responsive and collapses to mobile menu on smaller screens.',
    props: [],
    events: [],
    slots: [],
    examples: [
      {
        title: 'Basic Navbar',
        description: 'Simple navigation bar with logo and menu items.',
        code: `<Navbar>
  <Logo />
  <NavLink href="/">Home</NavLink>
  <NavLink href="/products">Products</NavLink>
  <NavLink href="/about">About</NavLink>
  <Button variant="primary">Sign In</Button>
</Navbar>`,
      },
      {
        title: 'With User Menu',
        description: 'Navigation bar with user profile dropdown menu.',
        code: `<Navbar>
  <span style="font-weight: bold; font-size: 1.2rem;">MyApp</span>
  <a href="/dashboard" style="margin-left: 24px;">Dashboard</a>
  <a href="/documentation" style="margin-left: 16px;">Docs</a>
  <div style="margin-left: auto; position: relative; display: inline-block;">
    <Button variant="ghost" onclick="event.stopPropagation(); var m=this.nextElementSibling; m.hasAttribute('open') ? m.removeAttribute('open') : m.setAttribute('open','')">
      <Icon name="user" size="sm" /> Account
    </Button>
    <Menu>
      <MenuItem>Profile</MenuItem>
      <MenuItem>Settings</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  </div>
</Navbar>`,
      },
    ],
  },
  {
    id: 'sidebar',
    name: 'Sidebar',
    tag: 'bpi-sidebar',
    category: 'organism',
    description: 'A vertical navigation panel typically positioned on the left side of the page. Contains navigation menu items, often with icons. Can collapse to icon-only mode on narrower viewports.',
    props: [],
    events: [],
    slots: [],
    examples: [
      {
        title: 'Navigation Sidebar',
        description: 'Vertical navigation menu with expandable sections.',
        code: `<Sidebar>
  <SidebarItem icon="home" label="Dashboard" href="/dashboard" />
  <SidebarItem icon="shopping-bag" label="Products" href="/products" />
  <SidebarSection label="Management">
    <SidebarItem icon="users" label="Customers" href="/customers" />
    <SidebarItem icon="file" label="Orders" href="/orders" />
    <SidebarItem icon="package" label="Inventory" href="/inventory" />
  </SidebarSection>
  <SidebarSection label="Settings">
    <SidebarItem icon="settings" label="Configuration" href="/settings" />
    <SidebarItem icon="lock" label="Security" href="/security" />
  </SidebarSection>
</Sidebar>`,
      },
      {
        title: 'Collapsible Sidebar',
        description: 'Sidebar that collapses to icon view for space efficiency.',
        code: `<Sidebar collapsed={false}>
  <SidebarToggle />
  <SidebarItem icon="home" label="Dashboard" href="/dashboard" />
  <SidebarItem icon="chart-bar" label="Analytics" href="/analytics" />
  <SidebarItem icon="mail" label="Messages" href="/messages" />
  <SidebarItem icon="settings" label="Settings" href="/settings" />
</Sidebar>`,
      },
    ],
  },
];
