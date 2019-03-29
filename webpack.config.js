const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: 'pathOrUrlWhenProductionBuild'
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    inline: true,
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname , "index.html")
    })
  ]
};
