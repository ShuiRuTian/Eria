import webpack from "webpack";
import webpackMerge from "webpack-merge";
import baseConfig from "./webpack.common";

const devConfig: webpack.Configuration = {
  mode: "development",
};

export default webpackMerge(baseConfig, devConfig);
