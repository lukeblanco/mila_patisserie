<template>
  <div>
    <div class="mt-1 w-40 m-auto border border-red-500 mb-10" />
    <button
      type="button"
      v-on:click="goToCreateProduct()"
      class="
        align-content-center
        px-6
        py-2
        mt-4
        text-white
        bg-pink-600
        rounded-lg
        hover:bg-pink-900
      "
    >
      Create Product
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
                    class="px-5 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Imagen
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nombre del producto
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Descripcion
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Precio
                  </th>
                </tr>
              </thead>

              <tbody
                v-for="product in products"
                :key="product.id"
                class="bg-white divide-y divide-gray-200"
              >
                <tr>
                  <td class="flex items-center justify-center">
                    <img
                      class="py-2 w-20 rounded-md"
                      :src="
                        require(`../../public/img-products/${product.img}.jpg`)
                      "
                      alt=""
                    />
                  </td>
                  <td class="py-4 whitespace-nowrap">
                    <div class="flex items-center justify-center">
                      <div class="text-sm font-bold text-gray-900">
                        {{ product.name }}
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <div class="text-sm text-gray-500">
                      {{ product.description }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-center">
                    <span
                      class=" px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      {{ product.price }}
                    </span>
                  </td>
                </tr>
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
  name: "ProductDashboard",
  data() {
    return {
      products: [],
      postID: null,
    };
  },
  mounted() {
    fetch("https://61774b8c9c328300175f58a1.mockapi.io/api/Productos", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => (this.products = data))
      .catch((err) => console.log(err.message));
    console.log(this.products);
  },
  components: {},

  methods: {
    async goToCreateProduct() {
      this.$router.push("/newProd");
    },
  },
};
</script>
