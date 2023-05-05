import React, {useEffect,useState} from "react";
import style from "./Pokemons.module.scss"
import SinglePokemon from "../SinglePokemon/SinglePokemon";
import { useSelector } from "react-redux";
import { Pokemon } from "../../Redux/reducers/pokemonsReducer";
import { State } from "../../Redux/reducers/pokemonsReducer";
import {Link} from 'react-router-dom';

const Pokemons:React.FC = () => {

    //Get states from redux reduser "pokemonsReducer.ts"
    const selector: Pokemon[] = useSelector((state: { pokemonsReducer: State }) => state.pokemonsReducer.pokemons);

    return(
        <>
            <div className={style.container}>

                {/*View only if data taken from db are exist*/}
                {selector!==undefined?
                    <div className={style.pokemonsBlock}>
                        {selector.map((e:Pokemon) => (

                                /*Link to single pokemon parameters*/
                                <Link key={e.id} style={{textDecoration:"none", color:"black"}} to={`pokemon/${e.id}`}>          
                                            
                                    {/*View pokemon*/}
                                    <SinglePokemon 
                                        key={e.id}
                                        num={e.num}
                                        name={e.name}
                                        img={e.img}
                                        type={e.type}
                                    />
                                </Link>
                        ))}
                    </div>:
                <></>}
            </div>
        </>
    )
}

export default Pokemons;