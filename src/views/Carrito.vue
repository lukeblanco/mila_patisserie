<template>
     <div class="grid grid-cols-4 gap-5">
      <div v-for="producto in products" :key="producto.name">
        <h2 class="font-bold mb-1">{{ producto.name }}</h2>
        <p class="italic">{{ producto.description }}</p>
        <p class="text-purple-600 text-right">${{ producto.price }}</p>
        <DeleteProduct :product="producto"/>
      </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import DeleteProduct from "../components/deleteProduct.vue";
    export default {
    computed: {
        ...mapGetters({ products: "getCartProducts" }),
    },
      components:{
      DeleteProduct
    },
    };
</script>