const express= require('express');
const server = express();
const PORT=3001;
const router=require('./src/routes/index');
const { conn } = require('./src/DB_connection');

//Midlewares
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // para q no de errores de cors
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });
 server.use(express.json()) // convierte lo JSON en obj de js
 server.use('/rickandmorty',router)  //agrega este string a cada ruta

 conn.sync({force:false}) // sincronizacion con BD
   .then(server.listen(PORT, ()=>{
    console.log('Server raised in port: '+ PORT)
   })
   ).catch((err)=>console.log(err))