import path from 'path';
import webpack from 'webpack';

const mainBaseConfig: webpack.Configuration = {
  entry: './src/main.ts',
  /** Choose a style of source mapping to enhance the debugging process.
   * These values can affect build and rebuild speed dramatically. */
  // devtool: Options.Devtool,
  output: {
    path: path.resolve('./', 'dist'),
    filename: 'main.js',
  },
  target: 'electron-main',
};
export default mainBaseConfig;
