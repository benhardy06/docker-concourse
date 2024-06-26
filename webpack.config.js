
const path = require('path');

module.exports = {
  entry: './src/js/index.js', // Entry point of your application
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for built artifacts
    filename: 'bundle.js' // Output filename
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply babel-loader for JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    client: {
      logging: 'none'
    },
    compress: true,
    port: 9000,
  },
};
