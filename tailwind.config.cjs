/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      "secondary/100": "#F4F4F5",
      white: "white",
      accent: "#4B6BFB",
      dark: "#181A2A",
    },
  },
  plugins: [],
};
