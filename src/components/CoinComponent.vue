<template>
  <div class="container">

      <div class="columns-auto">
        <div class="example">
          <table class="table-auto w-full">
            <thead>
            <tr>
              <th><h1>#</h1></th>
              <th><h1>Name</h1></th>
              <th><h1>Price (USD)</h1></th>      
              <th><h1>Conversion</h1></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(coin,index) in coins" v-bind:key="coin.Id">
              <td>{{ index+1 }}</td>
              <td>{{ coin.CoinInfo.Name }}</td>
              <td>{{ coin.DISPLAY.USD.PRICE }}</td>
              <td v-on:click="show(coin.Name)" align="center"><img width="35" height="35" :src="'https://www.cryptocompare.com/'+coin.CoinInfo.ImageUrl" alt="" /></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-4">
          <div>
            <form>
              <div class="form-group">
                <label for="usd">Amount (USD)</label>
                <input type="text" class="form-control" v-model="input.amount" id="usd" placeholder="Amount (USD)">
              </div>
              <div class="form-group">
                <label>
                  <select v-model="coinName">
                    <option v-for="coin in coins" v-bind:key="coin.id">{{ coin.CoinInfo.Name }}</option>
                  </select>
                </label>
              </div>
              <button type="button" class="btn btn-default" v-on:click="convert()">Convert</button>
            </form>
            <br />
            <p>
              <strong>Value:</strong> {{ specific_coin_amount }}
            </p>
          </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      coins: [],
      input: {
        amount: 1,
        cryptocurrency: 'bitcoin'
      },
      specific_coin_amount: 0,
      timer: '',
      coinName: ''
    }
  },
  created: function () {
    this.fetchCoinInfo()
    setInterval(this.fetchCoinInfo, 10000)
  },
  methods: {
    fetchCoinInfo: function () {
       //axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
         axios.defaults.headers.common['authorization'] = `Apikey 997818fd4df7797f8b205838d6eb78346815f4f65d8e9a724e2a247c0fa18112`;
      axios({
        method: 'GET',
        url: 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD'
      }).then(
        result => {
          this.coins = result.data.Data;
        },
        error => {
          console.error(error)
        }
      )
    },
    show (coinName) {
      //this.$modal.show('conversion-form', { coinName: coinName })
    },
    hide () {
      //this.$modal.hide('conversion-form')
    },
    beforeOpen (event) {
      console.log(event.params.coinName)
      this.coinName = event.params.coinName
    },
    cancelAutoUpdate: function () {
      clearInterval(this.timer)
    },
    beforeDestroy () {
      clearInterval(this.timer)
    },
    convert () {
      axios({
        method: 'GET',
        url:
          'https://api.coinmarketcap.com/v1/ticker/' +
          this.input.cryptocurrency +
          '/'
      }).then(
        result => {
          this.specific_coin_amount =
            this.input.amount / result.data[0].price_usd
        },
        error => {
          console.error(error)
        }
      )
    }
  }
}
</script>
