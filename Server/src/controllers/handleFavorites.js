let myFavorites=[];

const getFav = (req,res)=>{  
     return  res.status(200).json(myFavorites)     
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