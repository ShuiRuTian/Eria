import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import baseConfig from './webpack.base';

const devConfig: webpack.Configuration = {
  mode: 'production',
  optimization: {
    splitChunks: {
      name: false,
    },
  },

};

export default webpackMerge(baseConfig, devConfig);
