const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    historyApiFallback: true,
    allowedHosts: 'all', // Allow all hosts to resolve "invalid host header" error
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
      name: 'dashboard_host',
      remotes: {
        assets: 'assets@http://localhost:3001/remoteEntry.js',
        explorer: 'explorer@http://localhost:3002/remoteEntry.js',
        templates: 'templates@http://localhost:3003/remoteEntry.js',
      },
      shared: { 
        react: { singleton: true, requiredVersion: '^18.2.0' },
        "react-dom": { singleton: true, requiredVersion: '^18.2.0' },
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ]
};
