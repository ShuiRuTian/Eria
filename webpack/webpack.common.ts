import path from "path";
import webpack from "webpack";

const baseConfig: webpack.Configuration = {
  entry: "./src/index.ts",
  /** Choose a style of source mapping to enhance the debugging process.
   * These values can affect build and rebuild speed dramatically. */
  // devtool: Options.Devtool,
  output: {
    path: path.resolve("./", "dist"),
    filename: "foo.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  target: "web",
  /** Add additional plugins to the compiler. */
  plugins: [],
  /** Stats options for logging  */
  // stats?: Options.Stats,
  /** Performance options */
  // performance?: Options.Performance | false,
  /** Limit the number of parallel processed modules.
   * Can be used to fine tune performance or to get more reliable profiling results */
  // parallelism?: number,
  /** Optimization options */
  // optimization?: Options.Optimization,
};
export default baseConfig;
