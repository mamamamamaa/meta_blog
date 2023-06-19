/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css,module.css,module}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        workSans: ["Work Sans", ...defaultTheme.fontFamily.sans],
        plusJakarta: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      "secondary/50": "#F6F6F7",
      "secondary/100": "#F4F4F5",
      "secondary/200": "#DCDDDF",
      "secondary/300": "#BABABF",
      "secondary/400": "#97989F",
      "secondary/500": "#696A75;",
      "secondary/600": "#3B3C4A",
      "secondary/700": "#242535",
      "secondary/800": "#181A2A",
      "secondary/900": "#141624",
      white: "white",
      accent: "#4B6BFB",
      accentBg: "rgba(75, 107, 251, 0.05)",
      dark: "#181A2A",
      semidark: "#242535",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
