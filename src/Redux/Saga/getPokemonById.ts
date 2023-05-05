import axios from '../../axios/axios_pokemons'
import {takeEvery, call, put, takeLatest} from 'redux-saga/effects'
import { Action } from '../reducers/pokemonsReducer';


const axiosFetch = async(link:string) => {
    try{
        const res = await axios.get(link)
        return res;
    }
    catch(error){
        console.log(error);
    }
    
}

function* getPokemonByIdFetch(action:Action):Generator<any, void, any>{
        const res = yield axiosFetch(`/pokemon?id=${action.id}`)

        if(res.data[0].prev_evolution === undefined && res.data[0].next_evolution === undefined){
            yield put({type: "GET_POKEMON_BY_ID_SUCCESS", pokemons:res.data, index:0})
        }
        else if(res.data[0].prev_evolution === undefined && res.data[0].next_evolution?.length === 1){
            const secund = yield axiosFetch(`/pokemon?num=${res.data[0].next_evolution[0].num}`)
            yield put({type: "GET_POKEMON_BY_ID_SUCCESS", pokemons:[...res.data, ...secund.data], index:0})
        }
        else if(res.data[0].next_evolution === undefined && res.data[0].prev_evolution?.length === 1){
            const first = yield axiosFetch(`/pokemon?num=${res.data[0].prev_evolution[0].num}`)
            yield put({type: "GET_POKEMON_BY_ID_SUCCESS", pokemons:[...first.data, ...res.data], index:1})
        }
        else if(res.data[0].prev_evolution === undefined && res.data[0].next_evolution?.length === 2){
            const secund = yield axiosFetch(`/pokemon?num=${res.data[0].next_evolution[0].num}`)
            const third = yield axiosFetch(`/pokemon?num=${res.data[0].next_evolution[1].num}`)
        
            yield put({type: "GET_POKEMON_BY_ID_SUCCESS", pokemons:[...res.data, ...secund.data, ...third.data], index:0})
        }
        else if(res.data[0].prev_evolution?.length === 1 && res.data[0].next_evolution?.length === 1){
            const first = yield axiosFetch(`/pokemon?num=${res.data[0].prev_evolution[0].num}`)
            const third = yield axiosFetch(`/pokemon?num=${res.data[0].next_evolution[0].num}`)
        
            yield put({type: "GET_POKEMON_BY_ID_SUCCESS", pokemons:[...first.data, ...res.data, ...third.data], index:1})
        }
        else if(res.data[0].prev_evolution?.length === 2 && res.data[0].next_evolution === undefined){
            const first = yield axiosFetch(`/pokemon?num=${res.data[0].prev_evolution[0].num}`)
            const secund = yield axiosFetch(`/pokemon?num=${res.data[0].prev_evolution[1].num}`)
        
            yield put({type: "GET_POKEMON_BY_ID_SUCCESS", pokemons:[...first.data, ...secund.data, ...res.data], index:2})
        }
        
}

//Saga
export function* getPokemonById():Generator<any, void, any>{
    yield takeEvery('GET_POKEMON_BY_ID_FETCH', getPokemonByIdFetch);
}