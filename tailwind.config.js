/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Dinosaur: ['"Little Dinosaur"'],
      },
      colors: {
        background: "#181818",
        primary: "#C0A02E",
        white: "#FFFFFF",
        shadow: "#7B706D",
        card: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
