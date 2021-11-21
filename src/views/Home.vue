<template>
  <div>
    <Header />
    <h1 class="text-4xl text-center">Productos</h1>
    <div class="mt-1 w-40 m-auto border border-red-500 mb-10" />
    <div class="grid grid-cols-4 gap-5 mb-2">
      <div v-for="producto in productos" :key="producto.name">
        <div v-if="producto.visible">
          <img
            :src="require(`../../public/img-products/${producto.img}.jpg`)"
            class="mb-1 h-80 mx-auto"
          />
          <div class="grid grid-cols-6">
            <h2 class="font-bold mb-1 col-span-5">{{ producto.name }}</h2>
            <p class="text-purple-800 text-right font-bold">
              ${{ producto.price }}
            </p>
          </div>
          <p class="italic h-16">{{ producto.description }}</p>
          <AddProduct :product="producto" button="Añadir al carrito" />
        </div>
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
      productos: []
    };
  },
  mounted() {
    fetch("https://61774b8c9c328300175f58a1.mockapi.io/api/Productos", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        data.map((item) => {
          if (item.visible) {
            this.productos.push(item);
          }
        });
      })
      .catch((err) => console.log(err.message));
  },
  components: {
    AddProduct,
  },
};
</script>
