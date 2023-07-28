import { REMOVE_FAV, ADD_FAV, ORDER, FILTER,GET_FAV } from "./types";
import axios from 'axios'

export const getFav = ()=>{
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const {data} = await axios.post(endpoint)
         if(data.length>0){ // para q no guarde objetos vacios en myfavorites
            return dispatch({
               type: GET_FAV,
               payload:data
            })

         }
      } catch (error) {
         alert(error.message)        
      }
   }

}
export const addFav =  (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
         const {data} = await axios.post(endpoint, character)
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      }  
      catch (error) {
         alert(error.message)
      }
    };
}

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      try {
         const {data} = await axios.delete(endpoint)
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });      
      } 
      catch (error) {
         alert(error.message)
      }
    };
 };

export function filterCards(gender){
    return {
        type:FILTER,
        payload: gender
    }
}

export function orderCards(orden){
    return {
        type:ORDER,
        payload: orden
    }
}
