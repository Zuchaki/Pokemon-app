import React from "react";
import style from "./SinglePokemon.module.scss"
import colors from '../../styles/Colors/pokemonColors.module.scss';

interface Props{
    propsSize?: React.CSSProperties;
    num:string;
    name:string;
    img:string;
    type:string[];
    key:number;
}
const SinglePokemon:React.FC<Props> = ({propsSize, num, name, img, type}) => {

    return(
        <>
            {/*style propsSize are box-shadow if this is choosen pokemon*/}
            <div className={style.container} style={propsSize}>

                {/*img of pokemon*/}
                <div style={{backgroundImage:`url(${img})`}} className={style.img}></div>

                {/*pokemon name*/}
                <div className={style.name}>{`#${num} ${name}`}</div>

                {/*pokemon types*/}
                <div className={style.types}>
                    {type.map(e=>(
                        <div className={style.type} style={{backgroundColor: colors[`type-color-${e}`]}}>{e}</div>
                    ))}
                </div>
                
            </div>
        </>
    )
}

export default SinglePokemon;