const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  entry: './src/scripts/start.js',
  devtool: 'source-map',
  target: 'node',
  externals: [nodeExternals()],
  mode: (process.env.NODE_ENV || 'production'),
  performance: {
    hints: false,
  },
  output: {
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
  },
  plugins: [
    new NodemonPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          // {
          //   loader: 'eslint-loader',
          //   options: {
          //     fix: true,
          //   },
          // },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
};
