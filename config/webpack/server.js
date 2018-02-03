'use strict'

const path = require('path')

// todo make individual configs
process.env.NODE_ENV = 'production'

module.exports = {
  target: 'node',
  node: {
    __dirname: true,
  },
  devtool: 'source-map',
  entry: [
    require.resolve('../polyfills'),
    path.resolve(__dirname, '../../src/lib/render/appToString.js'),
  ],
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
        test: /\.(js|jsx)$/,
      },
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
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-react-app')],
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
              localIdentName: '[hash:base64]',
            },
          },
          require.resolve('postcss-loader'),
        ],
      },
    ],
  },
}
