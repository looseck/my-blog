// vue.config.js
const prodOptions = {}
if (process.env.NODE_ENV === 'production') {
  prodOptions.publicPath = './'
  prodOptions.outputDir = 'dist'
}

module.exports = {
  // 跨域问题解决
  devServer: {
    proxy: {
      '/api': {
        target: 'http://123.56.143.153/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // 选项...
  publicPath: prodOptions.publicPath,
  outputDir: prodOptions.outputDir
}