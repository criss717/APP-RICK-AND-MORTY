import { REMOVE_FAV, ADD_FAV } from "./types";

export function addFav(personaje){
    return {
        type: ADD_FAV,
        payload:personaje
    }    
}

export function removeFav(id){
    return {
        type:REMOVE_FAV,
        payload:id
    }
}