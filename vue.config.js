const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: { host: '192.168.10.101', 
  https:true, port: 8080, client: { webSocketURL: 'wss://192.168.10.101:8080/ws', }, headers: { 'Access-Control-Allow-Origin': '*', } },
  transpileDependencies: true,
})

