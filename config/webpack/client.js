const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// todo make individual configs
process.env.NODE_ENV = 'development'

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, '../../dist'),
    hot: true,
  },
  devtool: 'cheap-module-source-map',
  entry: [
    require.resolve('react-hot-loader/patch'),
    require.resolve('react-dev-utils/webpackHotDevClient'),
    path.resolve(__dirname, '../../src/index.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../../dist/assets/js'),
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
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                // todo use the below for prod build
                // localIdentName: '[hash:base64]',
                // minimize: true,
                // modules: true,
                // sourceMap: true,
              },
            },
            require.resolve('postcss-loader'),
          ],
        }),
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './public/index.html',
        to: '../../index.html',
      },
      {
        from: './public/favicon.ico',
        to: '../../favicon.ico',
      },
    ]),
    new ExtractTextPlugin('../css/[name].bundle.css'),
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, '../../src'),
      path.resolve(__dirname, '../../node_modules'),
    ],
  },
}
