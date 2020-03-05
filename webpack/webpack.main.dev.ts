import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import mainConfig from './webpack.main';
import devConfig from './webpack.dev';

const mainDevConfig: webpack.Configuration = webpackMerge(devConfig, mainConfig);

export default mainDevConfig;
