<template>
    <div class="container"> 
        <h1>Agregar y eliminar eventos</h1>
        <form @submit.prevent="postEvent()">
            <div class="d-flex flex-row flex-wrap">
                <div class="m-3">
                    <label>Nombre del evento</label>
                    <input v-model="nombre" type="text" class="form-control"/>
                </div>
                <div class="m-3">
                    <label>Lugar del evento</label>
                    <input v-model="lugar" type="text" class="form-control"/>
                </div>
                <div class="m-3">
                    <label>Fecha del evento (formato dd/mm/aaa)</label>
                    <input v-model="fecha" type="text" class="form-control"/>    
                </div>
                <div class="m-3">
                    <label>Valor de la entrada</label>
                    <input v-model="valor" type="number" class="form-control"/>    
                </div>
                <div class="m-3">
                    <label>Localidades totales</label>
                    <input v-model="localidadestot" type="number" class="form-control"/>   
                </div>    
                <div class="m-3">
                    <label>Horario de apertura (formato HH:MM, 24HS)</label>
                    <input v-model="apertura" type="text" class="form-control"/>    
                </div>
                <div class="m-3">
                    <label>Link de la imagen</label>
                    <input v-model="imagen" type="text" class="form-control"/>
                </div>
                <div class="m-3 ">
                    <label>Descripcion</label>
                    <input v-model="descripcion" type="text" class="form-control desc"/>   
                </div>
            </div>
            <button class="btn btn-success mt-4" type="submit">Agregar evento</button>
        </form>
        <h3 v-if="eventoAgregado === true">Evento agregado exitosamente!</h3>
        <form class="d-flex justify-content-center" @submit="deleteEvent()">
            <div>
                <label>Id del producto a eliminar:</label>
                <input v-model="eliminar" type="number" class="form-control"/>
                <button class="btn btn-danger mt-4" type="submit">Eliminar evento</button>
                <h3 v-if="eventoEliminado === true">Evento eliminado exitosamente!</h3>
            </div>

        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'AddProduct',
    data() {
        return {
            nombre: '',
            lugar:'',
            fecha:'',
            valor: null,
            localidadestot: null,
            descripcion:'',
            apertura:'',
            imagen:'',
            eliminar: null,
            eventoAgregado: false,
            eventoEliminado: false,
        }
    }, 

    methods: {
        async postEvent() {
            const newEvent = {
                date:this.fecha,
                name: this.nombre,
                image:this.imagen,
                price: this.valor,
                eventplace: this.lugar,
                description:this.descripcion,
                capacity: this.localidadestot,
                availabletickets: this.localidadesdisp,
                doorsopenat:this.apertura,

            }
            const URLPOST = "https://63a21bbcba35b96522f039e2.mockapi.io/londonevents/events"
            axios.post(URLPOST, newEvent)
            .then(() => 
            this.eventoAgregado = true    
                
            )
           .catch((err) => {console.error(`${err}`)})
           this.hideElements()
        
        }
        ,

       deleteEvent(){
            const URLDELETE = "https://63a21bbcba35b96522f039e2.mockapi.io/londonevents/events/"+this.eliminar;
            axios.delete(URLDELETE);
            this.eventoEliminado = true
            this.hideElements()
                    
        },
        hideElements(){
            setTimeout(function(){
            this.eventoAgregado = false
            this.eventoEliminado = false
           
            }, 5000);
        }
    }
}
</script>

<style scoped>
.container{
     padding-top:200px;}
     form{ margin-top: 70px;}
     input {
        width: 320px;
     }
     .desc{
        width:680px;
     }
</style>




