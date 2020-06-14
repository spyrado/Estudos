const path = require('path');
const babiliPlugin = require('babili-webpack-plugin');

let plugins = [];

if(process.env.NODE_ENV == 'production') {
  plugins.push(new babiliPlugin());
}

module.exports = {
  entry: './app-src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 4200,
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        } 
      },
      {
        test: /\.css$/,
        use: {
          loader: 'style-loader!css-loader' // IMPORTANTE essa exclamacao separa um LOADER do OUTRO, E ELE COMECA DA DIREITA PARA A ESQUEDA A LER OS LOADERS
        }
      }
    ]
  },
  plugins
};