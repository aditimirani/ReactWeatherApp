var path = require('path');
var webpack = require('webpack');
var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');
var config = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        SRC_DIR + '/app/index.js'

    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: "/app"
    },
    module: {
        loaders: [{
            test: /\.js?/,
            include: SRC_DIR,
            query: {
                presets: ['react', 'es2015', 'stage-2']
            },
            loader: "babel-loader"
        }]
    },
    devServer: {
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map'
}
module.exports = config;
