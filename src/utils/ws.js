import { mapMutations } from "vuex";
import { v4 as uuidv4 } from "uuid";
export const mixinWebsocket = {
  data() {
    return {
      ws: null,
      apiKey:
        "997818fd4df7797f8b205838d6eb78346815f4f65d8e9a724e2a247c0fa18112",
      subMessage: {
        action: "SubAdd",
        subs: ["2~Coinbase~BTC~USD", ""],
      },
    };
  },
  methods: {
    ...mapMutations(["setWsNotify"]),
    //初始websocket
    initWebsocket() {
      let wsURL = `wss://streamer.cryptocompare.com/v2?api_key=${this.apiKey}`;

      this.ws = new WebSocket(wsURL); //建立連線
      this.ws.onopen = this.websocketonopen;
      this.ws.error = this.websocketonerror;

      this.ws.onmessage = this.websocketonmessage;
      this.ws.onclose = this.websocketclose;
    },
    websocketonopen() {
      console.log("ws 連線成功~~");
      this.ws.send(JSON.stringify(this.subMessage));
    },
    websocketonerror(e) {
      console.error("ws 連線失敗", e);
    },
    websocketonmessage(e) {
      // 後端通知前端，前端取得資料
      let _data = e.data;
      //當有後端資料送到前端，利用vuex存到共用的state
      // const messageObj = JSON.parse(_data);
      // const price = messageObj.PRICE;
      // if (price) {
      //     console.log(`Price BTC/USDT: ${price}`);
      //   }
      if (JSON.parse(_data).PRICE) {
        this.setWsNotify({
          id: uuidv4(),
          data: JSON.parse(_data),
        });
      }

      console.log("ws 取得資料", JSON.parse(_data).PRICE);
    },
    websocketsend(data) {
      //前端丟資料
      console.log("send data", data);
    },
    websocketclose() {
      console.log("ws 關閉連線");
    },
  },
};
