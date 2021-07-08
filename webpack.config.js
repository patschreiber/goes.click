const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// To access built-in plugins
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  context: __dirname,
  // Tells webpack to extract these source maps and include in our final bundle:
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css/i,
        use: [
          "style-loader",
          { loader: "css-loader", options: { sourceMap: true } }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'clickity.js',
    path: path.resolve(__dirname, 'dist', 'scripts'),
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/templates/index.html' })
  ],
  optimization: {
    usedExports: true
  }
}
