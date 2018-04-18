const isProd = process.env.NODE_ENV === 'prod';

const webpack = require('webpack');
const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.[hash].js',
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
      },
      {
        test: /\.(js|jsx)$/i,
        use: ['babel-loader'],
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
    injext: 'body',
  }));
  plugins.push(new MiniCssExtractPlugin({
    filename: 'styles.css',
  }));
  return plugins;
}
