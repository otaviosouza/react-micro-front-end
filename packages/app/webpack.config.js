const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: 'http://localhost:9001'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9001,
        historyFallbackApi: true
    },
    resolve: {
        extensions: [".jsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [require.resolve('@babel/preset-react')]
                }
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            title: 'App'
        })
    ]
}

module.exports = config