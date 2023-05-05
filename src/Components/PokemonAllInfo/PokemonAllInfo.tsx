import React from "react";
import style from './PokemonAllInfo.module.scss'
import { deflate } from "zlib";
import {BsArrowRight} from 'react-icons/bs'
import SinglePokemon from "../Pokemons/SinglePokemon/SinglePokemon";
import SingleData from "./SingleData/SingleData";

const PokemonAllInfo:React.FC = () => {

    return(
        <>
            <div className={style.center}>
                <div className={style.container}>
                    <div className={style.name}>#001 Bulbasaur</div>
                    <div className={style.evolutionContainer}>
                        <SinglePokemon/>
                        <BsArrowRight size={52}/>
                        <SinglePokemon propsSize={{boxShadow:"none"}}/>
                        <BsArrowRight size={52}/>
                        <SinglePokemon propsSize={{boxShadow:"none"}}/>
                    </div>

                    {/*Container of pokemon info 3 column */}
                    <div className={style.dataContainer}>
                        {/*First column*/}
                        <div className={style.column}>
                            <SingleData parameter={"Height"} value={"3.14kg"}/>
                            <SingleData parameter={"Weight"} value={"2km"}/>
                            <SingleData parameter={"Egg"} value={"50cm"}/>
                        </div>
                        
                        {/*Secend column*/}
                        <div className={style.column}>
                            <SingleData parameter={"Spawn chance"} value={"0.96"}/>
                            <SingleData parameter={"Avg spawns"} value={"0.96"}/>
                            <SingleData parameter={"Spawn time"} value={"0.96"}/>
                        </div>

                        {/*Third column*/}
                        <div className={style.column}>
                            <SingleData parameter={"Weaknesses"} value={["Fire","Ice","Flying","Psychic"]}/>
                            <SingleData parameter={"Candy"} value={"1"}/>
                            <SingleData parameter={"Candy count"} value={"3"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonAllInfo;