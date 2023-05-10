import { deflate } from "zlib";
import { Pokemon } from "../../module";


export interface State{
    pokemons:Pokemon[];
    pokemon:Pokemon[] | null
    index:number;
    lastPage:number;
}

export interface Action{
    //EIS - explain in const initialyState:State
    
    type:string; //EIS
    pokemons?:Pokemon[]; //EIS
    id?:string; //id of single pokemon
    index?:number; //EIS
    page?:number; //send current pagination to view from Pages/MainContent.tsx to Redux/Saga/getPokemons.ts
    lastPage?:number; //EIS
}

//Initialy state
export const initialyState:State = {
    pokemons:[], //more then one pokemon. Used to view pokemons on mainPage
    pokemon:null, //Used to view all evolution of single pokemon after choose one
    index:0, //Recognizes which of all pokemons in pokemon:[] are this one we choose
    lastPage:0  //After count, get value of which page in pagination is last
}

//reducer
const pokemonsReducer = (state:State = initialyState, action:Action):State => {
    switch(action.type){
        case "GET_POKEMONS_SUCCESS":
            return {...state, pokemons:action.pokemons || []}

        case "GET_POKEMON_BY_ID_SUCCESS":
            return {...state, pokemon:action.pokemons || [], index:action.index || 0}

        case "GET_LAST_PAGE":
            return {...state, lastPage:action.lastPage || 0}

        default:
            return state;

    }
}

export default pokemonsReducer;




