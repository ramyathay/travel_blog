var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './components/main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
            'style',
            'css'
            // 'autoprefixer?browsers=last 3 versions',
            // 'sass?outputStyle=expanded'
          ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'url?limit=8192',
            'img'
        ]
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};

