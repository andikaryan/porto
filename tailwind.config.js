/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode
        background: {
          DEFAULT: '#f8fafc', // light background
          dark: '#0f172a',   // dark background (slate-900)
        },
        primary: {
          DEFAULT: '#2563eb', // blue-600 for light mode
          dark: '#60a5fa',   // blue-400 for dark mode
        },
        // Dark mode specific colors
        'dark-card': '#1e293b',  // slate-800
        'dark-surface': '#0f172a', // slate-900
        'dark-border': '#334155', // slate-700
        // Text colors
        'light-text': '#0f172a',  // slate-900 for light mode
        'dark-text': '#f1f5f9',   // slate-100 for dark mode
        'dark-text-secondary': '#94a3b8', // slate-400
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
          },
        },
      },
      boxShadow: {
        'dark': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
