import type { Config } from "tailwindcss";

const config: Config = {
 content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  screens: {
   "2xl": { max: "1535px" },

   xl: { max: "1279px" },

   lg: { max: "1024px" },

   md: { max: "768px" },

   sm: { max: "639px" },
  },
  extend: {
   backgroundImage: {
    "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    "gradient-conic":
     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
   },
   fontFamily: {
    monument: "var(--font-monument)",
    satoshi: "var(--font-satoshi)",
   },
   colors: {
    "nf-black": "#000000",
    "nf-white": "#FFFFFF",
    "nf-purple": "#AB23FF",
    "nf-blue": "#3D8BFF",
    "nf-gradient": "linear-gradiient(to right, #3D8BFF,#AB23FF)",
    "nf-gray-text": "#46505F",
    "nf-gray": "#13171D",
    "nf-card-bg": "rgba(19,23,29,0.6)",
   },
   fontSize: {
    "nf-header-lg": "4.2rem",
    "nf-header-md": "2.75rem",
    "nf-header-sm": "2rem",
    "nf-title-lg": "2.375rem",
    "nf-title-md": "1.75rem",
    "nf-title-sm": "1.375rem",
    "nf-subTitle": "1.375rem",
    "nf-subTitle-md": "1.125rem",
    "nf-body": "1.125rem",
    "nf-body-sm": "1rem",
    "nf-caption": "0.75rem",
    "nf-caption-xs": "0.625rem",
   },
  },
 },
 plugins: [],
};
export default config;
