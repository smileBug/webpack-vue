const path = require('path');
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  context: resolve(''),
  entry: {
    app: './src/index.js'
  },
  resolve: { 
    alias: { 
      'vue': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '_': 'lodash'
    } 
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve('public')
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  }
};