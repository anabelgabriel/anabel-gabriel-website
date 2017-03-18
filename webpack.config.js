var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

var PROD = !(process.env.NODE_ENV === 'development');

module.exports = {
  entry: PROD ? './index.tsx' : [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    './index.tsx'
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: PROD ? '/' : 'http://localhost:3000/'
  },

  context: path.resolve(__dirname, 'src'),

  devtool: (!PROD ? 'source-map' : false),

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'assets')
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  module: {
    rules: [
      ...(PROD ? [
        {
          test: /\.tsx?$/,
          include: /src/,
          use: 'babel-loader'
        },
        {
          test: /\.tsx?$/,
          include: /src/,
          use: {
            loader: 'ts-loader',
            query: { silent: true }
          }
        }
      ] : [
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
        }
      ]),
      {
        test: /\.scss|\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: PROD ? {} : {
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
            query: PROD ? {} : {
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

  plugins: PROD ? [
      new webpack.NamedModulesPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
