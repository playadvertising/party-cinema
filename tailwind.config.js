module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md'
    ]
  },
  theme: {
    extend: {
      colors: {
        emerald: "#10b981",
        sky: "#22d3ee",
        red: "#dc2626",
        py: "#ffe045"
      },
      backgroundImage: {
        'outdoor-movie': "url('./red-banner.jpg')",
        'backyard-movie': "url('./backyard-movie-banner.jpg')"
      },
      fontFamily: {
        'glasgow': ['Glasgow', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
