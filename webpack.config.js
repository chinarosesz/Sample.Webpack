const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

module.exports =
{
    entry: glob.sync("./src/**/*.tsx"),
    output: 
    { 
        filename: 'bundle.js',
        clean: true 
    },
    resolve: { extensions: [".tsx", ".js"] },
    module:
    {
        rules:
        [
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            }
        ]
    },
    devServer:
    {
        https: false,
        port: 4000,
        open: true,
    },
    plugins:
    [
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, './src/index.html'),
                filename: 'index.html'
            })
    ],
}