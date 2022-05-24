<template>
  <div class="home">
    <div>Countdown Timer:{{count}}</div>
    <h1>BTC Websocket List</h1>
    <p>BTC/USD: </p><sapn>{{getBtchandler}}</sapn>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: 'HomeView',
  components: {
    
  },
  watch:{
  
  },
  method:{
    ...mapActions([
      'startCounter'
    ])
  },
  computed:{
    ...mapState([
        'wsNotify',
        'count'
      ]),
    ...mapGetters([
        'getBtchandler',
        
      ]),
    

  },
  mounted(){
   
  }

}
</script>
