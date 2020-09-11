const path = require('path');
module.exports = {
  target: 'web',
  entry: {
    index: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: '@dhi-gras/react-components',
    globalObject: 'this',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: ['ts-loader', 'react-docgen-typescript-loader'] },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  externals: [
    /@material-ui\/(core|icons)\/.*/,
    {
      'env-cmd': 'env-cmd',
      formik: 'formik',
      'formik-material-ui': 'formik-material-ui',
      'prop-types': 'prop-types',
      'react-dom': 'react-dom',
      react: 'react',
      'react-spinners': 'react-spinners',
      yup: 'yup',
      'react-clipboard.js': 'react-clipboard.js',
    },
  ],
};

// function externalForMaterialUi(context, request, callback) {
//   if (/@material-ui.+/.test(request)) {
//     const name = request.replace(/^.*[\\/]/, '');
//     return callback(null, 'root MaterialUI.' + name);
//   }
//   callback();
// }
