import { createStore, applyMiddleware, Store } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { getPokemons } from "./Saga/getPokemons";
import { Actions, Reducers } from "./rootReducer";
import { getPokemonById } from "./Saga/getPokemonById";

//Create the redux-saga middleware
const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

//Create redux store
const store: Store<Reducers, Actions> = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

//run sagas
sagaMiddleware.run(getPokemons);
sagaMiddleware.run(getPokemonById);

export default store;

