import { createStore, applyMiddleware, Store } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { getPokemons } from "./Saga/getPokemons";
import { Actions, Reducers } from "./rootReducer";

//Create the redux-saga middleware
const SagaMiddleware: SagaMiddleware = createSagaMiddleware();

//Create redux store
const store: Store<Reducers, Actions> = createStore(
    rootReducer,
    applyMiddleware(SagaMiddleware)
);

//run sagas
SagaMiddleware.run(getPokemons);

export default store;

