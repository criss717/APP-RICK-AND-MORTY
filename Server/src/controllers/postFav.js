const {Favorite} = require("../DB_connection");

const postFav = async (req, res) => {
    try {
        const {id, name, origin, status, image, species, gender } = req.body;
        if (!name && !origin && !status && !image && !species && !gender){
            return res.status(401).send('Faltan datos') 
        }
        await Favorite.create({ // creamos el fav en la base de datos
            id,
            name, 
            origin, 
            status, 
            image, 
            species, 
            gender
        })
        const allFav= await Favorite.findAll() // buscamos todos los fav y los guardamos
        return res.status(201).json(allFav)      // respondemos con todos los fav  
    } catch (error) {
        return res.status(500).json({error:error.message})        
    }
}

module.exports=postFav