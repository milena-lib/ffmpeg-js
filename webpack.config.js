const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: 'javascript/auto',
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'wasm/',
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/wasm/', to: 'wasm/' },
      ],
    }),
  ]
};
