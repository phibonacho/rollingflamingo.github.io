const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      '2-50': '2 0 50%',
      '1-33': '1 0 33%',
      '1-40': '1 0 40%',
      '1-60': '1 0 60%'
    },
    flexGrow: {
      '3': 3
    },
    screens: {
      '2xl': '1440px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        blue: '#ABCAF0',
        pink: '#F0C4AB',
        dark: '#333333',
        obsidian: '#4F4F4F',
        muted: '#828282',
        light: '#E0E0E0'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
