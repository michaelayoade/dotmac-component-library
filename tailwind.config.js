/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./packages/*/src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic colors (shadcn/ui compatible)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Portal-specific colors
        admin: {
          primary: "#3b82f6",
          secondary: "#64748b",
        },
        customer: {
          primary: "#10b981",
          secondary: "#059669",
        },
        reseller: {
          primary: "#8b5cf6",
          secondary: "#7c3aed",
        },
        technician: {
          primary: "#f97316",
          secondary: "#ea580c",
        },
        management: {
          primary: "#0ea5e9",
          secondary: "#0284c7",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: [
          "Fira Code",
          "SF Mono",
          "Monaco",
          "Cascadia Code",
          "Roboto Mono",
          "Consolas",
          "monospace",
        ],
      },
      animation: {
        "fade-in": "fadeIn 200ms ease-out",
        "fade-out": "fadeOut 150ms ease-in",
        "slide-in": "slideIn 300ms ease-out",
        "slide-out": "slideOut 200ms ease-in",
        "scale-in": "scaleIn 200ms ease-out",
        "scale-out": "scaleOut 150ms ease-in",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideIn: {
          from: { transform: "translateY(-10px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        slideOut: {
          from: { transform: "translateY(0)", opacity: "1" },
          to: { transform: "translateY(-10px)", opacity: "0" },
        },
        scaleIn: {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        scaleOut: {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
