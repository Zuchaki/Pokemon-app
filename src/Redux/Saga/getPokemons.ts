import axios from '../../axios/axios_pokemons';
import {takeEvery, call, put} from 'redux-saga/effects'

//Saga
export function* getPokemons():Generator<any, void, any>{
    console.log("Get pokemons");
}