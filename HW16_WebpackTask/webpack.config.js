const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js', 
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    devtool: 'inline-source-map',
    optimization: {
        moduleIds: 'natural'
    },
    devServer: {
        contentBase: './public'
    },
    module: {
        rules: 
        [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /header\.html$/i,
            loader: 'html-loader',
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            loader: 'file-loader',
            options: {
                outputPath: 'images',
            }
        },
        // {
        //     test: /\.ttf$/i,
        //     loader: 'file-loader',
        //     options: {
        //         outputPath: 'fonts/Roboto',
        //     }
        // }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [ { from: './fonts/Roboto', to: 'fonts/Roboto' } ],
        }),
    ]
}
