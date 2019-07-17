module.exports = {
  entry: "./src/main.js",
  output: {
      path:__dirname+ '/dist/',
      filename: "bundle.js",
      publicPath: '/'
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
      host: 'localhost', // can be overwritten by process.env.HOST
      port: 8088, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
  },
  module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          // options: vueLoaderConfig
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          // include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            // name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            // name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      ]
  }
};