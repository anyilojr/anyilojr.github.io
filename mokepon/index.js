// importamos expressjs para usarlo en el proyecto
const express = require("express")
// almacena la aplicacion
const app = express()
// escucha la peticion del cliente por medio de un puerto 

// cuando reciba una peticion en la url raiz, responda hola
app.get("/", (req, res) => {
  res.send("Hola")
})

// escuche continuamente en el puerto 8080 las peticiones de los clientes, para que responda siempre
app.listen(8080, () =>{
  console.log("Servidor funcionando")
})