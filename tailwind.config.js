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
      // fontSize: {
      //   xs: ["0.75rem", { lineHeight: "1rem" }],
      //   sm: ["0.875rem", { lineHeight: "1.25rem" }],
      //   base: ["1rem", { lineHeight: "1.5rem" }],
      //   lg: ["1.125rem", { lineHeight: "1.75rem" }],
      //   xl: ["1.25rem", { lineHeight: "1.75rem" }],
      //   "2xl": ["1.5rem", { lineHeight: "2rem" }],
      //   "3xl": ["1.6875rem", { lineHeight: "2.25rem" }],
      //   "4xl": ["2.25rem", { lineHeight: "2.875rem" }],
      //   "5xl": ["2.75rem", { lineHeight: "1.2" }],
      //   "6xl": ["3.5rem", { lineHeight: "1.2" }],
      //   "7xl": ["4.25rem", { lineHeight: "1.1872" }],
      //   "8xl": ["6rem", { lineHeight: "1" }],
      //   "9xl": ["8rem", { lineHeight: "1" }],
      // },
      // borderRadius: {
      //   "4xl": "2.5rem",
      // },
      // letterSpacing: {
      //   widest: "0.15em",
      // },
      // lineHeight: {
      //   loose: "1.875",
      // },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
