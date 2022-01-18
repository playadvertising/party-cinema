const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  siteName: 'Gridsome',
  plugins: [
   
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          autoprefixer
        ]
      }
    }
  }
}