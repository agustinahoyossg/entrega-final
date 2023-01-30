<template>
   <div>
    <NavBarVue />
      <add-product/>
      <ModificarEvento  :evento="eventoObject"  />
   </div>
</template>

<script>

import AddProduct from '@/components/AddProduct.vue'
import NavBarVue from '@/components/NavBar.vue';
import ModificarEvento from '@/components/ModificarEvento.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'AdminView',
  data() {
    return {
      eventoObject: {},
  
    };}
    ,
    computed: {
      ...mapGetters(['getActiveUser']),
   },
  
  components: {

    AddProduct,
    NavBarVue,
    ModificarEvento
  }, 
}
</script>

<style scoped>

</style>