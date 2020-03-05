import webpack from 'webpack';

const baseConfig: webpack.Configuration = {
  entry: './src/index.ts',
  output: {
    publicPath: `http://localhost:${port}/dist/`,
    filename: 'renderer.js',
  },
  target: 'electron-renderer',
};
export default baseConfig;
