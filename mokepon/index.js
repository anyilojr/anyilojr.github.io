// // importamos expressjs para usarlo en el proyecto
// const express = require("express")
// const cors = require("cors")
// // almacena la aplicacion
// const app = express()

// app.use(cors())
// app.use(express.json())

// const jugadores = []

// class Jugador{
//   consructor(id){
//     this.id = id
//   }
//   asignarMokepon(mokepon){
//     this.mokepon = mokepon
//   }
// }
// class Mokepon {
//   constructor(nombre){
//     this.nombre = nombre
//   }
// }
// // escucha la peticion del cliente por medio de un puerto 

// // cuando reciba una peticion en la url raiz, responda hola
// app.get("/unirse", (req, res) => {
//   const id = `${Math.random()}`
//   const jugador = new Jugador(id)

//   jugadores.push(jugador)

//   res.setHeader("Access-Control-Allow-Origin", "*")
//   res.send(id)
// })

// app.post("/mokepon/:jugadorId", (req, res) =>{
//   const jugadorId = req.params.jugadorId || ""
//   const nombre = req.body.mokepon || ""
//   const mokepon = new Mokepon(nombre)
//   const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
  
//   if(jugadorIndex >= 0){
//     jugadores[jugadorIndex].asignarMokepon(mokepon)
//   }
//   console.log(jugadores)
//   console.log(jugadorId)
//   res.end()
// })

// // escuche continuamente en el puerto 8080 las peticiones de los clientes, para que responda siempre
// app.listen(8080, () =>{
//   console.log("Servidor funcionando")
// })
const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador {
  constructor(id) {
    this.id = id
  }

  asignarMokepon(mokepon) {
    this.mokepon = mokepon
  }
}

class Mokepon {
  constructor(nombre) {
    this.nombre = nombre
  }
}

app.get("/unirse", (req, res) => {
  const id = `${Math.random()}`

  const jugador = new Jugador(id)

  jugadores.push(jugador)

  res.setHeader("Access-Control-Allow-Origin", "*")
  
  res.send(id)
})

app.post("mokepon/:jugadorId", (req, res) => {
  const jugadorId = req.params.jugadorId || ""
  const nombre = req.body.mokepon || ""
  const mokepon = new Mokepon(nombre)
  
  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

  if (jugadorIndex >= 0) {
    jugadores[jugadorIndex].asignarMokepon(mokepon)
  }
  
  console.log(jugadores)
  console.log(jugadorId)
  res.end()
})

app.listen(8080, () => {
  console.log("Servidor funcionando")
})