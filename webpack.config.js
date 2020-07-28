const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname,'dist')
    },
    devtool: 'inline-source-map', // 跟踪错误
    devServer: {
        open: false,
        port: 3000,
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(), // 清除dist
        new HtmlWebpackPlugin({ // html
            template: './public/index.html',
            filename: 'index.html',
            title: 'webpack-demo'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin() // 热更新
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}