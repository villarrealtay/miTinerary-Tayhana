const express = require('express')
const cors = require('cors')
const rutas = require('./routes/app')
//Ejecutar el dotenv
require('dotenv').config()
//Ejecutar la coneccion 
require('./config/db')



//Elemento SERVIDOR
 const servidor = express()

 //Middleware
 servidor.use(cors())
 servidor.use(express.json)

 //Enrutador
 servidor.use('/api', rutas)

 servidor.listen(4000, () => console.log("App listening on port 4000"))

