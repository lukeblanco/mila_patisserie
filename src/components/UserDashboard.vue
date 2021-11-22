<template>
  <div>
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
    <div class="flex flex-col mt-10">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nombre de usuario
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center border-l text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center border-l text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Eliminar
                  </th>
                </tr>
              </thead>

              <tbody
                v-for="user in users"
                :key="user.id"
                class="bg-white divide-y divide-gray-200"
              >
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div
                      class="flex justify-center items-center ml-4 text-sm font-medium text-gray-900"
                    >
                      {{ user.username }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex justify-center items-center text-sm font-medium text-gray-900">
                      {{ user.email }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap flex justify-center items-center">
                    <button
                      type="button"
                      v-on:click="eliminarUser(user.id)"
                      class="px-6 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-red-900"
                    >
                      Eliminar Usuario
                    </button>
                  </td>
                </tr>
                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
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
        } catch (error) {
          console.log("ERROR");
        }
      }
    },
  },
};
</script>
