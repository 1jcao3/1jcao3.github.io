const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
publicPath:"/",

    css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "@/scss/_variables.scss";` // Importa tus variables Sass globales si las tienes
        },
      },
    
    },
})
