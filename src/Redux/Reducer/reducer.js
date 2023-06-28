import { addFav, removeFav } from "../Actions/actions";
import { REMOVE_FAV, ADD_FAV } from "../Actions/types";
const initialState = {
    myFavorites:[]
}

export default function rootReducer(state=initialState,action){
    switch (action.type) {
        case ADD_FAV:
            return {
                myFavorites:[...state.myFavorites, action.payload]
            }    
        case REMOVE_FAV:
            return {
                myFavorites:state.myFavorites.filter((elem)=>elem.id!==Number(action.payload))
            }          
        default:
            return {
                ...state
            }          
    }
}