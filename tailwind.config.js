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
        py: "#f5c61d"
      },
      backgroundImage: {
        'outdoor-movie': "url('./indexbanner.jpg')",
        'backyard-movie': "url('./backyard-movie-banner.jpg')",
        'video-dance': "url('./video_dance_party_herob.jpg')",
        'movie-licensing': "url('./ml.jpg')",
        'odm-faq': "url('./om.jpg')",
        'vdp-faq': "url('./video-dance-party-event-company.jpg')",
        'odm': "url('./community-movie-night.jpg')",
        'odmd': "url('./pop-up-drive-in-movies-1.jpg')",
        'be': "url('./odm6.jpg')"
        
      },
      fontFamily: {
        Quicksand: ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
