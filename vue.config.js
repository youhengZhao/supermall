const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  },
  transpileDependencies: true
})
