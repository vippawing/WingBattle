const path = require('path')

module.exports = {
  entry: path.join(__dirname, '../src/index.ts'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, use: [ { loader: 'ts-loader', }, ], },
    ],
  },
}