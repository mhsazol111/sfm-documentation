module.exports = {
  purge: {
    enabled: true,
    content: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx', 'public/**/*.html'],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        // sm: '1rem',
        // lg: '2rem',
        // xl: '2rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
