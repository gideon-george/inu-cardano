module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  animation:{
    bounce: 'bounce 10s linear finite',

    pulse: 'pulse 5s ease-out infinite'
  },
  plugins: [],
}
