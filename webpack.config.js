var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

var PROD = !(process.env.NODE_ENV === 'development');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://192.168.1.158',
    './index.tsx'
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: PROD ? '/' : 'http://192.168.1.158/'
  },

  context: path.resolve(__dirname, 'src'),

  devtool: (!PROD ? 'source-map' : null),

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname)
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true
            }
          },
          {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
              useCache: true
            }
          }
        ]
      },
      {
        test: /\.scss|\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: PROD ? null : {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer]
            }
          },
          {
            loader: 'sass-loader',
            query: PROD ? null : {
              sourceMap: true,
              sourceComments: true
            }
          }
        ]
      },
      {
        test: /\.pug|\.jade/,
        use: [
          'json-loader',
          'pug-loader'
        ]
      },
      {
        test: /\.yml|\.yaml/,
        use: [
          'json-loader',
          'yaml-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
          },
          'svg-react-loader'
        ]
      },
      {
        test: /\.(gif|png|jpg)$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: '8192'
          }
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: 'file-loader'
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
