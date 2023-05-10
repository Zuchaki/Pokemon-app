import React, {  useEffect, useState } from 'react'
import style from "./MainContent.module.scss"
import Pokemons from '../../Components/Pokemons/Pokemons'
import {useDispatch} from 'react-redux';
import { Dispatch } from 'redux';
import { Actions } from '../../Redux/rootReducer';
import Pagination from '../../Components/Pagination/Pagination';

const MainContent:React.FC = () => {

    //Create disptch
    const dispatch = useDispatch<Dispatch<Actions>>();

    //State which say on which page we are
    const [page, setPage] = useState<number>(1);

    //after loading this page or change state "page" run saga "GET_POKEMONS_FETCH" to get pokemons from db
    useEffect(()=>{
        dispatch({type:"GET_POKEMONS_FETCH", page:page})
    },[page])

    return(
        <>
            <div className={style.container}>
                <Pokemons/>
                <Pagination page={page} setPage={setPage}/>
            </div>
        </>
    )
}

export default MainContent;