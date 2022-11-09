const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'media',
  content: ['./src/**/*.{js,jsx,ts,tsx,scss}', './public/index.html'],
  safelist: [
    'bg-blue',
    'bg-blue-darkest',
    'bg-blue-dark',
    'bg-pink',
    'bg-purple',
    'bg-purple-dark',
    'bg-teal',
    'bg-teal-dark',
    'bg-yellow',
    'bg-yellow-dark',
    'dark:text-blue',
    'text-blue-dark',
    'text-blue-darkest',
    'text-pink-darkest',
    'dark:text-purple',
    'text-purple-dark',
    'text-purple-darkest',
    'dark:text-teal',
    'text-teal-dark',
    'text-teal-darkest',
    'dark:text-yellow',
    'text-yellow-dark',
    'text-yellow-darkest',
    'text-pink-dark',
    'dark:border-blue',
    'border-blue-darkest',
    'border-pink-darkest',
    'dark:border-purple',
    'border-purple-darkest',
    'dark:border-teal',
    'border-teal-darkest',
    'dark:border-yellow',
    'border-yellow-darkest'
  ],
  theme: {
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
      '3': 3,
      ...defaultTheme.flexGrow
    },
    screens: {
      xs: '390px',
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
        lime: '#dff0ab',
        obsidian: '#4F4F4F',
        muted: {
          light: '#828282',
          DEFAUTL: '#5C5C5C',
        },
        light: '#E0E0E0'
      },
      backgroundImage: {
        'hero-banner-lg': 'url(/media/images/hero-banner.png)',
        'hero-banner-xl': 'url(/media/images/hero-banner-xl.png)',
        'hero-banner-sm': 'url(/media/images/hero-banner-mobile.png)'
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
