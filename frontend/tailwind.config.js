/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0075c9',
        coral: '#ff6f61',
        mint: '#00c49a',
        dark: '#1b1b1b',
      },
    },
  },
  plugins: [],
};
