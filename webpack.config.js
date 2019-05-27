const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        publicPath: '/public',
        filename: './main.js',
        path: path.resolve(__dirname, 'public/'),
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'public/'),
        port: 9000,
        publicPath: '/public',
        hotOnly: true,
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/env'] },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },

    resolve: { extensions: ['*', '.js', '.jsx'] },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],
};
