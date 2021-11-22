<template>
  <div>
    <div class="grid grid-cols-12 mb-8 pb-2 border-b">
      <router-link to="/">Home</router-link>
      <router-link to="/carrito" class="col-start-11 text-right">
        <div v-if="contador > 0" class="inline-flex">
          <img src="../../public/bolsa-de-la-compra-llena.png" class="w-8" />
          <div class="bg-blue-300 rounded-full w-6 absolute ml-5">
            <p class="text-black flex justify-center items-center text-sm">
              {{ contador }}
            </p>
          </div>
        </div>
        <p v-else class="inline-flex">
          <img src="../../public/bolsa-de-la-compra.png" class="w-8"/>
        </p>
      </router-link>
      <router-link to="/login" class="col-start-12 flex justify-center">
        <img src="../../public/login.png" class="w-9 -mt-1 mb-1"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters({ contador: "getContador" }),
  }
};
</script>
