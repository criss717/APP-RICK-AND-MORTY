const fs = require("fs");
const http = require("http");
const data= require('./utils/data.js');
const { log } = require("console");


const PORT = 3001;
http 
    .createServer((req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', '*'); // ARREGLA ERRORES DE CORS, PERMISOS DE SERVER PARA Q CUALQUIERA PUEDA MANDAR SOLICITUDEWS
        console.log(`Server raised in port ${PORT}`); 
        let {url}=req;
        
        if(url.includes(`/rickandmorty/character`)) {           
            url=url.split('/');
            const id=Number(url.at(-1))           
            const [character]=data.filter((e)=>e.id===id)                     
            res.writeHead(200, {'Content-Type':'application/json'})
            res.end(JSON.stringify(character))
        }
        
        // else if(url==='/allDogs') {
        //     fs.readFile('./utils/allDogs.html', 'utf-8',
        //     function(err,data){
        //     if(err) {
        //         res.writeHead(404, {'Content-Type':'text/plain'})
        //         return res.end('json not found')
        //     }
        //     res.writeHead(200, {'Content-Type':'text/html'})
        //     res.end(data)

        //     })
        // }
        // else {
        //     res.writeHead(404, {'Content-Type':'text/plain'})
        //     return res.end('Route not found') 
        // }
    })
    .listen(PORT,'localhost')

