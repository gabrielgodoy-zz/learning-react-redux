const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/assets/js/Main.jsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['es2015', { modules: false }], 'stage-0', 'react'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        enforce: 'pre',
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                discardComments: {
                  removeAll: true,
                },
                minimize: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [autoprefixer({
                    browsers: ['> 1%', 'last 2 versions'],
                  })];
                },
              },
            },
            'sass-loader',
            {
              loader: 'import-glob-loader',
            },
          ],
        }),
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|webm|mp4|ogv|txt|mp3|ogg|wav|pdf)$/,
        loader: 'file-loader',
        options: {
          context: path.resolve(__dirname, './src'),
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.(eot|otf|woff|woff2|ttf|svg)$/,
        use: ['url-loader?name=fonts/[name].[ext]'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      output: './dist',
      filename: 'index.html',
      template: './src/index.html',
    }),
    new ExtractTextPlugin('main.css'),
    new CopyWebpackPlugin([
      {
        from: './src/assets/data',
        to: './data',
      },
    ]),
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve('dist'),
  },
};
