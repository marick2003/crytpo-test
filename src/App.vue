<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>
<script>
import { mixinWebsocket } from '@/utils/ws';
import { myTestMixin } from '@/utils/test';
export default {
    mixins: [mixinWebsocket,myTestMixin],
    created(){
        //this.initWebsocket(); //開啓前後端的websocket通道
        this.hello();
    },
    destroy(){
        //this.websocketclose(); //關閉websocket通道
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
