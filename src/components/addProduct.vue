<template>
  <div>
    <button
      @click="agregar(product)"
      class="text-center bg-red-400 text-white mt-5 w-full"
    >
      {{ button }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["product", "button"],
  methods: {
    agregar() {
      this.$store.dispatch("agregar", {product: this.product, quantity: 1, total: 0});
    },
  },
};
</script>
