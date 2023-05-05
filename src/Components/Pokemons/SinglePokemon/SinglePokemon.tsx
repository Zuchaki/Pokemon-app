import React from "react";
import style from "./SinglePokemon.module.scss"
import colors from '../../../styles/Colors/pokemonColors.module.scss';

interface Props{
    propsSize?: React.CSSProperties;
}
const SinglePokemon:React.FC<Props> = ({propsSize}) => {
    const arr = [
        "Grass",
        "Poison", "Fire"
      ]
    return(
        <>
            <div className={style.container} style={propsSize}>
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