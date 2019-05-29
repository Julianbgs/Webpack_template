const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const jquery = require('jquery');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                include: path.resolve(__dirname, 'src'),
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            url: true
                        }
                    },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            { test: /\.(ttf|woff|eot|svg|png|woff2|gif|jpg)(\?[\s\S]+)?$/, loader: 'url-loader' },
        ],
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};