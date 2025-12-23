# DotMac Component Library

A production-ready React component library built with TypeScript, Tailwind CSS, and Radix UI primitives. Designed for building enterprise-grade admin portals, dashboards, and data-heavy applications.

## Packages

| Package | Description | Version |
|---------|-------------|---------|
| [`@dotmac/design-tokens`](./packages/design-tokens) | Foundation design system: colors, typography, spacing, motion | 1.0.0 |
| [`@dotmac/core`](./packages/core) | Primitive and styled UI components | 1.0.0 |
| [`@dotmac/data-table`](./packages/data-table) | Advanced data table with TanStack Table | 1.0.0 |
| [`@dotmac/forms`](./packages/forms) | Form components with react-hook-form | 1.0.0 |
| [`@dotmac/charts`](./packages/charts) | Chart components with Recharts | 1.0.0 |
| [`@dotmac/dashboards`](./packages/dashboards) | Dashboard layouts and KPI components | 1.0.0 |

## Features

- **TypeScript-first** - Full type safety with strict mode enabled
- **Themeable** - Multiple portal variants (admin, customer, reseller, technician, management)
- **Dark mode** - Built-in dark mode support with system preference detection
- **Accessible** - Built on Radix UI primitives with ARIA labels
- **Responsive** - Mobile-friendly with responsive breakpoints
- **Tree-shakeable** - Only import what you need

## Installation

```bash
# Install all packages
pnpm add @dotmac/design-tokens @dotmac/core @dotmac/data-table @dotmac/forms @dotmac/charts @dotmac/dashboards

# Or install individual packages
pnpm add @dotmac/core
```

## Quick Start

### 1. Set up the Theme Provider

```tsx
import { ThemeProvider } from '@dotmac/design-tokens';

function App() {
  return (
    <ThemeProvider defaultVariant="admin" defaultColorScheme="light">
      <YourApp />
    </ThemeProvider>
  );
}
```

### 2. Import and use components

```tsx
import { Button, Card, CardHeader, CardContent } from '@dotmac/core';

function Dashboard() {
  return (
    <Card>
      <CardHeader>
        <h2>Welcome</h2>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

### 3. Use the Data Table

```tsx
import { DataTable } from '@dotmac/data-table';

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'status', header: 'Status' },
];

function UsersTable({ users }) {
  return (
    <DataTable
      data={users}
      columns={columns}
      searchable
      pagination
      selectable
      exportable
    />
  );
}
```

### 4. Build forms with validation

```tsx
import { Form, FormField, FormInput, FormSelect } from '@dotmac/forms';
import { zodResolver } from '@dotmac/forms/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

function ContactForm() {
  return (
    <Form
      resolver={zodResolver(schema)}
      onSubmit={(data) => console.log(data)}
    >
      <FormField name="name" label="Name">
        <FormInput placeholder="Enter your name" />
      </FormField>
      <FormField name="email" label="Email">
        <FormInput type="email" placeholder="Enter your email" />
      </FormField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
```

## Development

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Setup

```bash
# Clone the repository
git clone https://github.com/dotmac/component-library.git
cd component-library

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start Storybook
pnpm storybook
```

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm build` | Build all packages |
| `pnpm dev` | Watch mode for all packages |
| `pnpm storybook` | Start Storybook on port 6006 |
| `pnpm test` | Run tests across all packages |
| `pnpm lint` | Lint all packages |
| `pnpm typecheck` | Type-check all packages |
| `pnpm clean` | Clean build artifacts |

## Architecture

```
packages/
├── design-tokens/     # Foundation layer
│   ├── colors         # Color scales and semantic colors
│   ├── typography     # Font families, sizes, weights
│   ├── spacing        # Spacing scale and semantic spacing
│   ├── motion         # Animation durations and easings
│   └── theme          # ThemeProvider and hooks
│
├── core/              # Component layer
│   ├── primitives/    # Unstyled, accessible base components
│   │   ├── Button
│   │   ├── Input
│   │   ├── Card
│   │   ├── Modal
│   │   ├── Select
│   │   └── Toast
│   └── styled/        # Pre-styled convenience components
│       ├── StyledButton
│       ├── MetricCard
│       └── SearchInput
│
├── data-table/        # Advanced table features
│   └── DataTable      # Server pagination, selection, export
│
├── forms/             # Form handling
│   ├── Form           # react-hook-form wrapper
│   ├── FormField      # Field container with labels/errors
│   └── adapters/      # Zod and Yup validation
│
├── charts/            # Data visualization
│   ├── LineChart
│   ├── BarChart
│   └── PieChart
│
└── dashboards/        # Dashboard components
    ├── KPITile        # Metric display with trends
    ├── FilterBar      # Dashboard filters
    └── DashboardLayout
```

## Theming

### Portal Variants

The library supports multiple portal color schemes:

```tsx
<ThemeProvider defaultVariant="admin">      {/* Blue theme */}
<ThemeProvider defaultVariant="customer">   {/* Green theme */}
<ThemeProvider defaultVariant="reseller">   {/* Purple theme */}
<ThemeProvider defaultVariant="technician"> {/* Orange theme */}
<ThemeProvider defaultVariant="management"> {/* Slate theme */}
```

### Density Modes

Adjust spacing for different contexts:

```tsx
<ThemeProvider defaultDensity="compact">     {/* Tight spacing */}
<ThemeProvider defaultDensity="comfortable"> {/* Default */}
<ThemeProvider defaultDensity="spacious">    {/* Generous spacing */}
```

### Dark Mode

```tsx
<ThemeProvider defaultColorScheme="light">  {/* Light mode */}
<ThemeProvider defaultColorScheme="dark">   {/* Dark mode */}
<ThemeProvider defaultColorScheme="system"> {/* Follow OS preference */}
```

### Using Theme in Components

```tsx
import { useTheme, useThemeColors } from '@dotmac/design-tokens';

function MyComponent() {
  const { isDarkMode, setColorScheme } = useTheme();
  const colors = useThemeColors();

  return (
    <div style={{ color: colors.primary[500] }}>
      <button onClick={() => setColorScheme(isDarkMode ? 'light' : 'dark')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT
