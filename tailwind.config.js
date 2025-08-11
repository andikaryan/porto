/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Force dark mode colors
        background: {
          DEFAULT: '#0f172a', // Always dark
        },
        primary: {
          DEFAULT: '#60a5fa', // Always blue-400 (dark mode color)
        },
        // Dark mode specific colors
        'dark-card': '#1e293b',  // slate-800
        'dark-surface': '#0f172a', // slate-900
        'dark-border': '#334155', // slate-700
        // Text colors - always dark mode
        'light-text': '#f1f5f9',  // Always light text
        'dark-text': '#f1f5f9',   // slate-100
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
