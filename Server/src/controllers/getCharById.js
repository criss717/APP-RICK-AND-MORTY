const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios')
const errroHandler=require('../utils/errors')

module.exports.getCharById = async (req, res) => {
    const { id:ids } = req.params;  //toca renombrar para q no entre en conflicto con el id de abajo
    try {
        const {data} = await axios(URL+ids)
        const { id, name, gender, species, origin, image, status, episode } = data //tomamos los datos(propiedades) q necesitamos con destructuring del data               
        let character = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status,
            episode
        }
        return res.status(200).json(character)
    } catch (error) {
        errroHandler(res,error) // manejamos el error
    }
}
