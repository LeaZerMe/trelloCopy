var path = require("path")

module.exports = {
  entry: path.resolve(__dirname, 'scripts/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};