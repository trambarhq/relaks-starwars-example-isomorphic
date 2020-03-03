const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const event = process.env.npm_lifecycle_event;

const clientConfig = {
  mode: (event === 'build') ? 'production' : 'development',
  context: Path.resolve('./src'),
  entry: './main',
  output: {
    path: Path.resolve('./server/www'),
    publicPath: '/starwars/',
    filename: 'front-end.js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            '@babel/env',
            '@babel/react',
          ],
          plugins: [
            '@babel/transform-runtime',
            'relaks/transform-memo',
          ]
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: (event === 'build') ? 'static' : 'disabled',
      reportFilename: `report.html`,
    }),
    new MiniCSSExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
  optimization: {
    concatenateModules: false,
  },
  devtool: (event === 'build') ? 'source-map' : 'inline-source-map',
};

const serverConfig = {
  mode: clientConfig.mode,
  context: clientConfig.context,
  entry: './ssr',
  target: 'node',
  output: {
    path: Path.resolve('./server/client'),
    filename: 'front-end.js',
    chunkFilename: '[name].js',
    libraryTarget: 'commonjs2',
    publicPath: '/starwars/',
  },
  module: clientConfig.module,
  plugins: [
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

module.exports = [ serverConfig, clientConfig ];
