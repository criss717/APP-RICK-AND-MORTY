import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import s from './Detail.module.css'

const Detail = (props) => {
    const params=useParams()    
    const [character,setCharacter]=useState({})
    const navigate=useNavigate();

    useEffect(()=>{       
        fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
        .then((res)=>res.json())
        .then(data=>{
            if(data.name) setCharacter(data)
        })
        return setCharacter({})
    },[params.id])
    
    const handleBack = ()=> {
        navigate('/home')
    }
    
    if(character.name){
        return (  
            <div className={s.container}>
               
                <h1>Name: <br/> {character.name}
                <div onClick={handleBack} class={s.arrow}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </h1>
                <h2>Status: {character.status}</h2>
                <h2>Species: {character.species}</h2>
                <h2>Gender: {character.gender}</h2>
                <h2>Origin: {character.origin.name}</h2>
                <img src={character.image} alt={character.name}/>
    
             </div>
        );
    } else {
        return <h1>No hay personajes con ese ID...</h1>
    }
}
 
export default Detail;