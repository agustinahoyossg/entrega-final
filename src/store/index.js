import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaEventos: [],
    listaUsuarios: [],
    usuarioActivo: {
        name: null,
        email: null,
        password: null,
        id: null,
        type: null,
        avatar: null,
    },
    newUser: {},
    carrito: [],
    compra: {
    },
    comprasRecibidas: []
  },
  getters: {
    getActiveUser(state) {
      return state.usuarioActivo;
    },
    getAllUsers(state) {
      return state.listaUsuarios
    },
    getNewUser(state) {
      return state.newUser
    },
    getListaEventos(state) {
      return state.listaEventos
    },
    getCarrito(state) {
      return state.carrito
    }, 
    getComprasRecibidas(state) {
      return state.comprasRecibidas 
    },  
  },
  mutations: {
    setUser: function (state, usuarioActivo) {
      state.usuarioActivo = usuarioActivo
    },
    setNewUser: function (state, newUser) {
      state.newUser = newUser
    },
    cargarUsuarios(state, listaUsariosApi) {
      state.listaUsuarios = listaUsariosApi
    },
    cargarEventos(state, listaEventosApi) {
      state.listaEventos = listaEventosApi
    },
    añadirAlCarrito(state, producto) {
      state.carrito.push(producto)
    },
    setCantidadElemento(state, index) {
      state.carrito.splice(index, 1, { ...state.carrito[index],
      cantidad: state.carrito[index].cantidad + 1 })
    },
    setCantidadElementoRestar(state, index) {
      if (state.carrito[index].cantidad > 1) {
      state.carrito.splice(index, 1, { ...state.carrito[index],
      cantidad: state.carrito[index].cantidad - 1 })
      }
      else {
        state.carrito.splice(index, 1)
      }
    },
    setCarritoVacio(state) {
      state.carrito = []
    },
    setCompra(state, compra) {
      state.compra = compra
    },
    setCargarCompras(state, comprasRecibidas) {
      state.comprasRecibidas = comprasRecibidas
    },
    
  },
  actions: {
    getUsersApi: async function ({commit}) {
      const URLGET = "https://63a21bbcba35b96522f039e2.mockapi.io/londonevents/users"
      axios.get(URLGET)
      .then((response) => {
        commit('cargarUsuarios', response.data)
      })
     .catch((err) => {console.error(`${err}`)})
  },
  getProductListApi: async function ({commit}) {
    const URLGET = "https://63a21bbcba35b96522f039e2.mockapi.io/londonevents/events"
    axios.get(URLGET)
    .then((response) => {
      commit('cargarEventos', response.data)
    })
   .catch((err) => {console.error(`${err}`)})
},

  registrarNuevoUsuario : async function ({dispatch}) {

    const URLPOST = "https://63a21bbcba35b96522f039e2.mockapi.io/londonevents/users"
    
    axios.post(URLPOST, this.state.newUser)
         .then((response) => 
        {console.table(response.data)})
        dispatch('getUsersApi')
        .catch((err) => {console.error(`${err}`)})
          
     },
     enviarCompra : async function () {

      const URLPOST = "https://63a21bbcba35b96522f039e2.mockapi.io/londonevents/compras"
      
      axios.post(URLPOST, this.state.compra)
           .then((response) => 
          {console.table(response.data)})
         // dispatch('getUsersApi')
          .catch((err) => {console.error(`${err}`)})
            
       },
       getComprasRecibidasApi: async function ({commit}) {
        const URLGET = "https://63a21bbcba35b96522f039e2.mockapi.io/londonevents/compras"
        axios.get(URLGET)
        .then((response) => {
          commit('setCargarCompras', response.data)
        })
       .catch((err) => {console.error(`${err}`)})
    },
    eliminarCompraApi({dispatch}, id){
      axios.delete(`https://63a21bbcba35b96522f039e2.mockapi.io/londonevents/compras/${id}`)
      .then(() => {
        dispatch('getComprasRecibidasApi')
    
      })
      .catch(function (error) {
         console.log(error)
      })
      

    },
    modificarEventoApi({dispatch}, event){
      axios.put(`https://63a21bbcba35b96522f039e2.mockapi.io/londonevents/events/${event.id}`, event)
      .then(() => {
        dispatch('getProductListApi')
        console.log("enviado")
      })
      .catch(function (error) {
         console.log(error)
      })
      

    }

    },


  
  modules: {

  }
})