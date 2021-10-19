<template>
  <div>
    <h1 class="text-4xl text-center">Productos</h1>
    <div class="mt-1 w-40 m-auto border border-red-500" />
    <div class="grid grid-cols-4">
      <div v-for="producto in productos" :key="producto.name">
        <p>{{ producto.name }}</p>
        <p>{{ producto.price }}</p>
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
