import React from "react";
import style from "./SinglePokemon.module.scss"
import colors from '../../../styles/Colors/pokemonColors.module.scss';


const SinglePokemon:React.FC = () => {
    const arr = [
        "Grass",
        "Poison"
      ]
    return(
        <>
            <div className={style.container}>
                <div style={{backgroundImage:'url("http://www.serebii.net/pokemongo/pokemon/001.png")'}} className={style.img}></div>
                <div className={style.name}>#001 Bulbasaur</div>
                <div className={style.types}>
                    {arr.map(e=>(
                        <div className={style.type} style={{backgroundColor: colors[`type-color-${e}`]}}>{e}</div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SinglePokemon;