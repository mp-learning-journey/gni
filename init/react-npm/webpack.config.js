const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'out'), // change this
        // publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        static: "./out",
        hot: true,
        port: 3000,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./public/index.html'),
        }),
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/ ,
                use: ['style-loader', 'css-loader',]
            }
        ]
    },
};