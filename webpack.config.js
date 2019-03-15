var FS = require('fs');
var Path = require('path');
var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var NamedChunksPlugin = Webpack.NamedChunksPlugin;
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var MiniCSSExtractPlugin = require("mini-css-extract-plugin");

var event = process.env.npm_lifecycle_event;

var clientConfig = {
    mode: (event === 'build') ? 'production' : 'development',
    context: Path.resolve('./src'),
    entry: './main',
    output: {
        path: Path.resolve('./server/www'),
        publicPath: '/starwars/',
        filename: 'front-end.js',
        chunkFilename: '[name].js',
    },
    resolve: {
        extensions: [ '.js', '.jsx' ],
        modules: [ Path.resolve('./src'), 'node_modules' ],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'env',
                        'react',
                        'stage-0',
                    ],
                    plugins: [
                        'syntax-async-functions',
                        'syntax-class-properties',
                        'transform-regenerator',
                        'transform-runtime',
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [ MiniCSSExtractPlugin.loader, 'css-loader' ],
            },
            {
                test: /\.scss$/,
                use: [ MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader' ],
            },
        ]
    },
    plugins: [
        new NamedChunksPlugin,
        new BundleAnalyzerPlugin({
            analyzerMode: (event === 'build') ? 'static' : 'disabled',
            reportFilename: `report.html`,
        }),
        new MiniCSSExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ],
    devtool: (event === 'build') ? 'source-map' : 'inline-source-map',
};

var serverConfig = {
    context: clientConfig.context,
    entry: clientConfig.entry,
    target: 'node',
    output: {
        path: Path.resolve('./server/client'),
        filename: 'front-end.js',
        chunkFilename: '[name].js',
        libraryTarget: 'commonjs2',
        publicPath: '/starwars/',
    },
    resolve: clientConfig.resolve,
    module: clientConfig.module,
    plugins: [
        new NamedChunksPlugin,
        new HtmlWebpackPlugin({
            template: Path.resolve(`./src/index.html`),
            filename: Path.resolve(`./server/client/index.html`),
        }),
        new MiniCSSExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ],
};

var configs = module.exports = [ serverConfig, clientConfig ];


// copy webpack.resolve.js into webpack.debug.js to resolve Babel presets
// and plugins to absolute paths, required when linked modules are used
if (FS.existsSync('./webpack.debug.js')) {
    configs.map(require('./webpack.debug.js'));
}
