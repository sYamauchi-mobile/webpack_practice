const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlaugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/javascript/main.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'javascript/main.js'
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
    plugins: [new MiniCssExtractPlugin({
                filename: './stylesheets/main.css',
            }),
            new HtmlWebpackPlaugin({
                template: './src/templates/index.html',
            }),
            new CleanWebpackPlugin(),]
}
