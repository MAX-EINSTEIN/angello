module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0088FF',
        secondary: '#22188F',
        tertiary: '#232d48',
      },
      gridAutoColumns: {
        '270': '270px',
        '220': '220px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
