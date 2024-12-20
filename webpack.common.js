const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { output } = require('./webpack.config');

module.exports = {
    entry: {
        app: './src/index.js';
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};