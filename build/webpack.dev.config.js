const path = require("path");
const pkg = require('../package.json');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const express = require('express')
const app = express()
const result = require('../mock/formItmList.json') // 列表数据源
const routes = express.Router()
app.use('/api', routes)
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    mode: 'development',
    entry: {
        main: './examples/main',
        vendors: ['vue']
    },
    output: {
        path: path.join(__dirname, '../examples/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },

    plugins: [
        new VueLoaderPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../examples/dist/index.html'),
            template: path.join(__dirname, '../examples/index.html')
        }),
        new webpack.DefinePlugin({
            'process.env.VERSION': `'${pkg.version}'`
        }),
    ],
    module: {
        rules: [
            {
                // https://vue-loader.vuejs.org/en/configurations/extract-css.html
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: [
                            'vue-style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                },
                            },
                        ],
                        less: [
                            'vue-style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true,
                                },
                            },
                            // {
                            //     loader: 'less-loader',
                            //     options: {
                            //         sourceMap: true,
                            //     },
                            // },
                        ],
                    },
                    // postLoaders: {
                    //     html: 'babel-loader?sourceMap'
                    // },
                    sourceMap: true,
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                 loader: 'file-loader' 
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            

        ]

    },
    devServer: {
        before(app){
            app.get('/api/result', (req, res) => {
              res.json({
                errno:0,
                data:result
              })
            })
          },
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        hot: true,
        open: true, // 自动打开浏览器
        compress: true, // 启动gzip压缩
        quiet: true
    }
}