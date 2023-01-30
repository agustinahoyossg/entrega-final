<template>
  <div class="">
  
    <div class="cards-container"> 
      <div class="card d-flex flex-row text-white bg-dark" >
        <img class="card-img-top card-img" :src="detalle.image" alt="Card image cap">
        <div class="d-flex flex-column p-5">
          <div class="card-body">
            <h3 class="card-text">En {{ detalle.eventplace }}</h3>
            <p class="card-text">Capacidad:  {{ detalle.capacity }}</p>
          </div>
          <ul class="list-group list-group-flush text-dark">
            <li class="list-group-item">Fecha: {{ detalle.date }}</li>
            <li class="list-group-item">Apertura puertas: {{ detalle.doorsopenat }} HS</li>
            <li class="list-group-item">Valor: £ {{ detalle.price }}</li>
          </ul>
          <div class="card-body">
            <p>{{ detalle.description }}</p>
            <p>Cantidad: {{ cantidad }}</p>
            <a @click="sumar" class="card-link btn btn-success">+</a>
            <a @click="restar" class="card-link btn btn-danger">-</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  name: 'ProductDetail',
  data() {
    return {
        cantidad: 1,
  
    };
  },
  props: {
    detalle: Object,

  },
  beforeDestroy(){ 
    this.cantidad = 1;
    this.$emit("clickCantidad", this.cantidad); 
  },
  methods: {
   ...mapMutations(['setCantidadElemento']),
   ...mapGetters(['getCarrito']),
    sumar(){      
      this.cantidad += 1;
      this.$emit("clickCantidad",this.cantidad);

    },
    restar(){
      if (this.cantidad > 1){        
        this.cantidad -= 1;
      }
      this.$emit("clickCantidad", this.cantidad);
      

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card-img{
  object-fit: cover; 
  width:400px;
}
</style>
