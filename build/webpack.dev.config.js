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

    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8888,
        hot: true
    }
}