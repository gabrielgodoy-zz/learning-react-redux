const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
};

module.exports = {
  devtool: 'cheap-module-source-map', // Simplifica os sourcemaps para um único mapeamento por linha
  entry: {
    app: [
      './src/assets/js/index.jsx',
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
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
        ],
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
                modules: true,
                importLoaders: 1,
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
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
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  './src/assets/styles/settings/*.scss',
                  './src/assets/styles/tools/_mixins.scss',
                  './src/assets/styles/tools/_functions.scss',
                  './node_modules/sass-mq/_mq.scss',
                ],
              },
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
    new webpack.DefinePlugin(GLOBALS),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
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
