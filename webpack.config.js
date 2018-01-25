var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var resolve = p => path.join(__dirname, 'src', p);

module.exports = {
    entry: {
        ripple: './src/ripple.js',
        example: './example/index.js'
    },
    output: {
        path: resolve('../dist'),
        filename: '[name].js',
        library: 'RippleLite',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'vue-ripple-lite example',
            template: resolve('../index.html'),
            filename: resolve('../dist/example.html'),
            chunks: ['example']
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.css', '.vue', '.scss', '.json']
    }
}