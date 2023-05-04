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
    spawn_sime:string;
    multipliers:number[];
    weaknesses:string[];
}
export interface State{
    pokemons:Pokemon[];
}

export interface Action{
    type:string;
    pokemons:Pokemon[]
}

//Initialy state
export const initialyState:State = {
    pokemons:[]
}

//reducer
const pokemonsReducer = (state:State = initialyState, action:Action):State => {
    switch(action.type){
        

        default:
            return state;

    }
}

export default pokemonsReducer;




