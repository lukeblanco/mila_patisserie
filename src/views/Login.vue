
<template>
  <div class="flex items-center justify-center min-h-screen bg-fixed">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg border">
      <h3 class="text-2xl font-bold text-center">Login</h3>
      <form @click:submit.prevent id="login">
        <div class="mt-4">
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
                focus:outline-none focus:ring-1 focus:ring-blue-600
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
                focus:outline-none focus:ring-1 focus:ring-blue-600
              "
            />
          </div>
          <p v-if="error" class="text-red-800 font-bold pt-4">
            Has introducido mal el email o la contraseña.
          </p>

          <div class="flex items-baseline justify-between">
            <button
              type="button"
              v-on:click="login()"
              class="
                px-6
                py-2
                mt-4
                text-white
                bg-blue-600
                rounded-lg
                hover:bg-blue-900
              "
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from '../store';
export default {
  name: "login",

  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
      login() {
        const URL_USER = "https://61774b8c9c328300175f58a1.mockapi.io/api/Users";

        const json = {
          email: this.email,
        };
        axios
          .get(URL_USER, { params: json })
          .then((response) => {
            if (response.data[0].password == this.password) {
              this.adduser(response.data[0])
              if (response.data[0].admin) {
                console.log("es admin")
                this.$router.push({ name: "OrderList"});
              } else this.$router.push({ name: "Home" });
            } else {
              this.error = true;
              console.log("Contraseña/Usuario incorrecto");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
    adduser: (user) => {
      console.log("LLAMO adduser")
      console.log(user)
      store.dispatch("addUser", user);
      
    },
  },
};
</script>
