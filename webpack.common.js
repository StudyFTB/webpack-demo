const path = require('path');
const nodeEnv = process.env.NODE_ENV; // 环境
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({ // html
            template: './public/index.html',
            filename: 'index.html',
            title: 'webpack-demo'
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    nodeEnv === "production" ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    "postcss-loader" // 添加前缀
                ]
            }
        ]
    },
    resolve: { // 解析模块请求的选项，（不适用于对 loader 解析）
        // 扩展名
        extensions: [".js", ".json", ".jsx", ".css"],
        // 别名
        alias: {
            "@": path.resolve(__dirname, "./src"),
        }
    }
}