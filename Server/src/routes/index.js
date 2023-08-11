const {Router}=require('express');
const router=Router() // importamos Router

//importamos los controladores
const {getCharById} = require("../controllers/getCharById")
const login = require("../controllers/login");
const deleteFav = require('../controllers/deleteFav');
const postFav = require('../controllers/postFav');
const postUser = require('../controllers/postUser');
const getFav = require('../controllers/getFav')

//matcheamos las rutas
router.get('/character/:id', getCharById)
router.get('/login', login)
router.post('/login', postUser)
router.get('/fav',getFav)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports=router