
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin'); 

module.exports = {
    entry: './src/index.js',
    plugins: [
      new htmlWebpackPlugin(),
      new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            // use: ['style-loader','css-loader']
            //   use: [{loader: 'style-loader'},{loader: 'css-loader'}]
            use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader' ]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader'
              }
            ],
          },
        ]
      },
}