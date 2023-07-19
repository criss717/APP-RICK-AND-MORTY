const axios=require('axios')

const character={}

module.exports.getCharById = (res,id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(
            ({data})=>{                
                character.name=data.name,  //tomamos los datos q necesitamos
                character.gender=data.gender,
                character.species=data.species,
                character.origin=data.origin,
                character.image=data.image,
                character.status=data.status, 
                character.id=data.id,
                character.episode=data.episode               
                res.writeHead(200,{'Content-Type':'application/json'})
                res.end(JSON.stringify(character))
            },
            ({err})=>{
                res.writeHead(500,{'Content-Type':'text/plain'})
                res.end(err.data.error)                
            }
        )

}
