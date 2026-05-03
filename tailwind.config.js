/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aws-dark': '#0a0a0a',
        'aws-blue': '#1a1f3a',
        'aws-purple': '#4a1a5c',
      },
    },
  },
  plugins: [],
}
