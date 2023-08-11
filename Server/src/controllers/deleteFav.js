const {Favorite} = require("../DB_connection");
const deleteFav= async(req,res)=>{
    try {
        const {id}=req.params;
        id && await Favorite.destroy({ // eliminamos el q tenga ese id
            where:{id}
        })
        const allFav= await Favorite.findAll() // buscamos todos los fav y los guardamos
        return res.status(201).json(allFav)      // respondemos con todos los fav          
    } catch (error) {
        return res.status(500).json({error:error.message})          
    }
}
module.exports=deleteFav