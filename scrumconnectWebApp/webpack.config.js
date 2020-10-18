const HtmlWebPackPlugin = require("html-webpack-plugin");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		},
  },
  devServer: {
    historyApiFallback: true,
    port:3000
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|webp|woff|woff2|ttf|png|jpe?g|gif)$/i,
        loader: 'file-loader?name=[name].[ext]',
        options: {
          outputPath:'images',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/,/src\/test/,/server/],
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./main.html"
    }),
    new CompressionPlugin({
      test: /\.(js|jsx)$/,
    })
     // new BundleAnalyzerPlugin(),
  ],
  externals:{
    react:"React",
    "react-dom":"ReactDOM"
  }
};