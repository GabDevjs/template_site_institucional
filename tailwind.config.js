/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "2xl": "1536px",
        "4xl": "2048px",
      },
      colors: {
        "primary": "#212F3D",
        "secondary": "#ff0000"
      },
    },
  },
  plugins: [
    {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
}
