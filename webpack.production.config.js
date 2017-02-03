'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'app/index.jsx'),
        vendor: [
            "babel-polyfill",
            "react",
            "react-dom",
            "react-redux",
            "react-router",
            "react-router-redux",
            "redux",
            "redux-thunk",
        ]
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: '[name]-[hash].min.js',
        publicPath: ''
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor-[hash].min.js"),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('[name]-[hash].min.css'),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["react", "es2015"]
                }
            }, {
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            }
        ]
    }
};
