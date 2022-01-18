const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'media',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  safelist: [
    'bg-blue',
    'bg-pink',
    'bg-red',
    'bg-purple',
    'bg-yellow',
    'bg-teal',

    'bg-blue-dark',
    'bg-pink-dark',
    'bg-red-dark',
    'bg-purple-dark',
    'bg-teal-dark',
    'bg-yellow-dark',

    'bg-blue-darkest',

    'text-blue-dark',
    'text-pink-dark',
    'text-red-dark',
    'text-purple-dark',
    'text-teal-dark',
    'text-yellow-dark',

    'text-blue-darkest',
    'text-pink-darkest',
    'text-red-darkest',
    'text-purple-darkest',
    'text-teal-darkest',
    'text-yellow-darkest',

    'border-blue-darkest',
    'border-pink-darkest',
    'border-red-darkest',
    'border-purple-darkest',
    'border-teal-darkest',
    'border-yellow-darkest',

    'dark:text-blue',
    'dark:text-pink',
    'dark:text-red',
    'dark:text-purple',
    'dark:text-teal',
    'dark:text-yellow',

    'dark:border-blue',
    'dark:border-pink',
    'dark:border-red',
    'dark:border-purple',
    'dark:border-teal',
    'dark:border-yellow'
  ],
  theme: {
    minHeight: {
      '16': '4rem',
      '24': '6rem',
      ...defaultTheme.minHeight
    },
    zIndex: {
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100,
    },
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
        red: {
          DEFAULT: '#FFADB8',
          dark: '#FF334E',
          darkest: '#7A0010'
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
        lime: '#dff0ab',
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
