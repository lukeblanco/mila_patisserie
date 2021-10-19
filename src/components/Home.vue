<template>
  <div>
    <h1 class="text-4xl text-center">Productos</h1>
    <div class="mt-1 w-40 m-auto border border-red-500 mb-10" />
    <div class="grid grid-cols-4 gap-5">
      <div v-for="producto in productos" :key="producto.name">
        <h2 class="font-bold mb-1">{{ producto.name }}</h2>
        <p class="italic">{{ producto.description }}</p>
        <p class="text-purple-600 text-right">${{ producto.price }}</p>
        <div class="text-center bg-red-400 text-white">
          <button>Comprar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productos from "./data.json";
export default {
  name: "Home",
  data() {
    return {
      productos,
    };
  },
  methods: {},
};
</script>
