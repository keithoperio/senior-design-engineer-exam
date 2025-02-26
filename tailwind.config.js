/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors: {
        'deep-teal':'#0F282D',
        'lime-green': '#D1FF3B'
      },
      fontFamily: {
        'grotesque-regular': ["GROTESQUE-REGULAR", "sans-serif"],
        'grotesque-bold': ["GROTESQUE-SEMIBOLD", "sans-serif"],
      },
    },
  },
  plugins: [],
};
