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
    extend: {},
  },
  plugins: [],
}
