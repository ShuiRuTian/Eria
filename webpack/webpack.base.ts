import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const baseConfig: webpack.Configuration = {
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      // {
      //   test: /\.html$/,
      //   use: [ {
      //     loader: 'html-loader',
      //     options: {
      //       minimize: true
      //     }
      //   }],
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
       
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import'),
                require('tailwindcss'),
              ],
            },
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: {
    /** * A list of file extensions to try when requesting files.
     * * An empty string is considered invalid. */
    // For example, there are A.js, B.js and B.ts in the same folder.
    // In A.js, I import './B',
    // it will try to find B.tsx(not find), B.ts(find!), B.js(ignored), B.json(ignored).
    extensions: ['.tsx', '.ts','css', '.js', 'json'],
  },
  /** Include polyfills or mocks for various node stuff */
  /** Add additional plugins to the compiler. */
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  })],
  /** Stats options for logging  */
  // stats?: Options.Stats,
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

};
export default baseConfig;
