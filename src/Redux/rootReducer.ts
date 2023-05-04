import {combineReducers} from '@reduxjs/toolkit'
import pokemonsReducer, {Action as Type_Action_pokemonsReducer, State as Type_State_pokemonsReducer} from './reducers/pokemonsReducer'
import {Reducer, CombinedState} from 'redux'

//Connect States to rootState
export interface Reducers{
    pokemonsReducer:Type_State_pokemonsReducer;
}

//Connect Actions to rootAction
export interface Actions extends Type_Action_pokemonsReducer {}

//Combine Reducers
const rootReducer: Reducer<CombinedState<Reducers>,Actions> = combineReducers({
    pokemonsReducer:pokemonsReducer as Reducer<Type_State_pokemonsReducer, Type_Action_pokemonsReducer>
});

export default rootReducer;