module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  safelist: [
    "bg-white",
    "border-b",
    "border-primary-200",
    "lg:col-span-2",
    "lg:col-span-3",
    "lg:col-span-4",
    "xl:grid-cols-4",
    "xl:col-span-4",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F8F9FF", // backgrounds muted light
          100: "#eff0ff", // labels background light
          200: "#ECEFF8", // borders light
          400: "#ff9347", // brand orange lighter
          500: "#ff8833", // brand main orange
          600: "#e57a2d", // brand orange darker
          700: "#2b33ff", // label text light
          800: "#211F49", // borders dark
          900: "#151332", // backgrounds muted dark
          950: "#080627", // backgrounds dark
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 120s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
