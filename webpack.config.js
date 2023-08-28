const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const { template } = require("lodash");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: 
    [ { test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: "asset/resource" },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "static", to: "static" }],
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  devtool:
    process.env.NODE_ENV === "production" ? "hidden-source-map" : "source-map",
};
