<template>
   <div>
    <NavBarVue/>
    <div class="container mt-4 mb-4 p-3 d-flex justify-content-center mt400"> 
      <div class="card p-4"> <div class=" image d-flex flex-column justify-content-center align-items-center"> 
        <button class="btn btn-secondary"> 
          <img :src="getActiveUser.avatar" height="100" width="100" />
        </button> 
        <span class="name mt-3">Usuario: {{getActiveUser.name}}</span> 
        <span class="idd">Email: {{getActiveUser.email}}</span> 
          
                </div>
               </div> 
              </div>
  </div>


</template>

<script>
import NavBarVue from '@/components/NavBar.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'UserView',
  components: {
    NavBarVue,
   
},
computed: {
      ...mapGetters(['getCarrito','getActiveUser']),
   }
  }
</script>

<style scoped>
span{
  color: black;
}

.mt400{
  padding-top: 200px !important;
  padding-bottom: 300px !important;
}
</style>