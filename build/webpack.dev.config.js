const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'BumbleBee.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Bee project',
            template: './examples/index.html'

        }),
    ],
    module: {
        rules: [ // 定义css规则
            // {
            //     test: /\.less$/, // 正则匹配要识别的css，这里改成.less
            //     use: [
            //         {
            //             loader: 'style-loader' // 使用style-loader进行处理，位置必须在css-loader前面
            //         },
            //         {
            //             loader: 'css-loader' // 使用css-loader进行处理
            //         },
            //         {
            //             loader: 'less-loader' // 引入less-loader
            //         }
            //     ]
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]

    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        hot: true,
        open: true, // 自动打开浏览器
        compress: true, // 启动gzip压缩
        quiet: true
    }
}