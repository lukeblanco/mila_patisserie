import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default new Vuex.Store({
state:{
    cartProducts: [], 
    contador: 0,
    caca: 3,
    user: null
},
 mutations:{
     agregar:(state, product) => {
        state.cartProducts.push(product)
        console.log("state",state)
     },
     eliminar:(state, product) => {
        state.cartProducts = state.cartProducts.filter(item => item.name != product.name)
        console.log("state",state)
     },
     empty:(state) => {
      state.cartProducts =  [],
      console.log("state",state)
    },
    addUser:(state, user) => {
      console.log("llego al store")
      state.user =  user,
      console.log(state.user,"user state")
    },
 },
 actions:{
    agregar: ({ commit }, product) => {
        commit("agregar", product);
      },
    eliminar: ({ commit }, product) => {
        commit("eliminar", product);
      },
    empty: ({ commit }) => {
        commit("empty");
      },
    addUser: ({ commit }, user) => {
        commit("addUser", user);
      },
 },
 getters:{
    getCartProducts: (state) => {
        return state.cartProducts;
      },
    getCaca: (state) => {
        return state.caca;
      },
    getUser: (state) => {
        return state.user;
      },
 }
});