<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mixinWebsocket } from '@/utils/ws';
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mixins: [mixinWebsocket],
    created(){
        this.initWebsocket(); //開啓前後端的websocket通道
    },
    destroy(){
        this.websocketclose(); //關閉websocket通道
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
