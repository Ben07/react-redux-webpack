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
            'babel-polyfill',
            'prop-types',
            'react',
            'react-dom',
            'react-redux',
            'react-router-dom',
            'redux',
            'redux-thunk'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: '[name]-[chunkhash].min.js',
        publicPath: ''
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('[name]-[chunkhash].min.css'),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true,
                warnings: false
            },
            comments: false
        }),
        new StatsPlugin('webpack.stats.json', {
            source: false,
            modules: false
        }),
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
                    presets: ['react', 'es2015']
                }
            }, {
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader'],
                    publicPath: './dist'
                })
            }
        ]
    }
};
