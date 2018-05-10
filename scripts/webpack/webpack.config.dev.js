let HtmlWebpackPlugin = require("html-webpack-plugin");
let path = require("path");
let webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

let entryName = process.wpOption.entryName || "index";

module.exports = {
  devtool: "source-map",
  entry: {
    index: path.join(process.cwd(), `./src/view/${entryName}/index.js`)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: { compact: false }
          }
        ]
      },
      {
        test: /.html$/,
        use: [
          {
            loader: require.resolve("html-withimg-loader")
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: require.resolve("css-loader")
            },
            {
              loader: require.resolve("postcss-loader")
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: require.resolve("url-loader"),
            options: {
              limit: 8192,
              name: `asset/image/[hash:8].[name].[ext]`
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
        use: [
          {
            loader: require.resolve("url-loader"),
            options: {
              limit: 8192,
              name: `asset/font/[hash:8].[name].[ext]`
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(process.cwd(), `./dist/${entryName}/`),
    filename: `js/[name].min.js`,
    chunkFilename: "js/[name]-[id].min.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      hot: true,
      filename: "index.html",
      template: `./src/view/${entryName}/index.html`
    }),
    new ExtractTextPlugin(`${entryName}.min.css`)
  ]
};
