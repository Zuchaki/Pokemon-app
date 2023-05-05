import { deflate } from "zlib";

//Types
export interface Pokemon{
    id:number;
    num:string;
    name:string;
    img:string;
    type:string[];
    height:string;
    weight:string;
    candy:string;
    candy_count:number;
    egg:string;
    spawn_chance:number;
    avg_spawns:number;
    spawn_time:string;
    multipliers:number[];
    weaknesses:string[];
}
export interface State{
    pokemons:Pokemon[];
    pokemon:Pokemon[] | null;
    index:number
}

export interface Action{
    type:string;
    pokemons?:Pokemon[];
    id?:string;
    index?:number;
}

//Initialy state
export const initialyState:State = {
    pokemons:[],
    pokemon:null,
    index:0
}

//reducer
const pokemonsReducer = (state:State = initialyState, action:Action):State => {
    switch(action.type){
        case "GET_POKEMONS_SUCCESS":
            return {...state, pokemons:action.pokemons || []}
        case "GET_POKEMON_BY_ID_SUCCESS":
            return {...state, pokemon:action.pokemons || [], index:action.index || 0}
        default:
            return state;

    }
}

export default pokemonsReducer;




