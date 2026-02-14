export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        muted: "#A1A1A1",
        accent: "#7CFF00",
        border: "#1A1A1A",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        hero: "-0.04em",
      },
      boxShadow: {
        subtle: "0 0 0 1px #1A1A1A",
      },
    },
  },
  plugins: [],
};
