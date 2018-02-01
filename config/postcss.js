const path = require('path')

module.exports = rootDir => ({
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({
      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
      flexbox: 'no-2009',
    }),
    require('postcss-partial-import')({
      path: [
        path.join(rootDir, 'src'),
        path.join(rootDir, 'src/styles'),
        path.join(rootDir, 'node_modules'),
      ],
    }),
    require('postcss-nested'),
  ],
})
