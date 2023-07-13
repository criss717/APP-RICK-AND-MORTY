import { REMOVE_FAV, ADD_FAV, FILTER, ORDER } from "../Actions/types";
const initialState = {
    myFavorites:[],
    allCharacters:[]
}

export default function rootReducer(state=initialState,action){
    switch (action.type) {
        case ADD_FAV:
            return {
                myFavorites:[...state.allCharacters, action.payload],
                allCharacters:[...state.allCharacters, action.payload]
            }    
        case REMOVE_FAV:
            return {                
                myFavorites:state.myFavorites.filter((elem)=>elem.id!==Number(action.payload)),
                allCharacters:state.allCharacters.filter((elem)=>elem.id!==Number(action.payload))
            } 
        case FILTER:            
            const copiaFilter=state.allCharacters.filter((e)=>e.gender===action.payload)
            if(action.payload==='All'){//lógica para mostar todos los pj
                return {
                    ...state,
                    myFavorites:[...state.allCharacters]
                }
            }else {                
                return {
                    ...state,
                    myFavorites:copiaFilter
                }
            }
        case ORDER:
            const copiaOrder=[...state.myFavorites]
            if(action.payload==='A') copiaOrder.sort((a,b)=>a.id-b.id)
            if(action.payload==='D') copiaOrder.sort((a,b)=>b.id-a.id)

            return{
                ...state,               
                myFavorites:copiaOrder
            }
        default:
            return {
                ...state
            }          
    }
}