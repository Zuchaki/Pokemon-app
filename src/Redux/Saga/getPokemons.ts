import axios from '../../axios/axios_pokemons'
import {takeEvery, call, put} from 'redux-saga/effects'
import { Action } from '../reducers/pokemonsReducer';
import { Pokemon } from '../../module';

//Function count length of pages to pagination
const countLastPage = async (res:any):Promise<number | null> => {
    const linkHeader = await res.headers.get('Link');
    const lastPageUrl = await linkHeader ? linkHeader.split(',').find((link:string) => link.includes('rel="last"')).trim().slice(1, -1) : null;
    const lastPage = lastPageUrl ? Number(new URLSearchParams(lastPageUrl.split('?')[1]).get('_page')) : null;
    
    if (lastPage === null) {
      // If lastPage is null, return the maximum number of pages
      return Math.ceil(res.headers.get('X-Total-Count') / 10);
    }

    if(lastPage === undefined){return 0}
    return lastPage;
}

function* getPokemonsFetch(action:Action):Generator<any, void, any>{
    try{
        const res = yield axios.get(`/pokemon?_page=${action.page}&_limit=10`)
        yield put({type: "GET_POKEMONS_SUCCESS", pokemons:res.data})

        const lastPage = yield countLastPage(res);

        yield put({type: "GET_LAST_PAGE", lastPage:lastPage})
    }
    catch(error){
        console.log(error)
    }
}

//Saga
export function* getPokemons():Generator<any, void, any>{
    yield takeEvery('GET_POKEMONS_FETCH', getPokemonsFetch);
}