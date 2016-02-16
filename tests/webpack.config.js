/* eslint strict:0 */

'use strict';

const path = require('path');

const entry = {
  'tests/index': path.join(__dirname, './index.js'),
};

module.exports = {
  entry: entry,

  resolve: {
    extensions: ['', '.js'],
  },

  devtool: '#source-map',

  module: {
    loaders: [
      {
        test: /\.xtpl$/,
        exclude: /node_modules/,
        loader: path.resolve(__dirname, '../'),
      },
    ],
  },

  output: {
    path: __dirname,
    filename: '[name].js',
  },
};
