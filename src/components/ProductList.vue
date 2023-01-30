<template>
  <div class="cards-wrapper" >
    <ProductCard  class="m-4" v-for="(evento, index) of this.getListaEventos" :key="index" :detalle="evento"/>
    <h2 v-if="this.getListaEventos.length===0">Lo sentimos, en este momento no hay eventos disponibles.</h2>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'ProductList',
    components: {
      ProductCard
    },
    data(){
      return {
        eventoObject: {}
      }
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
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  width: 80%;
}
</style>


