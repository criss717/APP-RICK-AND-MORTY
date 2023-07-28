const {Router}=require('express');
const router=Router() // importamos Router

//importamos los controladores
const { getCharById } = require("../controllers/getCharById")
const { deleteFav, postFav, getFav } = require("../controllers/handleFavorites")
const login = require("../controllers/login")

//matcheamos las rutas
router.get('/character/:id', getCharById)
router.get('/login', login)
router.get('/fav',getFav)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports=router