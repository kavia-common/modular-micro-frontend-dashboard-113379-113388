const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3003,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'templates',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: { 
        react: { singleton: true, eager: false, requiredVersion: '^18.2.0' },
        "react-dom": { singleton: true, eager: false, requiredVersion: '^18.2.0' },
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
};
