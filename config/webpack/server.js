
module.exports = {
  target: 'node',
  node: {
    __dirname: true,
  },
  devtool: 'source-map',
  entry: [
    require.resolve('../polyfills'),
    `${paths.subApps}/index/src/server/index.js`,
  ],
}
