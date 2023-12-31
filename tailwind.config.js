/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "web-dark": "#233B50",
        "web-cyan": "#00CECE",
        "web-gray": "#6D758F",
        "web-white": "#F3F3F3",
        "web-almostwhite": "#B4B9C9",
        "web-pure": "#FFFFFF",
      },
      backgroundImage: {
        hero: "url('./assets/images/hero.jpg')",
      },
      spacing: {
        "web-screen": "75rem",
        "web-30": "32rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  fontFamily: {
    sans: ["Inter", "sans-serif"],
  },
  variants: {},
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "light",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
