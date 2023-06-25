import React from 'react'
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css'
import { Link } from 'react-router-dom';

function randomID(){ //para calcular un id aleatorio, que sirve para el boton Random
    return Math.floor(1+(Math.random()*825))
 }
const Nav = (props) => {
    return (
        <div className={s.container}>
            <div className={s.div1}>
                <Link to='/home'>
                    <button>Home</button>            
                </Link>

                <Link to='/about'>
                    <button>About</button>            
                </Link>
            </div>
            <div className={s.div2}>
                <SearchBar onSearch={props.onSearch}/>
                <div className={s.div3}>
                    <button onClick={()=>props.onRandom(randomID)}>Agregar pj random</button>
                </div> 
                <div className={s.div4}>
                    <button onClick={props.logOut}>↪Log Out</button>
                </div>
            </div>            
        </div> 
     );
}
export default Nav;