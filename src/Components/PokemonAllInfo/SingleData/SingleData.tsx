import React from "react";
import style from "./SingleData.module.scss"
import colors from '../../../styles/Colors/pokemonColors.module.scss';

interface Props{
    parameter:string;
    value:string | string[];
}
const SingleData:React.FC<Props> = ({parameter, value}) => {

    return(
        <>
            <div className={style.container}>
                <div className={style.parameter}>{parameter}</div>
                <div className={style.value}>
                    {Array.isArray(value)?
                    <div className={style.types}>
                        {value.map(e=>(
                            <div className={style.type} style={{backgroundColor: colors[`type-color-${e}`]}}>{e}</div>
                        ))}
                    </div>:value}
                </div>
            </div>
        </>
    )
}

export default SingleData;