/* eslint strict:0 */

'use strict';

const path = require('path');

const entry = {
  'tests/index': path.join(__dirname, './index.js'),
};

module.exports = {
  entry: entry,

  devtool: '#source-map',

  module: {
    rules: [
      {
        test: /\.xtpl$/,
        exclude: /node_modules/,
        loader: path.resolve(__dirname, '../'),
        query: {
          Compiler:require('xtemplate-compiler').default,
        }
      }]
  },

  output: {
    path: __dirname,
    filename: '[name].js',
  },
};
