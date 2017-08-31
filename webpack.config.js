// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Tipo de sourcemap que queremos, este es el más
  // rápido en devleopment, más info:
  // https://webpack.js.org/configuration/devtool/
  devtool: 'cheap-module-eval-source-map',

  // Punto de entrada de nuestra aplicación
  entry: './src/index.js',

  // Punto de salida de nuestra aplicación
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: `bundle.js`,
    publicPath: '/assets/',
   },

   // Orden en el que resolveremos las extensiones
   // en caso de ser omitida en el import
   resolve: {
     extensions: ['.js', '.json'],
   },

   // Loaders, en base a la extensión del archivo
   // hacen ciertas transofrmaciones, como transpilar ES6 o SASS
   module: {
     rules: [
       {
         test: /\.js$/,
         use: 'babel-loader',
       },
       {
         test: /\.scss$/,
         exclude: /node_modules/,
         use: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           use: [
               {
               loader: 'css-loader',
               query: {
                 modules: true,
                 sourceMap: true,
                 importLoaders: 2,
                 localIdentName: '[name]__[local]___[hash:base64:5]'
               }
             },
             'sass-loader',
           ],
         }),
      },
     ],
   },

   // Configurar puerto y carpeta de los assets
   devServer: {
     contentBase: path.resolve(__dirname, 'public'),
     port: 8080,
   },

   plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
   // Poner colorines :)
   stats: {
    colors: true
   }
};
