/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        success: "#064e3b",
        error: "#b91c1c",
        primary: "#0369a1",
        secondary: "#854d0e",
        tertiary: "#6b21a8",
        neutral: "#525252"
      },
      ringColor:{
        success: "#16a34a33",
        error: "#dc26261a",
        primary: "#1d4ed81a",
        secondary: "#ca8a0433",
        tertiary: "#7e22ce1a",
        neutral: "#6b72801a"
      },
      backgroundColor: {
        success: "#f0fdf4",
        error: "#fef2f2",
        primary: "#eff6ff",
        secondary: "#fefce8",
        tertiary: "#faf5ff",
        neutral: "#fafafa"
      }
    },
  },
  plugins: [],
}