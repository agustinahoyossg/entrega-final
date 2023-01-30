<template>
  <div class="container-fluid p-0">
    <NavBar v-if="this.getActiveUser.type"/>
    <div class="banner">
      <h1>London Underground</h1>
      <h2>Tu sitio de tickets online</h2>
    </div>
      <div class="contenedor-forms" v-if="!this.getActiveUser.type" >
        <LoginComponent />
        <registration-component />    
      </div>
        <h1 v-if="this.getActiveUser.type" >Bienvenido {{this.getActiveUser.type}}: {{this.getActiveUser.name}}</h1>
      <ProductList v-if="this.getActiveUser.type === 'usuario'"/>
      <Cart id="carrito" v-if="this.getActiveUser.type === 'usuario'"/>
      <ListaPedidos v-if="this.getActiveUser.type === 'admin'"/>
      <a class="btn btn-warning flotante" href="#carrito" v-if="this.getActiveUser.type === 'usuario' && this.getCarrito.length > 0">VER CARRITO</a>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponent from '@/components/LoginComponent.vue'
import RegistrationComponent from '@/components/RegistrationComponent.vue'
import ProductList from '@/components/ProductList.vue'
import { mapGetters } from 'vuex'
import NavBar from '@/components/NavBar.vue'
import Cart from '@/components/Cart.vue'
import ListaPedidos from '@/components/ListaPedidos.vue'

export default {
  name: 'HomeView',
  components: {
    LoginComponent,
    RegistrationComponent,
    ProductList,
    NavBar,
    Cart,
    ListaPedidos
},
  computed:{
      ...mapGetters(['getActiveUser','getCarrito']),
    },
}

//how to goback to last route this.$router.go(-1)
</script>

<style scoped>
.banner>h1 {
  font-weight: bold;
  font-size: 75px;
  color: rgb(255, 0, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.banner> h2 {
  font-size: 55px;
}
.contenedor-forms {
  display: flex;
  margin: auto;
  justify-content: center;
  align-content: flex-start;
}
.banner {
  background-image: url('https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2022/01/21174658/shutterstock_1375698434-2_ccexpress.jpeg');
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 15%;
  margin-bottom: 120px;
}

.flotante {
  position: fixed;
  top: 120px;
  right: 20px;
}
</style>
