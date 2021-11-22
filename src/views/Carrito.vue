<template>
  <div>
    <div v-if="total != 0">
      <div v-for="item in items" :key="item.product.name">
        <div class="grid grid-cols-12 py-2 border-b border-t">
          <!-- <img
            :src="require(`../../public/img-products/${item.product.img}.jpg`)"
            class="mb-1 mx-auto col-span-1"
          /> -->
          <h2
            class="font-bold mb-1 col-span-3 flex justify-center items-center border-r"
          >
            {{ item.product.name }}
          </h2>
          <p
            class="italich-16 col-span-4 flex justify-center items-center text-center border-r"
          >
            {{ item.product.description }}
          </p>
          <p class="flex justify-center items-center text-center border-r">
            {{ item.quantity }}
          </p>
          <p class="flex justify-center items-center text-center border-r">
            ${{ item.product.price }}
          </p>
          <p class="flex justify-center items-center text-center border-r">
            ${{ item.total }}
          </p>
          <div class="flex justify-center items-center text-center">
            <DeleteProduct :product="item.product" button="X" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12">
        <div
          class="col-start-11 col-span-2 grid grid-cols-2 py-2 border-t-2 border-b-2 border-black"
        >
          <p
            class="flex justify-center items-center font-bold py-7 border-r border-l"
          >
            Total
          </p>
          <p class="col-start-2 flex justify-center items-center">
            ${{ total }}
          </p>
        </div>
        <button
          @click="buyProducts(items)"
          class="col-start-11 col-span-2 py-4 my-4 bg-red-300 hover:bg-red-500"
        >
          <router-link
            to="/finishBuy"
            class="text-center text-xl font-bold hover:text-white"
          >
            Pagar
          </router-link>
        </button>
      </div>
    </div>
    <div v-else class="text-center mt-56">
      <p class="text-2xl bg-purple-300 ">
        No agregaste ningun producto al carrito
      </p>
      <div class="mt-4">
        <router-link to="/" class="text-xl underline"
          >Seleccionar Productos</router-link
        >
      </div>
    </div>
    <button @click="buyProducts(products)">Comprar Productos</button>
    <div v-if="wasBuyed"> La compra fue realizada con exito </div>
  </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import axios from "axios";
    import DeleteProduct from "../components/deleteProduct.vue";
    export default {
    data() {
    return {
      wasBuyed: null,
    };
  },
  computed: {
    ...mapGetters({ items: "getCartProducts" }),
    ...mapGetters({ total: "getTotal" }),
  },
  methods: {
    buyProducts: async function(items) {
      const products = this.getProducts(items);
      try{
      const purchaseData = {
        products: products,
        userId: Math.random()*100
      }
      const purchase = await axios.post("https://61774b8c9c328300175f58a1.mockapi.io/api/Orders",purchaseData)
      console.log(purchase,"purchase");
      this.$store.dispatch("vaciar");
      this.wasBuyed = true;
      }
      catch(err){
        console.log(err)
      }
    },
    getProducts: (items) => {
      const list = []
      items.map((item) => {
        return list.push(item)
      });
      return list
    },
  },
  components: {
    DeleteProduct,
  },
};
</script>
