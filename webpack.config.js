const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlaugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.css/,
            use: [
                {loader: MiniCssExtractPlugin.loader},
                {loader: 'css-loader'},
            ],
        },],
    },
    plugins: [new MiniCssExtractPlugin(),
            new HtmlWebpackPlaugin({
                template: './src/index.html',
            }),]
}
