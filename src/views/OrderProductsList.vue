<template>
  <div>
    <div v-if="total != 0">
     <div class="grid grid-cols-12 py-2 border-b border-t">
     <h2
            class="font-bold mb-1 col-span-3 flex justify-center items-center border-r"
          >
            Nombre
          </h2>
          <p
            class="italich-16 col-span-4 flex justify-center items-center text-center border-r"
          >
            Id
          </p>
          <p class="flex justify-center items-center text-center border-r">
           Cantidad
          </p>
          <p class="flex justify-center items-center text-center border-r">
            Precio 
          </p>
          <p class="flex justify-center items-center text-center border-r">
           subTotal
          </p>
     </div>
      <div v-for="item in products" :key="item.product.name">
        <div class="grid grid-cols-12 py-2 border-b border-t">
         <!-- <img
            :src="require(`../../public/img-products/${item.product.img}.jpg`)"
            class="mb-1 mx-auto col-span-1"
          /> -->
          <h2
            class="font-bold mb-1 col-span-3 flex justify-center items-center border-r"
          >
            {{ item.product.name }}
          <p
            class="italich-16 col-span-4 flex justify-center items-center text-center border-r"
          >
            {{ item.product.id }}
          </p>
          </h2>
          <p class="flex justify-center items-center text-center border-r">
            {{ item.quantity }}
          </p>
          <p class="flex justify-center items-center text-center border-r">
            ${{ item.product.price }}
          </p>
          <p class="flex justify-center items-center text-center border-r">
            ${{ item.total }}
          </p>
        </div>
      </div>
      <div class="grid grid-cols-12">
        <div
          class="col-start-11 col-span-2 grid grid-cols-2 py-2 border-t-2 border-b-2 border-black"
        >
          <p
            class="flex justify-center items-center font-bold py-7 border-r border-l"
          >
            Total
          </p>
          <p class="col-start-2 flex justify-center items-center">
            ${{ total }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

    export default {
    data() {
    return {
      products:  [],
      total: 0,
    };
     },
     created(){
         this.products= this.$route.params.data.products;
         this.total = this.$route.params.data.total;
     }
   };
</script>