<template>
  <div>
    <Header />
    <h1 class="text-4xl text-center">User Dashboard</h1>
    <div class="mt-1 w-40 m-auto border border-red-500 mb-10" />

    <button
      type="button"
      v-on:click="goToCreateUser()"
      class="
        align-content-center
        px-6
        py-2
        mt-4
        text-white
        bg-red-900
        rounded-lg
        hover:bg-red-900
      "
    >
      Agregar Usuario
    </button>

    <div class="mt-1 w-40 m-auto border border-red-500 mb-10" />
    <div class="grid grid-cols-4 gap-5">
      <div v-for="user in users" :key="user.username">
        <tr>
          <td>{{ user.username }}</td>
        </tr>

        <td>{{ user.email }}</td>
        <!--  <h2 class="font-bold mb-1">{{ user.username }} </h2>
                        <div class="flex items-baseline justify-between">-->
        <button
          type="button"
          v-on:click="eliminarUser(user.id)"
          class="
            px-6
            py-2
            mt-4
            text-white
            bg-red-600
            rounded-lg
            hover:bg-red-900
          "
        >
          Eliminar Usuario
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "UserDashboard",
  data() {
    return {
      users: [],
      orders: [],
      postID: null,
    };
  },
  mounted() {
    fetch("https://61774b8c9c328300175f58a1.mockapi.io/api/Users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => (this.users = data))
      .catch((err) => console.log(err.message));
    console.log(this.users);
  },
  components: {},

  methods: {
    async goToCreateUser() {
      this.$router.push("/newUser");
    },
    async eliminarUser(idUsuario) {
      const URL_USER = "https://61774b8c9c328300175f58a1.mockapi.io/api/Users/";
      var resultado = window.confirm("Estas seguro de eliminar el usuario?");
      if (resultado === true) {
        try {
          await axios.delete(URL_USER + idUsuario);
          this.$router.go(0);
        } catch (error) {
          console.log("ERROR");
        }
      }
    },
  },
};
</script>