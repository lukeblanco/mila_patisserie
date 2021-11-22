<template>
  <div>
    <Header />
    <h1 class="text-4xl text-center">Product Dashboard</h1>
    <div class="mt-1 w-40 m-auto border border-red-500 mb-10" />
    <button
      type="button"
      v-on:click="goToCreateProduct()"
      class="
        align-content-center
        px-6
        py-2
        mt-4
        text-white
        bg-pink-600
        rounded-lg
        hover:bg-pink-900
      "
    >
      Create Product
    </button>

    <div class="mt-1 w-40 m-auto border border-red-500 mb-10" />
    <h1 class="text-4xl text-left">Productos</h1>

    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.name">
        <tr>
          <td>{{ product.name }}</td>
        </tr>
        <tr>
          <td>{{ product.price }}</td>
        </tr>
        <tr>
          <td>{{ product.description }}</td>
        </tr>
      </div>
      <br />
    </div>
    <br />
    <br />
    <br />
  </div>
</template>
<script>
export default {
  name: "ProductDashboard",
  data() {
    return {
      products: [],
      postID: null,
    };
  },
  mounted() {
    fetch("https://61774b8c9c328300175f58a1.mockapi.io/api/Productos", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => (this.products = data))
      .catch((err) => console.log(err.message));
    console.log(this.products);
  },
  components: {},

  methods: {
    async goToCreateProduct() {
      this.$router.push("/newProd");
    },
  },
};
</script>