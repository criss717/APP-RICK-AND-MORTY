import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import s from './Detail.module.css'

const Detail = (props) => {
    //Estados
    const [character,setCharacter]=useState({})
    const [moreInfo, setMoreInfo]=useState(false)
    const [episodeRandom, setEpisodeRandom] = useState({})
    const [randomIn,setRandomIn]= useState('')

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
    //modificaición estado episodeRandom       
    useEffect(()=>{
        console.log('hola')
        if(character.episode){
            setRandomIn(randomI()) //primero seteamos un indice aleatorio en el estado
            fetch(character.episode[randomIn]) //obtenemos url del episodio escogido al azar
                .then((res)=>res.json())
                .then(data=>{
                    if(data) setEpisodeRandom(data)
                })
        }
    },[character,randomIn])    
    
    // handle events
    const handleBack = ()=> {
        navigate('/home')
    }

    const handleMoreInfo =()=>{
        !moreInfo? setMoreInfo(true) : setMoreInfo(false)
    }

    const handleLessInfo =()=>{
        !moreInfo? setMoreInfo(true) : setMoreInfo(false)
        setRandomIn('')
    }

    const handleAnother = ()=>{
        setRandomIn('')
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
                {
                    !moreInfo &&
                    <div onClick={handleMoreInfo} class={s.arrowDown}>
                        Random Episode
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                }
                </h1>
                <h2>Status: {character.status}</h2>
                <h2>Species: {character.species}</h2>
                <h2>Gender: {character.gender}</h2>
                <h2>Origin: {character.origin.name}</h2>
                <img src={character.image} alt={character.name}/>

             </div>
            {
                moreInfo &&
                <div className={s.container2}>
                    <h1>Episode Title: <br/> {episodeRandom.name}                   
                {
                    moreInfo &&
                    <div onClick={handleLessInfo} class={s.arrowUp}>
                        Less Info
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                }
                <button onClick={handleAnother} className={s.btnRandom}>Another Episode</button>    
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