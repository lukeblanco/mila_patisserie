import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
    contador: 0,
    user: null,
  },
  mutations: {
    agregar: (state, product) => {
      state.cartProducts.push(product);
      console.log("state", state);
    },
    eliminar: (state, product) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.name != product.name
      );
      console.log("state", state);
    },
    empty: (state) => {
      (state.cartProducts = []), console.log("state", state);
    },
    adduser: (state, user) => {
      console.log('store', user)
      state.user = user;
      console.log("state", state.user);
    },
  },
  actions: {
    agregar: ({ commit }, product) => {
      commit("agregar", product);
    },
    eliminar: ({ commit }, product) => {
      commit("eliminar", product);
    },
    empty: ({ commit }) => {
      commit("empty");
    },
  },
  getters: {
    getCartProducts: (state) => {
      return state.cartProducts;
    },
  },
});
