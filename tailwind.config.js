module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        light: '#bfd0e2',
        dark: '#06091a'
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
      backgroundImage: theme => ({
        'home-card': "url('images/cmdexe.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
