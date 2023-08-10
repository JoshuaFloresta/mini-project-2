/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './public/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};