<template>
    <div>
    hola
            <div class="mt-1 w-40 m-auto border border-red-500 mb-10" />
    <div class="grid grid-cols-4 gap-5 mb-2">
      <div v-for="producto in products" :key="producto.name">
          <div class="grid grid-cols-6">
            <h2 class="font-bold mb-1 col-span-5">{{ producto.name }}</h2>
            <p class="text-purple-800 text-right font-bold">
              ${{ producto.price }}
            </p>
          </div>
          <p class="italic h-16">{{ producto.description }}</p>
      </div>
    </div>
    </div>
</template>

<script>

    export default {
    data() {
    return {
      products:  [],
    };
     },
     created(){
         this.products= this.$route.params.data;
     }
   };
</script>