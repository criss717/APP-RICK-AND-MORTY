const {Favorite} = require("../DB_connection");

const getFav = async (req, res) => {
    try {       
        const allFav= await Favorite.findAll() // buscamos todos los fav y los guardamos
        return res.status(201).json(allFav)      // respondemos con todos los fav  
    } catch (error) {
        return res.status(500).json({error:error.message})        
    }
}

module.exports=getFav