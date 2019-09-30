const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, argv) => {
  const isProd = argv.mode === 'production';
  return {
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? '[name]_[contenthash].js' : '[name].js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devtool: isProd ? null : 'inline-source-map',
    devServer: {
      port: 8080,
      host: '0.0.0.0',
      contentBase: path.join(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html')
      })
    ]
  };
};
