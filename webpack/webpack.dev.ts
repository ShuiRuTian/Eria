import webpack from "webpack";
import webpackMerge from "webpack-merge";
import baseConfig from "./webpack.common";

const devConfig: webpack.Configuration = {
  mode: "development",
  /** Capture timing information for each module. */
  profile: true,
  /** Cache generated modules and chunks to improve performance for multiple incremental builds. */
  cache: true,
};

const config: webpack.Configuration = webpackMerge(baseConfig, devConfig);
export default config;
