<template>
  <div>
     <div class="grid grid-cols-4 gap-5">
      <div v-for="producto in products" :key="producto.name">
        <h2 class="font-bold mb-1">{{ producto.name }}</h2>
        <p class="italic">{{ producto.description }}</p>
        <p class="text-purple-600 text-right">${{ producto.price }}</p>
        <DeleteProduct :product="producto"/>
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
        ...mapGetters({ products: "getCartProducts" }),
        
    },
    methods: {
      buyProducts: async function(products) {
        console.log("hola")
        try{
        const purchaseData = {
          products: products,
          userId: Math.random()*100
        } 
        const purchase = await axios.post("https://61774b8c9c328300175f58a1.mockapi.io/api/Orders",purchaseData)
        console.log(purchase,"purchase");
        this.$store.dispatch("empty");
        this.wasBuyed = true;
        }
        catch(err){
          console.log(err)
        }
      }
    },
      components:{
      DeleteProduct
    },
    };
</script>