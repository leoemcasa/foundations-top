const path = require("path");

module.exports = [
  {
    output: {
      filename: "template.js",
      path: path.resolve(__dirname, "dist"),
    },
    name: "template",
    entry: "./src/template.js",
    mode: "development",
  },
  {
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
    },
    name: "index",
    entry: "./src/index.js",
    mode: "development",
  },
  {
    output: {
      filename: "cores.js",
      path: path.resolve(__dirname, "dist"),
    },
    name: "cores",
    entry: "./src/cores.js",
    mode: "development",
  },
  {
    output: {
      filename: "sobre.js",
      path: path.resolve(__dirname, "dist"),
    },
    name: "sobre",
    entry: "./src/sobre.js",
    mode: "development",
  },
];
