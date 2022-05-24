import { createStore } from 'vuex'

export default createStore({
  state: {
    wsNotify: {},
    Timer: 10,
    count: 5,
    counter: false
  },
  getters: {
     getBtchandler(state){
      return state.wsNotify.length > 0 ? state.wsNotify.data.PRICE : '';
     },
     getEthandler(state){
        return state;
     }
     
    
  },
  mutations: {
    setWsNotify(state, param) {
      state.wsNotify=param;
    },
    increment(state) {
      state.Timer--;
    }

  },
  actions: {
    incrementAsync ({ commit }) {
      commit('increment');
    },
    async startCounter({ state }) {
      state.counter = true;
      while (state.count > 0 && state.counter) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (state.counter)
          state.count--;
      }
      state.counter = false;
    },
    resetCounter({ state }) {
      state.count = 5;
      state.counter = false;
    }
  },
  modules: {
  }
})
