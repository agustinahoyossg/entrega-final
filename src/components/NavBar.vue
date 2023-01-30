<template>
    <div id="navBar">
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Underground.svg/1200px-Underground.svg.png" width="80"/></a>
        <div class="d-flex align-items-center"> 
          <router-link to="/">Home</router-link> 
          <router-link v-if="getActiveUser.type === 'usuario'" to="/user">Usuario</router-link>
          <router-link v-if="getActiveUser.type === 'admin'" to="/admin">Admin</router-link>
          <button class="btn btn-danger ml-4" @click="logout()" >Cerrar Sesion</button>
        </div>
      </nav>
      <router-view/>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'NavBar',
    computed:{
        ...mapGetters(['getActiveUser']),
      },
      methods: {
        ...mapMutations(['setUser']),
        logout(){
          this.setUser({
                name: null,
                email: null,
                password: null,
                id: null,
                type: null,
                avatar: null,
              })

          if (this.$route.name !== 'home') {
              this.$router.push({ name: 'home' })
          }
        }
      }
  }
  </script>
  <style>  
  nav {
    
    justify-content: space-between;
  }
  
  nav a {
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
    margin-left: 15px;
  }
  nav a:hover {
    color: #ece81d;
    text-decoration: underline;
  }
  
  nav a.router-link-exact-active {
    color: #ece81d;
  }
  </style>
  