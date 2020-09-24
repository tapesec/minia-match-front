const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log(path.join(__dirname, "dist"));

module.exports = {
  entry: path.join(__dirname, "src", "app.js"),
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      title: "Minia Match",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "prettier-loader", "eslint-loader"],
      },
    ],
  },
};
