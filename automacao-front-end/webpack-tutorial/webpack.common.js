const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({template: "./src/template.html"})
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', //3.injeta css no dom
          'css-loader',  //2.traz css para js
          'sass-loader' //1.transform sass em css
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs",
            esModule: false,
          }
        }
      }
    ]
  } 
}



