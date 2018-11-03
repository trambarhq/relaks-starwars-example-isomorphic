var FS = require('fs');
var Path = require('path');
var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DefinePlugin = Webpack.DefinePlugin;
var NamedChunksPlugin = Webpack.NamedChunksPlugin;
var NamedModulesPlugin = Webpack.NamedModulesPlugin;
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var event = process.env.npm_lifecycle_event;

var clientConfig = {
    context: Path.resolve('./src'),
    entry: './main',
    output: {
        path: Path.resolve('./server/www'),
        publicPath: '/starwars-react/',
        filename: 'app.js',
    },
    resolve: {
        extensions: [ '.js', '.jsx' ],
        modules: [ Path.resolve('./src'), Path.resolve('./node_modules') ],
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
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader',
                })
            },
        ]
    },
    plugins: [
        new NamedChunksPlugin,
        new NamedModulesPlugin,
        new BundleAnalyzerPlugin({
            analyzerMode: (event === 'build') ? 'static' : 'disabled',
            reportFilename: `report.html`,
        }),
        new ExtractTextPlugin("styles.css"),
    ],
    devtool: (event === 'build') ? false : 'inline-source-map',
};

var serverConfig = {
    context: clientConfig.context,
    entry: clientConfig.entry,
    target: 'node',
    output: {
        path: Path.resolve('./server/client'),
        filename: 'app.js',
        libraryTarget: 'commonjs2',
        publicPath: '/starwars-react',
    },
    resolve: clientConfig.resolve,
    module: clientConfig.module,
    plugins: [
        new NamedChunksPlugin,
        new NamedModulesPlugin,
        new HtmlWebpackPlugin({
            template: Path.resolve(`./src/index.html`),
            filename: Path.resolve(`./server/client/index.html`),
        }),
        new ExtractTextPlugin('styles.css'),
    ],
    devtool: clientConfig.devtool,
};

var configs = module.exports = [ serverConfig, clientConfig ];

var constants = {};
if (event === 'build') {
    console.log('Optimizing JS code');

    configs.forEach((config) => {
        // set NODE_ENV to production
        var plugins = config.plugins;
        var constants = {
            'process.env.NODE_ENV': '"production"',
        };
        plugins.unshift(new DefinePlugin(constants));

        // use Uglify to remove dead-code
        plugins.unshift(new UglifyJSPlugin({
            uglifyOptions: {
                compress: {
                  drop_console: true,
                }
            }
        }));
    })
}

// copy webpack.resolve.js into webpack.debug.js to resolve Babel presets
// and plugins to absolute paths, required when linked modules are used
if (FS.existsSync('./webpack.debug.js')) {
    configs.map(require('./webpack.debug.js'));
}
