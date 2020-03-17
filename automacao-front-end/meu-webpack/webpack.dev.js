const mergeConfigWebpack = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = mergeConfigWebpack(common ,{
    mode:'development',
    output: {
        filename: 'bundler.js',
        path: path.resolve(__dirname, 'dist')
    }
});