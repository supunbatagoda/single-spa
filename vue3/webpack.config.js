const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    'app': './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    libraryTarget: 'system',
    publicPath: 'http://localhost:3001/',
    chunkLoadingGlobal: 'webpackJsonp_app'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: false
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        oneOf: [
          // CSS Modules
          {
            test: /\.module\.css$/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[local]_[hash:base64:8]'
                  }
                }
              }
            ]
          },
          // regular CSS files
          {
            use: [
              'vue-style-loader',
              'css-loader'
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.DefinePlugin({
      __VUE_HMR_RUNTIME__: JSON.stringify(null),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  externals: [
    'single-spa-vue',
  ],
  resolve: {
    extensions: ['.js', '.vue']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    port: 3001,
    hot: false,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    historyApiFallback: true
  }
}; 