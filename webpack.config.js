const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlaugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/javascript/main.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'javascript/[name]-[contenthash].js',
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.ts|tsx/,
                exclude: /node_modules/,
                use: [
                    {loader: 'ts-loader'},
                ],
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options:{
                            presets:[
                                ['@babel/preset-env',
                                {'targets':'> 30%, not dead'}],
                                '@babel/preset-react'
                            ]
                        }
                    },
                ],
            },
            {
                test: /\.(css|sass|scss)/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true},
                    },
                    {loader: 'sass-loader'},
                ],
            },
            {
                test: /\.(png|jpg|jpeg)/,
                use: [
                    {loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'images/[name]-[contenthash].[ext]',
                            publicPath: '/',
                        },
                    },
                    {loader: 'image-webpack-loader',}
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
                filename: './stylesheets/[name]-[contenthash].css',
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
