var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist", "asset"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ }]
  }
};