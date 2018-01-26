const path = require('path');
const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
        rules: [
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
          { test: /\.css(\.js)?$/, use: ['style-loader', 'css-loader'] },
          { test: /\.css\.js$/, use: ['css-js-loader', 'value-loader'] },
          { test: /\.js$/, use: 'babel-loader' },
        ], 
        exclude: /node_modules/,
        loader: 'babel-loader', 
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false},
        output: { comments: false },
        sourceMap: true
    }),
    new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  }
};


/*
const path = require('path');
const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve('./public'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      { test: /\.css(\.js)?$/, use: ['style-loader', 'css-loader'] },
      { test: /\.css\.js$/, use: ['css-js-loader', 'value-loader'] },
      { test: /\.js$/, use: 'babel-loader' },
    ],
    exclude: /node_modules/,
    query: {
      presets: ['react', 'es2015', 'stage-1']
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false},
        output: { comments: false },
        sourceMap: true
    }),
    new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  }
};

*/