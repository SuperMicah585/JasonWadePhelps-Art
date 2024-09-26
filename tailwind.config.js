/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx}"],
  theme: {
    extend: {fontFamily: {
      redhat: ['"Cinzel"', 'sans-serif'], // Custom font family
    },
    colors: {
      'smoke-gray': '#1B1B1B',
      'jet': '#000401'
    },
    maxHeight: {
      '600': '600px',
    }},
  },
  plugins: [],
}

