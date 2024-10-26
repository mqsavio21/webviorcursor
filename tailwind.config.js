module.exports = {
  content: [
    "./webvior/*.html",
    "./webvior/*.js",
    // Add other specific paths as needed
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#3498db',
        'brand-dark': '#2c3e50',
        'brand-yellow': '#f1c40f',
      },
      animation: {
        fade: 'fade 5s ease-in-out infinite',
    },
    keyframes: {
        fade: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.5 },
        }
    }
    },
  },
  variants: {},
  plugins: [],
};
