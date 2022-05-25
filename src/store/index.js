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
      state.Timer++;
    }

  },
  actions: {
    incrementAsync ({ commit }) {
      commit('increment');
    },
   
  },
  modules: {
  }
})
