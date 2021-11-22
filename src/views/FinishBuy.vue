<template>
  <div>
    <div v-if="this.spinner" class="flex justify-center items-center h-96">
      <img
        src="../../public/spinner.svg"
        alt="spinner"
        class="animate-spin inline w-10"
      />
      <p class="inline pl-2">
        Cargando...
      </p>
    </div>
    <div
      v-else
      class="flex justify-center items-center h-96"
    >
      <div class="p-16 border-2 shadow-lg">
        <h1 class="font-bold text-2xl">Compra realizada con éxito</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spinner: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.spinner = false;
    }, 5000);
    setTimeout(() => {
      this.$router.push('/') 
    }, 10000);
  },
};
</script>
