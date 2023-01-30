<template>
  <div class="mt-5 componente">
    <h3 >Lista de pedidos recibidos</h3>
    <table class="table table-dark mt-2"  v-if="this.getComprasRecibidas.length > 0">
      <thead>
        <tr class="table-active">
          <th scope="col">ID de Compra</th>
          <th scope="col">Fecha de compra</th>
          <th scope="col">Nombre de usuario</th>
          <th scope="col">Email de usuario</th>
 
          <th scope="col">Datos de la compra</th>  
          <th scope="col">Total Compra</th>
          <th scope="col">Procesar</th>
       
        </tr>
      </thead>
      <tbody>
        <tr class="mb-3" v-for="(compra, index) of this.getComprasRecibidas" :key="index">
          
          <td >{{compra.id}}</td>
          <td>{{formatearFecha(compra.createdAt)}}</td>
          <td>{{compra.usuario.name}}</td>
          <td>{{compra.usuario.email}}</td>

          <table class="table-bordered table-sm ">
            <thead  class="table-active"> 
              <th scope="col">Nombre Evento</th>
              <th scope="col">Id evento</th>
              <th scope="col">Valor unitario</th>
              <th scope="col">Cantidad de entradas</th>
            </thead>
            <tr v-for="(evento, index) of compra.pedido" :key="index"> 
              <td>
                {{evento.name}}
              </td>
                <td>
                  id: {{ evento.id }} 
                </td>
                <td>
                  £ {{evento.price}}
                </td>
                <td>
                  {{ evento.cantidad }} unidades
                </td>
               
            </tr>
            
          </table>
          <td>£ {{compra.total}}</td>
          <td class="">
            <button @click="procesar(compra.id)" class="btn btn-success mb-2">Entregado</button>
            <button @click="procesar(compra.id)" class="btn btn-danger mb-2 ml-3">Cancelar pedido</button>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';


export default {
  name: 'ListaPedidos',
  data(){
   return {

   }
  },
  created(){
      this.getComprasRecibidasApi()
  },
  computed: {
      ...mapGetters(['getComprasRecibidas']),
   },
   methods: {
    ...mapActions(['getComprasRecibidasApi','eliminarCompraApi']),

    
    formatearFecha(fecha) {
      let date = new Date( Date.parse(fecha) )
      return  date.toLocaleString('en-GB')
    },
    procesar(id){
      this.eliminarCompraApi(id)
    }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.componente{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  
}
.card-img{
  object-fit: cover; 
  height: 250px;
}
</style>
