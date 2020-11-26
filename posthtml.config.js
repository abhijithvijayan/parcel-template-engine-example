module.exports = {
  plugins: [
    require('posthtml-include')({ root: 'source' }),
    require('posthtml-expressions')({}),
  ],
}
