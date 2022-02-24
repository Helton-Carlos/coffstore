import { createStore } from 'vuex'

export default createStore({
  state: {
    carrinho:0,
    favorito:0
  },
  mutations: {
    adicionarcarrinho(state,payload){
      state.carrinho=payload
    }
  },
  actions: {
  },
  modules: {
  }
})
