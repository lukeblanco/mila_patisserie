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
          <p v-if="erroruser" class="text-red-800 font-bold pt-4">
            Introduciste un nombre invalido o esta vacio
          </p>
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
          <p v-if="emailerror" class="text-red-800 font-bold pt-4">
            Direccion de correo incorrecta
          </p>
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
          <p v-if="passworderror" class="text-red-800 font-bold pt-4">
            La contraseña es invalida
          </p>
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
      username: "",
      email: "",
      password: "",
      erroruser: false,
      emailerror: false,
      passworderror: false,
      error: false,
      admin: "false"
    };
  },
  methods: {
    newUser() {
      const URL_USER = "https://61774b8c9c328300175f58a1.mockapi.io/api/Users";
      const json = {
        username: this.username,
        email: this.email,
        password: this.password,
        admin: this.admin
      };
       if (!this.username) {
        this.erroruser = true;
        this.error = true;
        console.log("Contraseña/Usuario incorrecto");
      }
      if (!this.email) {
        this.emailerror = true;
        this.error = true;
        console.log("Error en email");
      }
      if (!this.password) {
        this.passworderror = true;
        this.error = true;
        console.log("Error en contraseña");
      }
      if (!this.error) {
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
      }
      this.error = false
    },
      //var emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  },
};
</script>
<style scoped>
.left {
  text-align: left;
}
</style>