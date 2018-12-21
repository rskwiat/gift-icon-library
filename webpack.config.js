/* eslint-disable */

const webpack = require('webpack');
const path = require('path');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const chalk = require('chalk');

const mode = process.env.NODE_ENV;


const SRC = {
  js: path.resolve(__dirname, 'src/js'),
  scss: path.resolve(__dirname, 'src/scss'),
  bundle: path.resolve(__dirname, 'src/js/app.js'),
  public: path.resolve(__dirname, 'public'),
  html: path.resolve(__dirname, 'src/index.html'),
}

const config = {
  mode,
  entry: {
    bundle: SRC.bundle,
  },
  output: {
    path: SRC.public,
    publicPath: '/',
    filename: '[name].[chunkhash].js'     
  },
  resolve: {
    extensions: ['.js', '.jsx',],
    alias: {
      '@src': SRC.js,
      '@scss': SRC.scss,
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader?modules&localIdentName=[local]-[hash:base64:5]',
          'postcss-loader', 
          'sass-loader'
        ],
      },
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new ProgressBarPlugin({
      format: `build [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`
    }),
    new HtmlWebpackPlugin({
      template: SRC.html
    }),
  ],
};

module.exports = config;
