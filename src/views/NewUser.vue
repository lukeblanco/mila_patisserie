<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg border">
      <h3 class="text-2xl font-bold text-center">Create User</h3>
      <form @click:submit.prevent id="NewUser">
        <div class="mt-4">
          <div>
            <label class="block" for="username">Usuario</label>
            <input
              type="text"
              name="Username"
              id="Username"
              placeholder="Username"
              v-model="username"
              class="
                w-full
                px-4
                py-2
                mt-2
                border
                rounded-md
                focus:outline-none focus:ring-1 focus:ring-pink-600
              "
            />
          </div>
          <div>
            <label class="block" for="email">Email</label>
            <input
              type="text"
              name="Email"
              id="Email"
              placeholder="Email"
              v-model="email"
              class="
                w-full
                px-4
                py-2
                mt-2
                border
                rounded-md
                focus:outline-none focus:ring-1 focus:ring-pink-600
              "
            />
          </div>
          <div class="mt-4">
            <label class="block">Password</label>
            <input
              type="password"
              name="Pass"
              id="Pass"
              placeholder="Password"
              v-model="password"
              class="
                w-full
                px-4
                py-2
                mt-2
                border
                rounded-md
                focus:outline-none focus:ring-1 focus:ring-pink-600
              "
            />
          </div>
          <div class="flex items-baseline justify-between">
            <button
              type="button"
              v-on:click="newUser()"
              class="
                px-6
                py-2
                mt-4
                text-white
                bg-pink-600
                rounded-lg
                hover:bg-pink-900
              "
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "newUser",

  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    newUser() {
      const URL_USER = "https://61774b8c9c328300175f58a1.mockapi.io/api/Users";
      const json = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      axios
        .post(URL_USER, json)
        .then((data) => {
          console.log(data);
          window.alert("Usuario Creado");
          this.$router.push("/admin");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style scoped>
.left {
  text-align: left;
}
</style>