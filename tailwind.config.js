const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      '1-33': '0 1 33%',
      '2-50': '0 1 50%',
      '1-40': '0 1 40%',
      '1-60': '0 1 60%',
      'full': '1 0 100%',
      ...defaultTheme.flex
    },
    flexGrow: {
      '2': 2,
      '3': 3
    },
    screens: {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1250px',
      xxl: '1400px'
    },
    extend: {
      colors: {
        blue: '#ABCAF0',
        pink: '#F0C4AB',
        dark: '#333333',
        obsidian: '#4F4F4F',
        muted: '#828282',
        light: '#E0E0E0'
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
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
