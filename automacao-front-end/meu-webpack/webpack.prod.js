const path = require('path');
const common = require('./webpack.common.js');
const mergeConfigWebpack = require('webpack-merge');

module.exports = mergeConfigWebpack(common, {
    mode: 'production',
    output: {
        filename: 'bundler.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    }
});