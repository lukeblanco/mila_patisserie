 <template>
  <div>
    <Header />
    <h1 class="text-4xl text-center">Administrador</h1>
    <div class="mt-1 w-40 m-auto border border-red-500 mb-10" />
    <button
      type="button"
      v-on:click="goToUserDashboard()"
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
      User Dashboard
    </button>
    <button
      type="button"
      v-on:click="goToProductDashboard()"
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
      Product Dashboard
    </button>
  </div>
</template>
<script>
export default {
  name: "Admin",
  data() {
    return {
      users: [],
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
    async goToUserDashboard() {
      this.$router.push("/userDashboard");
    },
    async goToProductDashboard() {
      this.$router.push("/productDashboard");
    },
  },
};
</script>
