const express= require('express');
const { getCharById } = require('./controllers/getCharById');
const server = express();
const PORT=3001;

// server.use(express.json()) // Midleware para pasar JSON del body a obj JS

server.listen(PORT, ()=>{
    console.log('Server raised in port: '+ PORT)
})

server.get('/character/:id',getCharById)