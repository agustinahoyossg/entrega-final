<template>
    <div class="card d-flex flex-row bg-dark m-3" >
        <img class="card-img-top card-img" :src="evento.image" alt="Imagen de evento">
        <div class="detalles-contenedor">
          <ul class="list-group list-group-flush text-dark w500">
            <li class="list-group-item">Nombre del evento: {{ evento.name }}</li>
            <li class="list-group-item">Id del evento: {{ evento.id }}</li>
            <li class="list-group-item">En {{ evento.eventplace }}</li>
            <li class="list-group-item">Capacidad total {{ evento.capacity }} </li>
            <li class="list-group-item">Fecha: {{ evento.date }}</li>
            <li class="list-group-item">Apertura puertas: {{ evento.doorsopenat }} HS</li>
            <li class="list-group-item">Valor: £ {{evento.price }}</li>
            <li class="list-group-item">Descripción: {{ evento.description }}</li>
          </ul>

        </div>
        <div class=" d-flex p-3">
          <form class="" id='crudevento' @submit.prevent="enviarEventoModificado(evento, eventoModificado)" >
              <div>
                  <label class="m-3">Modificar nombre del evento: <input type="text" class="form-control" v-model="eventoModificado.name" placeholder="Nuevo nombre" aria-label="Nuevo nombre" aria-describedby="basic-addon1"/></label>
                  <label class="m-3">Modificar lugar del evento: <input type="text" class="form-control" v-model="eventoModificado.eventplace" placeholder="Lugar del evento" aria-label="Lugar" aria-describedby="basic-addon1"/></label>
                  <label class="m-3">Modificar capacidad: <input type="number" class="form-control" v-model="eventoModificado.capacity" placeholder="Capacidad del recinto" aria-label="Capacidad" aria-describedby="basic-addon1"/></label>
                  <label class="m-3">Modificar fecha del evento: <input type="text" class="form-control" v-model="eventoModificado.date" placeholder="Fecha dd/mm/aaaa" aria-label="Fecha" aria-describedby="basic-addon1"/></label>
                  <label class="m-3">Modificar horario de apertura: <input type="text" class="form-control" v-model="eventoModificado.doorsopenat" placeholder="Hora de apertura en HH:mm" aria-label="Apertura" aria-describedby="basic-addon1"/></label>
                  <label class="m-3">Modificar precio del evento:  <input type="number" class="form-control" v-model="eventoModificado.price" placeholder="Valor" aria-label="Precio" aria-describedby="basic-addon1"/></label>
                  <label class="m-3">Modificar descripcion del evento: <input type="text" class="form-control" v-model="eventoModificado.description" placeholder="Descripcion" aria-label="Descripcion" aria-describedby="basic-addon1"/></label>
             
              </div>
              <button type="submit" class="btn btn-success mt-3">Enviar cambios</button>

              <div  v-if="cambiosEnviados">
                <h3 class='txt-danger'>Nuevos datos enviados.</h3>
              </div>
          </form>
      </div>
      </div>
</template>

<script>
import {  mapActions } from 'vuex';
  export default {
    name: 'ModificarEvento',
    data() {
        return {
            eventoModificado: {
                id: null,
                name: null,
                date:null,
                doorsopenat: null,
                price:null,
                description: null,
                image:null,
                capacity: null,
                eventplace: null,

            },
            cambiosEnviados: false
        }
    },
    props: {
        evento: Object
    },
    created(){

      
  },
  computed: { 

  },
  methods: {
    ...mapActions(['modificarEventoApi']),

    enviarEventoModificado(evento, eventoModificado) {
        for( let propiedad in eventoModificado) {
            if (!eventoModificado[propiedad]){

                eventoModificado[propiedad]= evento[propiedad]
            }
        }
        this.modificarEventoApi(eventoModificado)
        this.cambiosEnviados = true

        setTimeout(this.esconderMensaje, 3000);
        document.getElementById("crudevento").reset();
        this.eventoModificado = {
                id: null,
                name: null,
                date:null,
                doorsopenat: null,
                price:null,
                description: null,
                image:null,
                capacity: null,
                eventplace: null,

            }
    },
     esconderMensaje() {
        this.cambiosEnviados = false
    }




  },

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  .card-img{
    object-fit: cover; 
    width:500px;
  }

  .w500 {
    width: 600px;
    align-self: stretch;
    
  }
  .detalles-contenedor{
    background: white;
    height: 100%;
    padding: 5%;
  }
  @media only screen and (max-width: 1692px) {
    .w500 {
      width: 300px;
    }
    .card-img{
      width:400px;
    }
    .form-control {
      font-size: 0.8rem;
    }
  }
  </style>
  