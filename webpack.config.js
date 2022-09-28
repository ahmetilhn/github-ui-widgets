const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  entry: "./src/api/server.ts",
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: [/node_modules/, /demo/],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
};
