<template>
  <div>
    <h1 class="text-4xl text-center">Administrador</h1>
    <div class="mt-1 w-40 m-auto border border-red-500 mb-10" />
    <button
      type="button"
      @click="showComponent('user')"
      class="
        align-content-center
        px-6
        py-2
        mt-4
        text-white
        bg-red-900
        rounded-lg
        hover:bg-red-900
        mr-2
      "
    >
      User Dashboard
    </button>
    <button
      type="button"
      @click="showComponent('product')"
      class="
        align-content-center
        px-6
        py-2
        mt-4
        text-white
        bg-red-900
        rounded-lg
        hover:bg-red-900
        mr-2
      "
    >
      Product Dashboard
    </button>
    <button
      type="button"
      @click="showComponent('list')"
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
      Lista de ordenes
    </button>
    <div v-if="productDashboard"><ProductDashboard /></div>
    <div v-if="userDashboard"><UserDashboard /></div>
    <div v-if="orderList"><OrderList /></div>
  </div>
</template>
<script>
import ProductDashboard from "../components/ProductDashboard.vue";
import UserDashboard from "../components/UserDashboard.vue";
import OrderList from '../components/OrderList.vue'
export default {
  name: "Admin",
  data() {
    return {
      users: [],
      userDashboard: false,
      productDashboard: true,
      orderList: false,
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
  components: {
    ProductDashboard,
    UserDashboard,
    OrderList
  },
  methods: {
    showComponent(component) {
      switch (component) {
        case "user":
          this.orderList = false;
          this.productDashboard = false;
          this.userDashboard = true;
          break;
        case "product":
          this.orderList = false;
          this.productDashboard = true;
          this.userDashboard = false;
          break;
        case "list":
          this.orderList = true;
          this.productDashboard = false;
          this.userDashboard = false;
          break;
        default:
          break;
      }
    },
  },
};
</script>
