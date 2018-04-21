const isProd = process.env.NODE_ENV === 'production';

const webpack = require('webpack');
const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.[hash].js',
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src', 'components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              removeComments: isProd,
            },
          },
        ],
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.(js|jsx)$/i,
        use: ['babel-loader'],
        include: [path.resolve(__dirname, 'src')],
      },
      {
        test: /\.(png|gif|jpe?g|svg)/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
        include: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'src'),
        ],
      },
      {
        test: /\.(sass|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoader: 2,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoader: 2,
            },
          },
        ],
      },
    ],
  },
  plugins: populatePlugins(),
  devtool: 'source-map',
  mode: 'none',
};

function populatePlugins() {
  const plugins = [];
  isProd && plugins.push(new CleanPlugin(['public']));
  plugins.push(new HtmlPlugin({
    title: 'Marvellous Cuisine',
    filename: 'index.html',
    template: './src/index.html',
    favicon: '',
    inject: 'body',
  }));
  plugins.push(new MiniCssExtractPlugin({
    filename: 'styles.css',
  }));
  return plugins;
}
