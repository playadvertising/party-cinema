const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  siteName: 'Party Cinemas',
  siteUrl: '',
  siteDescription: 'Big screen entertainment rental and expertise',
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