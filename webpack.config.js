const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
    './public/src/index.js'
    ],
    output: {
        path: './public',
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel',
                query: {presets: ['react', 'es2015', 'stage-1']}
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
