var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js', 
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    devtool: 'source-map',
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
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}
