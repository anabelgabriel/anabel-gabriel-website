var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

var PROD = !(process.env.NODE_ENV === 'development');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    './index.tsx'
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  context: path.resolve(__dirname, 'src'),

  devtool: (!PROD ? 'inline-source-map' : null),

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  module: {
    loaders: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader!ts-loader'
      },
      {
        test: /\.scss|\.css$/,
        loader: 'style-loader!' + 'css-loader!' + 'postcss-loader!' + 'sass-loader'
      },
      {
        test: /\.pug|\.jade/,
        loader: 'json-loader!pug-loader'
      },
      {
        test: /\.yml|\.yaml/,
        loader: 'json-loader!yaml-loader'
      },
      {
        test: /\.svg$/,
        loader: 'babel-loader?presets[]=es2015,presets[]=react!svg-react-loader'
      },
      {
        test: /\.(gif|png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [autoprefixer];
        }
      }
    })
  ]
};
