module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  // options...
  devServer: {
    proxy: 'http://10.2.1.96:8080',
  }, 
  pluginOptions: {
    apollo: {
      lintGQL: true
    }
  },
}
