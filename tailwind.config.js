module.exports = {
  purge: ['./src/**/*.svelte'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: '#1a202c',
        light: '#f7fafc',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}