const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const devServer = require("./devServer");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.tsx",
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },

  experiments: {
    topLevelAwait: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.WEBPACK_BUNDLE_ANALYZER_MODE || "disabled",
    }),
  ],

  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".tsx", ".ts", ".js"],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -20,
          name: "vendors",
          chunks: "all",
          filename: "[name].app.bundle.js",
        },
        babylonjs: {
          test: /[\\/]node_modules[\\/]@babylonjs[\\/]/,
          priority: -10,
          name: "vendors-babylonjs",
          chunks: "all",
          filename: "[name].app.bundle.js",
        },
      },
    },
  },

  watchOptions: {
    ignored: /node_modules/,
  },

  devServer
};
