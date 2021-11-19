<template>
    <div>
    hola
        <div v-for="producto in products" :key="producto.name">
                <h2 class="font-bold mb-1">{{ producto.name }}</h2>
                <p class="italic">{{ producto.description }}</p>
                <p class="text-purple-600 text-right">${{ producto.price }}</p>
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