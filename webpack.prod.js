const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // 压缩js
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css

module.exports = merge(common, {
    mode: "production",
    devtool: 'source-map',
    optimization: { // 优化项
        minimizer: [ // 覆盖原有的压缩项
            new UglifyJSPlugin({
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    plugins: [
        new CleanWebpackPlugin() // 清除dist
    ]
});