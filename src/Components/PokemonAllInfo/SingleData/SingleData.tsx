import React from "react";
import style from "./SingleData.module.scss"
import colors from '../../../styles/Colors/pokemonColors.module.scss';
import { Key } from "antd/es/table/interface";

interface Props{
    parameter:string;
    value:string | string[] | number;
    key:Key;
}
const SingleData:React.FC<Props> = ({parameter, value}) => {

    return(
        <>
            <div className={style.container}>
                
                {/*Pokemon parameter name*/}
                <div className={style.parameter}>{parameter}</div>
                {/*Pokemon parameter value*/}
                <div className={style.value}>

                {/*If parameter is weaknes*/}
                {Array.isArray(value)?
                <div className={style.types}>
                    {value.map(e=>(
                        <div 
                            className={style.type}
                            style={{backgroundColor: colors[`type-color-${e}`]}}>
                                {e}
                        </div>
                    ))}
                </div>:value}
                </div>
            </div>
        </>
    )
}

export default SingleData;