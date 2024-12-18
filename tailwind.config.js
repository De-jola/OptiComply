/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1540px",
      "3xl": "1728px",
    },
    extend: {
      colors: {
        header: "#39312F",
      },
    },
    fontFamily: {
      header: "Signate Grotesk",
      body: "Inter",
    },

    plugins: [],
    corePlugins: {
      scrollBehavior: true,
    },
  },
};
