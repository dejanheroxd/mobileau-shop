/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#F6F2E5",
      },
      screens: {
        tablet: "600px",
      },
    },
  },
  plugins: [],
};
