const path = require('path');
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
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader" // 添加前缀
                ]
            },
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: "eslint-loader",
            //         options: {
            //             enforce: "pre"
            //         }
            //     },
            //     exclude: /node_modules/
            // },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: { // 用babel-loader需要把es6->es5
                        presets: ["@babel/preset-env"], // 转换js语法
                        plugins: [
                            '@babel/plugin-proposal-class-properties' // 转换class
                        ]
                    }
                },
                include: path.resolve(__dirname,'./src'),
                // 排除node_modules文件夹里面的
                exclude: /ndoe_modules/
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