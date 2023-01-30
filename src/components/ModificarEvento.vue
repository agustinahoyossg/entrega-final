<template>
    <div class="mt-5">
        <h2>Modificar lista de eventos existentes</h2>
        <div class="cards-container d-flex flex-row p-3" v-for="(evento, index) of this.getListaEventos" :key="index"> 
            <CrudCard :evento="evento"/>

      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  import CrudCard from "./CrudCard"
  export default {
    name: 'ModificarEvento',
    data() {
        return {

        }
    },
    components: {
        CrudCard
    },
    created(){
      this.getProductListApi()
      
  },
  computed: { 
    ...mapGetters(['getListaEventos']),
  },
  methods: {
    ...mapActions(['getProductListApi']),

  },

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  </style>
  