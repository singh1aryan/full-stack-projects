const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Spline Sans", ...defaultTheme.fontFamily.sans],
        mono: ["Spline Sans Mono", ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        "9xl": "7rem",
      },
      colors: {
        gray: {
          25: "#FDFDFC",
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D7D3D0",
          400: "#A9A29D",
          500: "#79716B",
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
          900: "#1C1917",
          950: "#171412",
        },
        primary: {
          25: "#FAFEF5",
          50: "#F3FEE7",
          100: "#E3FBCC",
          200: "#D0F8AB",
          300: "#A6EF66",
          400: "#85E139",
          500: "#65C51C",
          600: "#4BA30C",
          700: "#3A7C0E",
          800: "#316211",
          900: "#2B5313",
          950: "#15290A",
        },
      },
    },
  },
  plugins: [],
};
