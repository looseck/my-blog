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
  }
}