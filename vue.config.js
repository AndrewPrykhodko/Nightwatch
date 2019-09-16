module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-crud/' : '/',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/index.scss";'
      }
    }
  }
}
