module.exports = {
    entry: './index.js', 
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    devtool: 'source-map'
}
