const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist: [
      'bg-blue',
      'bg-pink',
      'bg-purple',
      'bg-teal',
      'bg-yellow',
      'text-blue-darkest',
      'text-pink-darkest',
      'text-purple-darkest',
      'text-teal-darkest',
      'text-yellow-darkest',
      'border-blue-darkest',
      'border-pink-darkest',
      'border-purple-darkest',
      'border-teal-darkest',
      'border-yellow-darkest'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
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
        blue: {
          DEFAULT: '#ABCAF0',
          dark: '#86B3EA',
          darkest: '#123957'
        },
        pink: {
          DEFAULT: '#F0C4AB',
          dark: '#EAAA86',
          darkest: '#DA6E2F',
        },
        purple: {
          DEFAULT: '#9e9be3',
          dark: '#5C57C7',
          darkest: '#312c83'
        },
        teal: {
          DEFAULT: '#99EBE1',
          dark: '#42d9c8',
          darkest: '#0e6c65'
        },
        yellow: {
          DEFAULT: '#FCE19C',
          dark: '#F9C94D',
          darkest: '#766324'
        },
        dark: '#333333',
        fuchsia: '#f0abdf',
        green: '#dff0ab',
        obsidian: '#4F4F4F',
        muted: {
          light: '#828282',
          DEFAUTL: '#5C5C5C',
        },
        light: '#E0E0E0'
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
      letterSpacing: {
        widest: '.2em'
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
