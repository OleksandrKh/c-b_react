const { resolve } = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: resolve(__dirname, 'app/index.js'),
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'app.js',
    publicPath: '/'
  },
  devServer: {
      historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        include: [
          resolve(__dirname, 'app')
        ],
        exclude: [
          resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader?limit-200000',
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}
