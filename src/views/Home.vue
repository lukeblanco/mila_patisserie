<template>
  <div>
    <Header />
    <h1 class="text-4xl text-center">Productos</h1>
    <div class="mt-1 w-40 m-auto border border-red-500 mb-10" />
    <div class="grid grid-cols-4 gap-5">
      <div v-for="producto in productos" :key="producto.name">
        <h2 class="font-bold mb-1">{{ producto.name }}</h2>
        <div class="grid grid-cols-6">
          <p class="italic col-span-5">{{ producto.description }}</p>
          <p class="text-purple-600 text-right">${{ producto.price }}</p>
        </div>
        <AddProduct :product="producto" button="Comprar" />
      </div>
    </div>
  </div>
</template>
<script>
import AddProduct from "../components/addProduct.vue";

export default {
  name: "Home",
  data() {
    return {
      productos: [],
    };
  },
  mounted() {
    fetch("https://61774b8c9c328300175f58a1.mockapi.io/api/Productos", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => (this.productos = data))
      .catch((err) => console.log(err.message));
    console.log(this.productos);
  },
  components: {
    AddProduct,
  },
};
</script>
