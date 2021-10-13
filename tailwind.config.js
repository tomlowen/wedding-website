module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        bookman: ["Bookman", "serif"],
      },
      padding: {
        "1/3": "33.33333%",
        "2/3": "66.66667%",
      },
      animation: {
        fade: "fadeOut 3s ease-in-out",
      },

      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.red.300") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
