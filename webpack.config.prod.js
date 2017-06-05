const { resolve } = require('path');
const webpack = require('webpack');
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
const WebpackChunkHash = require("webpack-chunk-hash");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
  context: resolve(__dirname, 'src'),
  devtool: 'source-map',
  entry: './index',
  target: 'web',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js"
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
            // this assumes your vendor imports exist in the node_modules directory
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }),
    //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
    new webpack.optimize.CommonsChunkPlugin({ 
        name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    }),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest"
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
        template: './index.ejs'
    }),
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader', ],
        exclude: /node_modules/
      }, 
      {
        test: /\.svg$/,
        use: [ 'raw-loader' ]
      }
    ]
  }
};