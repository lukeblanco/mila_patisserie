<template>
    <div class="flex items-center justify-center min-h-screen">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg border">
        <h3 class="text-2xl font-bold text-center">Create Product</h3>
        <form @click:submit.prevent id="NewProd">  
            <div class="mt-4">
                <div>
                    <label class="block" for="name">Nombre</label>
                            <input type="text" name="Name" id="Name" placeholder="Name" v-model="name"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-600">
                            <p v-if="!this.name" class="text-red-400 pt-4 text-xs">Nombre no puede estar vacío</p>
                </div>
                <div>
                    <label class="block" for="description">Descripción</label>
                            <input type="text" name="Description" id="Description" placeholder="Description" v-model="description"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-600">
                                <p v-if="!this.description" class="text-red-400 pt-4 text-xs">Descripción no puede estar vacía</p>
                </div>
                <div>
                <label class="block" for="price">Precio</label>
                            <input type="number" name="Price" id="Price" placeholder="Price" v-model="price"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-600">
                </div>
                <div>
                     <label class="block" for="img">Imagen</label>
                            <input type="text" name="img" id="img" placeholder="Image" v-model="img"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-pink-600">
                                <p v-if="!this.img" class="text-red-400 pt-4 text-xs">Completar URL imagen</p>
                </div>
                 <div>
                     <label class="block" for="visible">Tiene Stock?</label>
                    <input type="checkbox" name="Visible" id="Visible" placeholder="Visible" v-model="visible">
                   
            </div>
              <div class="flex items-baseline justify-between">
                  
                    <button type="button" v-on:click="newProd()" class="px-6 py-2 mt-4 text-white bg-pink-600 rounded-lg hover:bg-pink-900">Create</button>
                </div>
            </div>
        </form>
    </div>
</div>

</template>

<script>
import axios from 'axios';
    export default {
    name: 'newProd',

    data() {
    return{
        name: '',
        description: '',
        price: '',
        img: '',
        visible: false,
        }
        
    },
    methods:{
        newProd() {
        const nameIsValid = !this.name
        const descIsValid = !this.description
        const imgIsValid = !this.img
        const URL_USER='https://61774b8c9c328300175f58a1.mockapi.io/api/Productos'    
        const json ={ 
        name: this.name,     
        description: this.description,
        price: this.price,
        img: this.img,
        visible: this.visible
        };
    
    
    if (!nameIsValid || !descIsValid || !imgIsValid) {
        axios.post(URL_USER,json)
            .then(data =>{
                console.log(data);
                this.$router.push("/productDash");
            })
     } else {
         console.log("Completar los datos vacíos")
     }
}
}}


</script>