import React from "react";
import style from "./Pokemons.module.scss"
import SinglePokemon from "./SinglePokemon/SinglePokemon";

const Pokemons:React.FC = () => {
const arr = [1, 2, 3, 4, 5, 6]
    return(
        <>
            <div className={style.container}>
                <div className={style.pokemonsBlock}>
                    {arr.map(e => (
                            <SinglePokemon/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Pokemons;