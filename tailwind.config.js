module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or media or 'calss'
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
