/**
 *  Webpack is an open-source JavaScript module bundler. Webpack takes modules with dependencies
 *  and generates static assets representing those modules.
 *
 *  It takes the dependencies and generates a dependency graph allowing web developers to use
 *  a modular approach for their web application development purposes.
 *
 *  This is what generates the files inside the /app/build folder.
 *
 *  configs are commented for clarity.
 */
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  // the main entry of our app
  entry: ["./app/index.js"],

  // output configuration
  output: {
    path: __dirname + "/app/build/",
    publicPath: "build/",
    filename: "build.js"
  },
  // adding aliases to make importing easier
  resolve: {
    alias: {
      styles: path.resolve(__dirname, "app/styles"),
      components: path.resolve(__dirname, "app/src/components"),
      globalComponents: path.resolve(__dirname, "app/src/globalComponents"),
      store: path.resolve(__dirname, "app/store"),
      router: path.resolve(__dirname, "app/router")
    }
  },
  // loaders to handle different file types
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.sass$/,
        use: ["vue-style-loader", "css-loader", "sass-loader?indentedSyntax"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            scss: ["vue-style-loader", "css-loader", "sass-loader"],
            sass: [
              "vue-style-loader",
              "css-loader",
              "sass-loader?indentedSyntax"
            ],
            options: {
              includePaths: [path.resolve("/node_modules")]
            }
          }
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map",
  // plugins to reduce the size of the final bundle in production mode
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, // Suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    })
  ]
};
