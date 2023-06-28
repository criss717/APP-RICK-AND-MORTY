import React,{useEffect, useState} from 'react'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx'
import './App.css'
import axios  from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './view/About.jsx';
import Detail from './components/Detail.jsx';
import Error404 from './components/Error404.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import { connect } from 'react-redux';
import { removeFav } from './Redux/Actions/actions.js';


function App(props) {
   
   const [characters,setCharacters]= useState([])
   const [acces, setAccess]=useState(false)
   
   const EMAIL='mono-717@hotmail.com'
   const PASSWORD='c1234567'
   const location=useLocation() // para ocultar navbar cuando este en el path='/'
   const navigate=useNavigate() // para re dirigir a una ruta, a /home cuando hacemos login correcto
   
   const onSearch=(id)=>{  //para nuestro botón e input de entrada id
      if(!id) alert('Campo requerido')
      if(characters.findIndex((elem)=>elem.id===Number(id))===-1){        
         axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({data}) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } 
         }).catch(err=>window.alert(err.response.data.error))
      }else{
         alert(`El personaje con id:${id} ya fue elegido`)
      }      
   }

   const onClose=(id)=>{ //para nuestro botón X (cerrar card)
      setCharacters(characters.filter((elem)=>elem.id!==Number(id)))
      props.removeFav(id)

   }

   const onCloseFav = (id)=>{ //para nuestro botón X (cerrar card de favoritos)
      props.removeFav(id)
   }
     
   const onRandom=(randomID)=>{  //para el botón de pj random
      const idRandom=randomID();               
         if(characters.findIndex((elem)=>elem.id===Number(idRandom))===-1){
            fetch(`https://rickandmortyapi.com/api/character/${idRandom}`)
            .then(res=>res.json())
            .then(data=> {             
                setCharacters((oldChars) => [...oldChars, data]);             
            })
         }else{
            alert(`El personaje con id:${idRandom} ya fue elegido`)
         }        
      }
   

   const login=(userData)=>{  //SIMULA SEGURIDAD
      if(userData.email===EMAIL && userData.password===PASSWORD ){
         setAccess(true)    
         navigate('/home') //para redirigirnos a /Home 
      }else alert('Email o contraseña incorrecta') 
   }  

   const logOut=()=>{
      setAccess(false)
   }

   useEffect(()=>{
      !acces && navigate('/')
   },[acces])

   return (
      <div >
         {location.pathname!=='/' && <Nav onSearch={onSearch} onRandom={onRandom} logOut={logOut}/>}
         <Routes>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
            
            <Route path='/about' element={<About/>}/>            
            
            <Route path='/detail/:id' element={<Detail/>}/>

            <Route path='/' element={<Form login={login}/>}/>

            <Route path='/favorites' element={<Favorites onClose={onCloseFav}/>}/>

            <Route path='*' element={<Error404/>}/>
         </Routes>        
      </div>
   );
}

function mapStateToProps(state){
   return{
      myFavorites:state.myFavorites
   }
}

function mapDispatchToProps(dispatch){
   return {     
      removeFav:(id)=>{
         dispatch(removeFav(id))
      }
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
