<template>
  <div id="app" class="xl:max-w-7xl mx-auto mt-5">
    <Header />
    <router-link to="/" />
  </div>
</template>
<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
