import React,{useState} from 'react'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx'
import './App.css'
import axios  from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './view/About.jsx';
import Detail from './components/Detail.jsx';
import Error404 from './components/Error404.jsx';

function App() {

   const [characters,setCharacters]= useState([])

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
   

   return (
      <div className='App'>
         <Nav onSearch={onSearch} onRandom={onRandom}/>
         <Routes>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
            
            <Route path='/about' element={<About/>}/>            
            
            <Route path='/detail/:id' element={<Detail/>}/>

            <Route path='*' element={<Error404/>}/>
         </Routes>        
      </div>
   );
}

export default App;
