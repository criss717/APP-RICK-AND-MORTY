let myFavorites=[];

const getFav = (req,res)=>{  
    if(myFavorites.length>0) return  res.status(200).json(myFavorites) // para q no nos cargue al estado global objetos vacíos
    return res.status(200).send('no hay favoritos')
}

const postFav = (req,res)=> {
    myFavorites.push(req.body)    
    return res.status(200).json(myFavorites)
}

const deleteFav=(req,res)=>{
    const {id}=req.params;    
    myFavorites=myFavorites.filter((elem)=>elem.id!==Number(id))
    return res.status(200).json(myFavorites)
}

module.exports={
    postFav,
    deleteFav,
    getFav
}