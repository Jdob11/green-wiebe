import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "greens": "url('/green-background.jpg')",
        "sicamous": "url('/Sicamous.jpg')",
        'custom-gradient': "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(21,128,61,1) 100%), url('/green-background.jpg')",
      },
      backgroundColor: {
        'navbar': '#354719',
        'footer': '#273668',
        'button': '#273668',
      },
      textShadow: {
        sm: '1px 1px 0 rgba(0, 0, 0, 0.5)',
        md: '2px 2px 0 rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 0 rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    plugin(function({ addComponents, theme, e }) {
      const shadows = theme('textShadow') || {};
      const textShadowComponents = Object.keys(shadows).map(key => ({
        [`.${e(`text-shadow-${key}`)}`]: {
          textShadow: shadows[key],
        },
      }));
      addComponents(textShadowComponents);
    }),
  ],
  variants: {
    extend: {
      textShadow: ['responsive', 'hover'],
    },
  },
};

export default config;
