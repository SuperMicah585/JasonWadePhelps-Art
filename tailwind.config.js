/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx}"],
  theme: {
    extend: {fontFamily: {
      redhat: ['"Cinzel"', 'sans-serif'], // Custom font family
    },
    colors: {
      'smoke-gray': '#1a1a1a',
    }},
  },
  plugins: [],
}

