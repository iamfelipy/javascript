const path = require('path')

module.exports = {  
  entry: './src/index.js',
  output: {  
    path: path.resolve('dist'),  
    filename: 'bundler.js'  
  },
  mode: 'development'
//   mode: 'production'
}



