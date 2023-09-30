// webpack.config.js

const path = require('path');

module.exports = {
  // Configuración de Webpack aquí
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
