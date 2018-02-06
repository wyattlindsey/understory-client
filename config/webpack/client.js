'use strict'

const path = require('path')
const hbs = require('hbs')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')

const isProduction = process.env.NODE_ENV === 'production'
const cssLocalName = isProduction
  ? '[hash:base64]'
  : '[path][name]__[local]--[hash:base64:5]'

module.exports = {
  context: path.resolve(__dirname, '../../src'),
  devServer: {
    contentBase: path.resolve(__dirname, '../../dist'),
    compress: true,
    port: 3000,
  },
  devtool: 'cheap-module-source-map',
  entry: [require.resolve('../polyfills'), 'index.js'],
  output: {
    filename: 'assets/js/bundle.js',
    path: path.resolve(__dirname, '../../dist'),
  },
  module: {
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
          cacheDirectory: true,
          presets: [require.resolve('babel-preset-react-app')],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: require.resolve('style-loader'),
          use: [
            {
              loader: require.resolve('css-loader'),
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
        }),
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: require.resolve('handlebars-loader'),
            options: {
              extensions: ['.html'],
              partialDirs: [path.resolve(__dirname, '../../src/partials')],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: '../public/favicon.ico',
        to: '../dist/favicon.ico',
      },
    ]),
    new ExtractTextPlugin('assets/css/[name].bundle.css'),
    new HtmlWebpackPlugin({
      excludeAssets: isProduction && [/(.*).js$/],
      template: '../public/index.html',
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, '../../src'),
      path.resolve(__dirname, '../../node_modules'),
    ],
  },
}
