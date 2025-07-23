// tailwind.config.ts
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0d0d",
        primary: "#ff4f96", // neonowy róż
        accent: "#58cced", // jasny błękit
        border: 'rgba(255, 255, 255, 0.1)', // lub dowolny inny kolor
        foreground: "#ffffff", // 👈 Dodaj ten kolor
      },
      fontFamily: {
        sans: ["'Satoshi'", "Inter", "sans-serif"], // lub Space Grotesk
      },
      boxShadow: {
        glow: "0 0 15px rgba(255, 79, 150, 0.5)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-image-fill": {
          '-webkit-text-fill-color': 'transparent',
          'background-image': 'url("/assets/images/dawid-agency.webp")',
          'background-position': '50%',
          'background-size': 'cover',
          'background-attachment': 'fixed',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'padding-bottom': '5px',
          'display': 'inline',
          'position': 'relative',
        },
      });
    }),
  ],
};
export default config;
