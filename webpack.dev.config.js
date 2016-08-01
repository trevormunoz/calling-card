const webpack = require('webpack');
const path = require('path');

const options = {
  entry: [
    './src/js/main.js'
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, "_site", "static"),
    publicPath: 'http://localhost:8080/'
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: 'http://localhost:4000/',
    colors: true,
    hot: true,
    inline: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g\|\.gif$/,
        loader: 'file'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};

module.exports = options;
