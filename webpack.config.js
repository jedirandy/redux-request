var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'ReduxRequest',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                presets: ['es2015'],
                plugins: ['transform-object-rest-spread']
            },
            include: path.join(__dirname, 'src')
        }]
    }
}
