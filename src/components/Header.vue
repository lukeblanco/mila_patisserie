<template>
  <div>
    <div class="grid grid-cols-12">
        <router-link to="/">Home</router-link>
        <router-link to="/carrito" class="col-start-11 text-right"> Carrito </router-link>
        <router-link to="/login" class="col-start-12 text-center"> Login </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {
    msg: String,
  },
};
</script>
