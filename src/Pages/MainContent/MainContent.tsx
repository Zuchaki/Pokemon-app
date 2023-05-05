import React, {  useEffect } from 'react'
import style from "./MainContent.module.scss"
import Pokemons from '../../Components/Pokemons/Pokemons'
import {useDispatch} from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../../Redux/rootReducer';

const MainContent:React.FC = () => {

    //Create disptch
    const dispatch = useDispatch<Dispatch<Actions>>();

    //after loading this page run saga "GET_POKEMONS_FETCH" to get pokemons from db
    useEffect(()=>{
        dispatch({type:"GET_POKEMONS_FETCH"})
    },[])

    return(
        <>
            <Pokemons/>
        </>
    )
}

export default MainContent;