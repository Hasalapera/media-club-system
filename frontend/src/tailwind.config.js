/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#f07d01",
        accent: "#ff9800",

        // Light Mode
        'light-bg': '#ffffff',
        'light-surface': '#f8f9fa',
        'light-text': '#1a1a1a',
        'light-text-muted': '#666666',
        'light-border': '#e0e0e0',

        // Dark Mode
        'dark-bg': '#121212',
        'dark-surface': '#1e1e1e',
        'dark-text': '#ffffff',
        'dark-text-muted': '#b0b0b0',
        'dark-border': '#333333',

        // Status
        success: "#4caf50",
        error: "#f44336",
        warning: "#ffc107",
        info: "#2196f3",
      },
      fontFamily: {
        main: ["'Poppins'", "sans-serif"],
        sinhala: ["'Abhaya Libre'", "serif"],
        tamil: ["'Arima'", "cursive"],
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      }
    },
  },
  plugins: [],
}