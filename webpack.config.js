'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'app/index.jsx')
    ],
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: '[name].js',
        publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['react-hot-loader/babel'],
                    presets: ['react', ['es2015', { modules: false }]]
                }
            },
            // {
            //     test: /\.(css|less)$/,
            //     use: [
            //         'style-loader',
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 modules: true,
            //                 localIdentName: '[path][name]_[local]_[hash:base64:5]',
            //                 importLoaders: 1
            //             }
            //         },
            //         'postcss-loader',
            //         'less-loader'
            //     ]
            // },
        ]
    }
};
