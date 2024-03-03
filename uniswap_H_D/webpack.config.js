// webpack.config.js

const { resolve } = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: resolve(__dirname, 'src/index.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'uniswapHD'
    },
    plugins: [
        new UglifyJsPlugin({
            exclude: [/\.min\.js$/gi]
        })
    ]
}

