const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// todo make individual configs
process.env.NODE_ENV = 'development'

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist/assets/js'),
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
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
          require.resolve('postcss-loader'),
        ],
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
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../node_modules'),
    ],
  },
}
