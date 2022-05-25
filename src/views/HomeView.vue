<template>
  <div class="home">
    <div>Countdown Timer:{{Timer}}</div>
    <h1>BTC Websocket List</h1>
    <p>BTC/USD: </p><sapn>{{getBtchandler}}</sapn>
    <CoinComponent></CoinComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import CoinComponent from '@/components/CoinComponent.vue'
import { mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: 'HomeView',
  components: {
    CoinComponent
  },
  watch:{
  
  },
  method:{
    ...mapActions([
      'incrementAsync'
    ])
  },
  computed:{
    ...mapState([
        'wsNotify',
        'count',
        'Timer'
      ]),
    ...mapGetters([
        'getBtchandler',
        
      ]),
  
  },
  mounted(){
    //呼叫根目錄function 
    this.$root.hello();
  }

}
</script>
