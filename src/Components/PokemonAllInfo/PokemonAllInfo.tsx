import React, { useEffect, useMemo } from "react";
import style from './PokemonAllInfo.module.scss'
import SinglePokemon from "../SinglePokemon/SinglePokemon";
import SingleData from "./SingleData/SingleData";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { Action, Pokemon, State } from "../../Redux/reducers/pokemonsReducer";
import { Link, useParams } from "react-router-dom";
import {AiOutlineArrowLeft} from 'react-icons/ai'

const PokemonAllInfo:React.FC = () => {

    //Create dispatch and params
    const dispatch = useDispatch<Dispatch<Action>>();
    const params = useParams();
    
    //Get states from redux reduser "pokemonsReducer.ts"
    const selector: Pokemon[] | null = useSelector((state:{ pokemonsReducer: State}) => state.pokemonsReducer.pokemon)
    const index:number =  useSelector((state:{ pokemonsReducer: State}) =>state.pokemonsReducer.index);

    //Run saga "GET_POKEMON_BY_ID_FETCH" with url params "id" every time that component is open
    useEffect(()=>{
        dispatch({type:"GET_POKEMON_BY_ID_FETCH", id:params.id})
    },[params.id])

    
    return(
        <>
        {selector!==null?
            <div className={style.center}>
                <div className={style.container}>
                    <div className={style.name}>#{selector[index].num} {selector[index].name}</div>

                    {/*View the path of evolution*/}
                    <div className={style.evolutionContainer}>
                        {selector.map((e:Pokemon) => ( 
                            <Link style={{textDecoration:"none", color:"black"}} to={`/pokemon/${e.id}`}>
                                <SinglePokemon
                                    key={e.id}

                                    /*Checks if it is choose pokemon and add shadow box*/
                                    propsSize={selector[index].id===e.id?{}:{boxShadow:"none"}}

                                    /*Parameters to view*/
                                    num={e.num}
                                    name={e.name}
                                    img={e.img}
                                    type={e.type}
                                />    
                            </Link>
                        ))}
                    </div>

                    {/*Container of pokemon parameters - 3 columns */}
                    <div className={style.dataContainer}>
                        {/*First column*/}
                        <div className={style.column}>
                            <SingleData
                                key={10}
                                parameter={"Height"}
                                value={selector[index].height}
                            />
                            <SingleData
                                key={11}
                                parameter={"Weight"}
                                value={selector[index].weight}
                            />
                            <SingleData
                                key={12}
                                parameter={"Egg"}
                                value={selector[index].egg}
                            />
                        </div>
                        
                        {/*Secend column*/}
                        <div className={style.column}>
                            <SingleData 
                                key={13}
                                parameter={"Spawn chance"}
                                value={selector[index].spawn_chance}
                            />
                            <SingleData 
                                key={14}
                                parameter={"Avg spawns"}
                                value={selector[index].avg_spawns}
                            />
                            <SingleData 
                                key={15}
                                parameter={"Spawn time"} 
                                value={selector[index].spawn_time}
                            />
                        </div>

                        {/*Third column*/}
                        <div className={style.column}>
                            <SingleData 
                                key={16}
                                parameter={"Weaknesses"} 
                                value={selector[index].weaknesses}
                            />
                            <SingleData 
                                key={17}
                                parameter={"Candy"} 
                                value={selector[index].candy}
                            />
                            <SingleData 
                                key={18}
                                parameter={"Candy count"} 
                                value={selector[index].candy_count}
                            />
                        </div>
                    </div>
                </div>
            </div>:
            <div>Loading...</div>}

            {/*Link back tu all pokemons*/}
            <Link className={style.back} to={`/`}><AiOutlineArrowLeft size={36}/>Back</Link>
        </>
    )
}

export default PokemonAllInfo;