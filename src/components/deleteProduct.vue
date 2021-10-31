<template>
  <div>
    <button
      type="button"
      class="btn btn-secondary btn-lg btn-block"
      @click="eliminar(product)"
    >
      Eliminar Producto
    </button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    eliminar() {
      this.$store.dispatch("eliminar", this.product);
    },
  },
};
</script>

<style scoped>
div {
  background-color: #9ae6b5;
  height: 400px;
}
</style>
