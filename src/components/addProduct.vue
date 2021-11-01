<template>
  <div>
    <button
      type="button"
      class="btn btn-secondary btn-lg btn-block"
      @click="agregar(product)"
    >
      Agregar al Carrito
    </button>
  </div>
</template>

<script>

export default {
  props: ['product'],
  methods: {
    agregar() {
      this.$store.dispatch("agregar", this.product);
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
