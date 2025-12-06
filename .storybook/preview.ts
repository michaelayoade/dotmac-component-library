import type { Preview } from "@storybook/react";
import "../packages/design-tokens/src/styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1a1a2e" },
        { name: "admin", value: "#f8fafc" },
        { name: "customer", value: "#f0fdf4" },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: { width: "375px", height: "667px" },
        },
        tablet: {
          name: "Tablet",
          styles: { width: "768px", height: "1024px" },
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1440px", height: "900px" },
        },
      },
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Portal theme",
      defaultValue: "admin",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "admin", title: "Admin Portal" },
          { value: "customer", title: "Customer Portal" },
          { value: "reseller", title: "Reseller Portal" },
          { value: "technician", title: "Technician Portal" },
          { value: "management", title: "Management Portal" },
        ],
        showName: true,
      },
    },
  },
};

export default preview;
