

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    watchFiles: ["src/**/*"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'assets/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: 'assets/[name].json'
            },
          },
        ],
        type: "javascript/auto",
      },
    ]
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/index.html", to: "index.html" }],
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

};
