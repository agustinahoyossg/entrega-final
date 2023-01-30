<template>
  <div class="m-3">
    <div class="cards-container"> 
      <div class="card"  >
        <img class="card-img-top card-img" :src="detalle.image" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ detalle.name }}</h5>
          <p class="card-text">En {{ detalle.eventplace }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ detalle.date }}</li>
          <li class="list-group-item">Valor: £ {{ detalle.price }}</li>
        </ul>
        <div class="card-body" >
          <button @click="abrirDetalle()" class="card-link btn btn-primary" >+ Info</button>
          <button class="card-link btn btn-warning"  @click="addToCart" >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
             </svg>
              Añadir
            </button>
        </div>
      </div>
      <div v-if="modal" class="product-modal-wrapper">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title text-warning">{{detalle.name}}</h2>
              <button type="button" class="btn btn-danger" @click="abrirDetalle" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <ProductDetail :detalle="detalle" @clickCantidad="cantidad=$event" />
            <div class="modal-footer">
              <button type="button" @click="addToCart" class="btn btn-warning">Añadir al carrito</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import ProductDetail from './ProductDetail.vue'
import { mapMutations, mapGetters, mapActions } from 'vuex';
export default {
  name: 'ProductCard',
  data() {
    return {
        modal: false,
        cantidad: 1
  
    };
  },
  components: {
      ProductDetail,
    },
  props: {
   detalle: Object
  
  },
  methods: {
      ...mapMutations(['añadirAlCarrito','setCantidadElemento']),
      ...mapGetters(['getCarrito','getActiveUser']),
      ...mapActions(['modificarEventoApi']),

      abrirDetalle() {
          this.modal = !this.modal;
          this.cantidad = 1;
      },
      addToCart() {
        var index = this.getCarrito().findIndex(e => e.id === this.detalle.id);
          if (index !== -1) {
            let n = 1
            while (n <= this.cantidad) {
            this.setCantidadElemento(index)
            n++
            }
        } else {
            let eventoCantidad = this.detalle
            const guardaCantidad = this.cantidad
            eventoCantidad.cantidad = guardaCantidad
            this.añadirAlCarrito(eventoCantidad)
  
      }
      this.modal = false
      },


 
    }
  } 


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards-container{
  color:black;
  
}
.card-img{
  object-fit: cover; 
  height: 250px;
}
.btn {
  font-size: 22px !important;

}
svg {
  margin-right: 10px;
  margin-bottom:2px;
}
.product-modal-wrapper{
  position: fixed;
  z-index: 10;
  background-color: rgba(78, 78, 78, 0.7);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 100px;
  backdrop-filter: blur(10px)

}
.modal-content{
  width: 1000px;
  height: 830px;
  padding: 20px;
  background-color:#343a40 ;
  box-shadow: 0px 0px 40px rgba(255, 255, 255, 0.7);
 
}
.card{
  border: none;
  width: 22rem;
}

@media only screen and (max-width: 1692px) {
  .card{
    width: 18rem;
  }
}
</style>
