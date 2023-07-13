import { REMOVE_FAV, ADD_FAV, ORDER, FILTER } from "./types";

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
