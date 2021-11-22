<template>
  <div>
    <button
    class="text-red-700"
      @click="eliminar(product)"
    >
    {{button}}
    </button>
  </div>
</template>

<script>
export default {
  props: ['product','button'],
  methods: {
    eliminar() {
      this.$store.dispatch("eliminar", this.product);
    },
  },
};
</script>
