const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  siteName: 'Party Cinemas',
  siteUrl: '',
  siteDescription: 'Big screen entertainment rental and expertise',
  plugins: [
   
  ],
  icon: {
    favicon: './src/party-cinemas-thumbnail-logo.png',
    touchicon: './src/party-cinemas-thumbnail-logo.png'
  },
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