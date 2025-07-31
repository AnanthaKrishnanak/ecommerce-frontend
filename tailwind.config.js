/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1677ff",
        secondary: "#f0f0f0",
        error: "#ff4d4f",
        warning: "#faad14",
        success: "#52c41a",
        info: "#1677ff",
        border: {
          default: "#1677ff",
        },
      },
    },
  },
  plugins: [],
};
