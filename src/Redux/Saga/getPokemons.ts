import axios from '../../axios/axios_pokemons'
import {takeEvery, call, put} from 'redux-saga/effects'
import { Pokemon } from '../reducers/pokemonsReducer';


function* getPokemonsFetch():Generator<any, void, any>{
    try{
        const res = yield axios.get("/pokemon")
        yield put({type: "GET_POKEMONS_SUCCESS", pokemons:res.data})
    }
    catch(error){
        console.log(error)
    }
}

//Saga
export function* getPokemons():Generator<any, void, any>{
    yield takeEvery('GET_POKEMONS_FETCH', getPokemonsFetch);
}