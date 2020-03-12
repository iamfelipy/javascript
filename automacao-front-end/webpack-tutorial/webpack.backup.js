const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {  
  mode: 'development',
  // mode: 'production',
  entry: './src/index.js',
  output: {  
    path: path.resolve(__dirname,'dist'),  
    filename: 'bundler.[contentHash].js'  
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', //3.injeta css no dom
          'css-loader',  //2.traz css para js
          'sass-loader' //1.transform sass em css
        ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  })]
}



