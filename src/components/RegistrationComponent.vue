<template>
  <div class="componente-login m-5 w-25 ">
    <h3 class="mb-4">Registrarse</h3>
    <form  @submit="registrarUsuario()" autocomplete="off">
        <input autocomplete="false" name="hidden" type="text" style="display:none;">
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="nueuvoUsuario.name" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1">
        </div>   
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="nueuvoUsuario.avatar"  placeholder="Avatar(link de imagen)" aria-label="Avatar" aria-describedby="basic-addon1">
        </div>   
        <div class="input-group mb-3">
          <input type="email" class="form-control" v-model="nueuvoUsuario.email" placeholder="Usuario (tu email)" aria-label="Usuario" aria-describedby="basic-addon1">
        </div>   
        <div class="input-group mb-3">
          <input type="password" class="form-control" v-model="nueuvoUsuario.password"  placeholder="Contraseña" aria-label="Contraseña" aria-describedby="basic-addon2"/>
      </div>
        <div class="input-group mb-3">
          <input type="submit" class="btn btn-warning" aria-label="Registrarse" aria-describedby="basic-addon2"/>
        </div>
    </form>
 <p v-if="mensaje">{{mensaje}}</p>
  </div>
</template>

<script>
 import { mapActions, mapMutations } from 'vuex'
// import axios from 'axios'
export default {
  name: 'RegistrationComponent',
  data() {
        return {
            nueuvoUsuario: {
              name: '',
              avatar:'',
              email:'',
              password: '',
              type: 'usuario'
          },
          mensaje: null
        }
    }, 
    methods: {
      ...mapMutations(['setNewUser']),
      ...mapActions(['registrarNuevoUsuario', 'getUsersApi']),
      registrarUsuario: function () {
         this.setNewUser(this.nueuvoUsuario)
         this.registrarNuevoUsuario()
         this.mensaje= "Tu usuario fue registrado exitosamente. Ya podes loguearte con tus credenciales."       
      }
    }
}
</script>