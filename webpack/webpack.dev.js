const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    inline: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
})