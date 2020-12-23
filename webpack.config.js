// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const path = require('path');
const $ = require("jquery")
const webpack = require("webpack");
const handlebars= require("handlebars-loader");

module.exports = {
  
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"] 
      }, 
      { 
          test: /\.handlebars$/, 
          loader: "handlebars-loader" 
        }
    ]
  }, 
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
]
};