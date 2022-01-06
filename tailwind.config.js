module.exports = {
  // mode: 'jit',
  content: ['./build/*.html'],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          100: 'var(--primary-base-color)',
          200: 'var(--primary-darken-color)',
        },
        secondary: {
          100: 'var(--secondary-base-color)',
          200: 'var(--secondary-darken-color)',
        },
        accent: {
          100: 'var(--accent-base-color)',
          200: 'var(--accent-darken-color)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
