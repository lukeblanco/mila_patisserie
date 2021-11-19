<template>
  <div>
    <Header/>
    <h1 class="text-4xl text-center">User Dashboard</h1>
    <div class="mt-1 w-40 m-auto border border-red-500 mb-10" />
    <button type="button" v-on:click="goToCreateUser()" class="align-content-center px-6 py-2 mt-4 text-white bg-pink-600 rounded-lg hover:bg-pink-900">Create User</button>
    <h1 class="text-4xl text-left">Users</h1>
    <br>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="user in users" :key="user.username">
        <h2 class="font-bold mb-1">{{ user.username }}</h2>
      </div>
    </div>
    <br> <br>
    <br>
    </div>
</template>
<script>

export default {
  name: "UserDashboard",
  data() {
    return {
      users: [],
      orders: [],
      postID: null,
    };
  },
  mounted(){
    fetch("https://61774b8c9c328300175f58a1.mockapi.io/api/Users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => (this.users = data))
      .catch((err) => console.log(err.message));
    console.log(this.users);
    
  

   const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Vue POST Request Example" })
    };
    fetch("https://61774b8c9c328300175f58a1.mockapi.io/api/Users", requestOptions)
      .then(response => response.json())
      .then(data => (this.postId = data.id));
  },
  components: {
  },

   methods:{
        async goToCreateUser(){
        this.$router.push('/newUser') 
        }
}
   }
</script>