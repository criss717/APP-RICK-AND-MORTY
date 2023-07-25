const express=require('express');
const router=express.Router() // importamos Router

//importamos los controladores
const { getCharById } = require("../controllers/getCharById")
const { deleteFav, postFav } = require("../controllers/handleFavorites")
const login = require("../controllers/login")

//matcheamos las rutas
router.get('/character/:id', getCharById)
router.get('/login', login)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports=router