module.exports = {
  plugins: [
	  require('postcss-node-sass'), 
	  require('autoprefixer'),
	  // require('@fullhuman/postcss-purgecss')({content: ['./**/*.html']})
	  // require('cssnano')({preset: 'default',})
  ]
};