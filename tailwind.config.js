module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        light: '#c8c8c8',
        dark: '#222222'
      },
      secondary: {
        light: '#56dcff',
        dark: '#2f7898'
      },
      accent: {
        default: '#9d8d59'
      }
    },
    extend: {
      fontFamily: {
        'press-start': ["'Press Start 2P'", 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
