var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: './src/index.ts',
    devtool: 'source-map',
    output: {
        path: 'dist',
        publicPath: 'dist/',
        filename: 'main.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    plugins: [
        new WebpackNotifierPlugin(),
    ], 
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}