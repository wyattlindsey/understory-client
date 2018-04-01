'use strict'

const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'
const cssLocalName = isProduction
  ? '[hash:base64]'
  : '[path][name]__[local]--[hash:base64:5]'

module.exports = {
  context: path.resolve(__dirname, '../../src'),
  mode: isProduction ? 'production' : 'development',
  target: 'node',
  node: {
    __dirname: true,
  },
  devtool: 'source-map',
  entry: [require.resolve('../polyfills'), 'lib/render/appToString.js'],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../../private'),
    libraryTarget: 'commonjs2',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../../src'),
      path.resolve(__dirname, '../../node_modules'),
    ],
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
        ],
        loader: require.resolve('file-loader'),
        options: {
          name: 'assets/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'assets/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            require.resolve('babel-preset-react-app'),
            require.resolve('babel-preset-flow'),
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: require.resolve('css-loader/locals'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: cssLocalName,
              minimize: isProduction,
              sourceMap: !isProduction,
            },
          },
          require.resolve('postcss-loader'),
        ],
      },
    ],
  },
  plugins: [new FlowBabelWebpackPlugin()],
}
