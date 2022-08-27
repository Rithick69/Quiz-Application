import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userName: null,
  },
  mutations: {
    addUserDetail (state, payload){
       state.userName = payload.userName;
       localStorage.setItem('userName', state.userName);
       return state.userName;
    },
    removeUserDetail (state, payload){
      localStorage.removeItem('userName');
      state.userName = null;
    }
  },
    actions: {
      addUserDetail (context, payload) {
      context.commit('addUserDetail', payload)
    },
    removeUserDetail (context, payload) {
      context.commit('removeUserDetail', payload)
    }
  }
})
export default store;