<template>
  <div>
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
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nombre de usuario
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Lista de productos
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Precio
                  </th>
                </tr>
              </thead>

              <tbody
                v-for="order in orderList"
                :key="order.id"
                class="bg-white divide-y divide-gray-200"
              >
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="../assets/profile-user.png"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{order.username}}
                        </div>
                        <div class="text-sm text-gray-500">
                          id:{{order.userId}}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div @click="viewList(order.products, order.total)" class="text-sm text-blue-400 underline cursor-pointer">
                      Ver lista de productos
                    </div>
                    <div v-if="order.products" class="text-sm text-gray-500">
                      Cantidad: {{ order.products.length }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      ${{ order.total }}
                    </span>
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
export default {
  name: "orderlist",
  data() {
    return {
      orderList: [],
    };
  },
  mounted() {
    fetch("https://61774b8c9c328300175f58a1.mockapi.io/api/Orders", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => (this.orderList = data))
      .catch((err) => console.log(err.message));
    console.log(this.orderList, "order list 22222");
  },
  methods: {
    viewList: function(products, total) {
      this.$router.push({
        name: "orderProductList",
        params: { data: { products, total } },
      });
    },
  },
};
</script>
