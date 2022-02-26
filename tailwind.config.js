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
        'video-dance': "url('http://178.128.228.49/wp-content/uploads/2022/02/video_dance_party_hero.jpg')",
        'movie-licensing': "url('http://178.128.228.49/wp-content/uploads/2022/02/movie_licensing.jpg')",
        'odm-faq': "url('http://178.128.228.49/wp-content/uploads/2022/02/outdoor_movie.jpg')",
        'vdp-faq': "url('./video-dance-party-event-company.jpg')",
        'odm': "url('http://178.128.228.49/wp-content/uploads/2022/02/community-movie-night.jpg')",
        'odmd': "url('http://178.128.228.49/wp-content/uploads/2022/02/pop-up-drive-in-movies-1.jpg')",
        'be': "url('./odm6.jpg')"
        
      },
      fontFamily: {
        Quicksand: ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
