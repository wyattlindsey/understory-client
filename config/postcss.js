const path = require('path')

module.exports = rootDir => {
  return {
    plugins: [
      require('postcss-flexbugs-fixes'),
      require('autoprefixer')({
        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
        flexbox: 'no-2009',
      }),
      require('postcss-partial-import')({
        path: [path.resolve(rootDir, 'src')],
      }),
      require('postcss-nested'),
      require('postcss-advanced-variables'),
    ],
  }
}
