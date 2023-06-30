import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import s from './Detail.module.css'

const Detail = (props) => {
    //Estados
    const [character,setCharacter]=useState({})
    const [moreInfo, setMoreInfo]=useState(false)
    const [episodeRandom, setEpisodeRandom] = useState({})

    //hooks
    const params=useParams()
    const navigate=useNavigate();

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
        .then((res)=>res.json())
        .then(data=>{
            if(data.name) setCharacter(data)
        })
        return setCharacter({})
    },[params.id])
   
    //funcion random
    function randomI(){ //para calcular un indice aleatorio, que sirve para el array de episodios
        return Math.floor((Math.random()*character.episode.length))
    }

    //modificaicon estado episodeRandom      
    useEffect(()=>{
        if(character.episode){
            fetch(character.episode[randomI()]) //obtenemos url del episodio escogido al azar
                .then((res)=>res.json())
                .then(data=>{
                    if(data) setEpisodeRandom(data)
                })
        }
    },[character])    
    
    // handle events
    const handleBack = ()=> {
        navigate('/home')
    }

    const handleMoreInfo =()=>{
        setMoreInfo(true)
    }

    if(character.name){
        return (
            <>
            <div className={s.container}>
                <h1>Name: <br/> {character.name}
                <div onClick={handleBack} class={s.arrowLeft}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div onClick={handleMoreInfo} class={s.arrowDown}>
                    Random Episode
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
            {
                moreInfo &&
                <div className={s.container}>
                    <h1>Episode Title: <br/> {episodeRandom.name}
                   
                    <div onClick={handleMoreInfo} class={s.arrowUp}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </h1>
                    <h2># Episode: {episodeRandom.id}</h2>                    
                    <h2>Air Date: {episodeRandom.air_date}</h2>
                    <h2>Code: {episodeRandom.episode}</h2>    

                </div>
            }
            </>
        );
    }
}

export default Detail;