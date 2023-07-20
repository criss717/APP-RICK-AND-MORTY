const axios = require('axios')

module.exports.getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
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
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(character))
            },
             (err) => {
                // console.log(err.response.data.error)                
                res.writeHead(500, { 'Content-Type': 'text/plain' })
                res.end('hola soy el error')
            }
        )

}
