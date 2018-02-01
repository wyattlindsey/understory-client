const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// todo make individual configs
process.env.NODE_ENV = 'development'

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          presets: [require.resolve('babel-preset-react-app')],
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './public/index.html',
        to: '../dist/index.html',
      },
      {
        from: './public/favicon.ico',
        to: '../dist/favicon.ico'
      }
    ]),
  ],
}
