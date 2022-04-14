module.exports = {
  mode: process.env.NODE_ENV ? "jit" : undefined,
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      gridTemplateColumns: {
        aboutCourseGird: "50% 50%"
      },
      colors: {
        c_orange_light: "#FFBCB7",
        c_orange: "#EF8249",
        c_orange_dark: "#C06A3B",
      },
      screens: {
        smx: "468px",
        mdx: "840px",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        serif: ["Raleway", "serif"],
      },
    },
  },
  plugins: [],
};
