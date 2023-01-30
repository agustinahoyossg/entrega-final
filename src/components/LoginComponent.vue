<template>
  <div class="componente-login m-5 w-25 ">
    <h3 class="mb-4" >Login</h3>
      <form id="formulario-login" action="" @submit.prevent="validarUsuario"  autocomplete="off">
        <input autocomplete="false" name="hidden" type="text" style="display:none;">
        <div class="input-group mb-3">
          <input type="email" v-model="email" class="form-control" placeholder="Usuario" aria-label="Usuario" aria-describedby="basic-addon1">
        </div>   
        <div class="input-group mb-3">
          <input type="password" v-model="password" class="form-control" placeholder="Contraseña" aria-label="Contraseña" aria-describedby="basic-addon2">
        </div>
        <div class="input-group mb-3">
          <input type="submit" class="btn btn-warning" value="Ingresar" aria-label="Login" aria-describedby="basic-addon2"/>     
        </div>
      </form>
      <div  class="alert alert-warning" role="alert">
        <h5> Usario de prueba: </h5> 
          <p>
            email: yamiusu@yahoo.com password: yamiusu23
          </p> 
        <h5> Admin de prueba: </h5> 
          <p>
              email: admin@eventos.com password: admin2023
          </p> 
          <a class="alert-link " target="_blank" href="https://mockapi.io/projects/63a21bbcba35b96522f039e3">Mockupi link</a>
      </div>
  </div>
</template>

<script>

import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    name: 'LoginComponent',
    data() {
      return {
        usuarios: [],
        email: '',
        password: '',
        existeUsuario: false,
        existeAdmin: false,
      }
    },
    created(){
      this.getUsersApi()
    },
    computed:{
      ...mapGetters(['getAllUsers', 'getActiveUser']),
    },
    methods: {
      ...mapActions(['getUsersApi']),
      ...mapMutations(['setUser']),

      validarUsuario(){
          const usuarioIngresado = this.getAllUsers.filter(usuario => usuario.email === this.email && usuario.password === this.password)
              if (usuarioIngresado.length === 1 ){
                  this.setUser(usuarioIngresado[0])
              }
              else {
                  this.setUser(null)
                  alert("El usuario no existe, por favor registrate")
              }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .componente-login{
    width: 600px;
  }
</style>
