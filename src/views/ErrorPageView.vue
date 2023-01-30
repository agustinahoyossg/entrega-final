<template>
   <div>
    <h1>Lo sentimos, la pagina no existe.</h1>
    <button @click="goHome()" class="btn btn-danger">Volver </button>

   </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ErrorPage',
  components: {
},
computed: {
      ...mapGetters(['getActiveUser']),
   },
  
methods: {
  goHome(){
    this.$router.push('/')
  }
}
  }
</script>

<style scoped>

</style>