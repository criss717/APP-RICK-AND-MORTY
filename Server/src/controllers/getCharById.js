const URL='https://rickandmortyapi.com/api/character/';
const axios=require('axios')

module.exports.getCharById = (req, res) => {
    const {id}=req.params;
    axios(URL+Number(id))
        .then(
            ({ data }) => {                
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
                if(character) return res.status(200).json(character)
                return res.status(404).send('Not found')
            },
             (err) => {
                res.status(500).send(err.message)
            }
        )

}
