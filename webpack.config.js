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
        rules: [
            {
                test: /\.(css|sass|scss)/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'},
                ],
            },
            {
                test: /\.(png|jpg)/,
                use: [
                    {loader: 'file-loader',
                    options: {esModule: false,
                    name: 'images/[name].[ext]'},},
                ],
            },
            {
                test: /\.pug/,
                use: [
                    {loader: 'html-loader'},
                    {loader: 'pug-html-loader'},
                ],
            },
        ],
    },
    plugins: [
            new MiniCssExtractPlugin({
                filename: './stylesheets/main.css',
            }),
            new HtmlWebpackPlaugin({
                template: './src/templates/index.pug',
                filename: 'index.html',
            }),
            new HtmlWebpackPlaugin({
                template: './src/templates/access.pug',
                filename: 'access.html',
            }),
            new HtmlWebpackPlaugin({
                template: './src/templates/members/taro.pug',
                filename: 'members/taro.html',
            }),
            new CleanWebpackPlugin(),
    ]
}
