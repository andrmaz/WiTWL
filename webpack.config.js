/* eslint-disable no-undef */
/* eslint-disable lines-around-comment */
/* eslint-disable quotes */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: ['./src/index.js'],
    // Here the application starts executing
    // and webpack starts bundling
    output: {
        // options related to how webpack emits results
        path: path.resolve(__dirname, 'dist'),
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: 'bundle.js',
        // the filename template for entry chunks
    },
    module: {
        // configuration regarding modules
        rules: [
        // rules for modules (configure loaders, parser options, etc.)
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                  emitWarning: true,
                  failOnError: false,
                  failOnWarning: false
                }
            },
            {
                // Conditions:
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // the loader which should be applied, 
                    // it'll be resolved relative to the context
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ],
    },
    devtool: "eval", // enum
    // enhance debugging by adding meta info for the browser devtools
    // source-map most detailed at the expense of build speed.
    target: "web", // enum
    // the environment in which the bundle should run
    // changes chunk loading behavior, available external modules
    // and generated code style
    devServer: {
        contentBase: './dist', 
        // boolean | string | array, static file location
        compress: true, 
        // enable gzip compression
        port: 8080,
        // Specify a port number to listen for requests on:
        hot: true, 
        // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, 
        // true for self-signed, object for cert authority
        open: true,
        // Tells dev-server to open the browser after server had been started
        openPage: '',
        // Specify a page to navigate to when opening the browser.
        clientLogLevel: 'warn'
        // eslint-disable-next-line max-len
        // string = 'info': 'silent' | 'trace' | 'debug' | 'info' | 'warn' | 'error'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new Dotenv()  
    ]
};