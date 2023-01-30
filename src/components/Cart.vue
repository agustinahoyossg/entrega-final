<template>
  <div class="mt-5 componente">
    <h3  v-if="this.getCarrito.length > 0">Carrito de compras</h3>
    <table class="table table-dark mt-2"  v-if="this.getCarrito.length > 0">
      <thead>
        <tr>
          <th scope="col">Evento</th>
          <th scope="col">Fecha</th>
          <th scope="col">Precio</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Total</th>
          <th scope="col">Agregar/Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(producto, index) of this.getCarrito" :key="index">
          <td>{{producto.name}}</td>
          <td>{{producto.date}}</td>
          <td>£ {{producto.price}}</td>
          <td>{{producto.cantidad}}</td>
          <td>£ {{sumarAlTotal(producto.price,producto.cantidad, producto.id)}}</td>
          <td><button @click="sumar(index)" class="btn btn-success mr-2">+</button>
            <button @click="restar(index)" class="btn btn-danger">-</button></td>
        </tr>
      </tbody>
    </table>

    <table class="table table-dark mt-2" v-if="this.getCarrito.length > 0"  >
      <thead>
        <tr>
          <th scope="col" >TOTAL £ {{total}}</th>
        </tr>
      </thead>
    </table>
    <table class="table table-dark mt-2"  v-if="this.getCarrito.length > 0">
      <thead>
        <tr>
          <th scope="col" ><button @click="enviarPedido()" class="btn btn-warning">Finalizar compra</button></th>
        </tr>
      </thead>
    </table>
    <table class="table table-dark mt-2"  >
      <thead>
        <tr>
          <th scope="col" v-if="pedidoEnviado">Tu pedido fue enviado con exito!<button class="btn btn-success ml-3" @click="pedidoEnviado=false"> X</button> </th>
        </tr>
      </thead>
    </table>

  </div>
</template>

<script>
import { mapGetters,mapMutations, mapActions } from 'vuex';

export default {
  name: 'MyCart',
  data(){
   return {
    total: 0,
    cantidad: 1,
    precios: [],
    pedidoEnviado: false
   }
  },
  computed: {
      ...mapGetters(['getCarrito','getActiveUser']),
   },
   methods: {
    ...mapMutations(['setCantidadElementoRestar','setCantidadElemento','setCarritoVacio', 'setCompra']),
    ...mapActions(['enviarCompra']),
    sumar(index){      
     
      this.setCantidadElemento(index)
      
    },
    restar(index){
     
        this.setCantidadElementoRestar(index)     
    },
    sumarAlTotal(precio, cantidad, id) {    
      const index = this.precios.findIndex(e => e.id === id)
      if (index > -1) {
        this.precios[index].total = precio * cantidad
      } else {
        this.precios.push({total: precio*cantidad, id})
      }
      this.sumarTotalPrecios()
        return (precio*cantidad) 
    },
    sumarTotalPrecios(){
      let totalFinal = this.precios.map(e => e.total).reduce((a, c) => { return a + c })
      this.total = totalFinal
    },
    enviarPedido(){
      this.pedidoEnviado = true;
      const nuevoPedido = {pedido: this.getCarrito, usuario: this.getActiveUser, total: this.total}
      this.setCompra(nuevoPedido)
      this.enviarCompra()
      this.total = 0;
      this.precios = []
      this.setCarritoVacio()
      this.setCompra({})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.componente{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  
}
.card-img{
  object-fit: cover; 
  height: 250px;
}
</style>
