import React from 'react';
import style from './Pagination.module.scss';
import { useSelector } from 'react-redux';
import { State } from '../../Redux/reducers/pokemonsReducer';
import {BsChevronDoubleRight, BsChevronDoubleLeft} from 'react-icons/bs'

interface Props{
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>
}
const Pagination:React.FC<Props> = ({page, setPage}) => {


    //Get states from redux reduser "pokemonsReducer.ts"
    const lastPage:number | undefined =  useSelector((state:{ pokemonsReducer: State}) =>state.pokemonsReducer.lastPage);

    return(
        <>
        {console.log(lastPage)}
            {/*Div of 100vw where are center pagination*/}
            <div className={style.container}>
                {page===1?
                /*First*/
                        /*Center pagination div where are pagination options*/        
                        <div className={style.paginationBox}>
                            {/*Optons*/}
                            <div className={style.current}>1</div>
                            <div className={style.option} onClick={() => {setPage(2)}}>2</div>
                            <div className={style.option} onClick={() => {setPage(3)}}>3</div>
                            <div className={style.arrows} onClick={() => {setPage(lastPage)}}><BsChevronDoubleRight/></div>
                        </div>
                :page===2?
                /*secund*/
                        /*Center pagination div where are pagination options*/        
                        <div className={style.paginationBox}>
                            {/*Optons*/} 
                            <div className={style.option} onClick={() => {setPage(1)}}>1</div>
                            <div className={style.current}>2</div>
                            <div className={style.option} onClick={() => {setPage(3)}}>3</div>
                            <div className={style.option} onClick={() => {setPage(4)}}>4</div>
                            <div className={style.arrows} onClick={() => {setPage(lastPage)}}><BsChevronDoubleRight/></div>
                        </div>
                :page===lastPage?
                /*Last page*/
                        /*Center pagination div where are pagination options*/        
                        <div className={style.paginationBox}>
                            {/*Optons*/}
                            <div className={style.arrows} onClick={() => {setPage(1)}}><BsChevronDoubleLeft/></div>
                            <div className={style.option} onClick={() => {setPage(lastPage-2)}}>{lastPage-2}</div>
                            <div className={style.option} onClick={() => {setPage(lastPage-1)}}>{lastPage-1}</div>
                            <div className={style.current}>{lastPage}</div>
                        </div>
                :page===lastPage-1?
                /*Before the last one page*/
                        /*Center pagination div where are pagination options*/        
                        <div className={style.paginationBox}>
                            {/*Optons*/}
                            <div className={style.arrows} onClick={() => {setPage(1)}}><BsChevronDoubleLeft/></div>
                            <div className={style.option} onClick={() => {setPage(lastPage-3)}}>{lastPage-3}</div>
                            <div className={style.option} onClick={() => {setPage(lastPage-2)}}>{lastPage-2}</div>
                            <div className={style.current}>{lastPage-1}</div>
                            <div className={style.option} onClick={() => {setPage(lastPage)}}>{lastPage}</div>
                        </div>:
                /*Pages betwen from:3 to:last-2*/
                        <div className={style.paginationBox}>
                            {/*Optons*/}
                            <div className={style.arrows} onClick={() => {setPage(1)}}><BsChevronDoubleLeft/></div>

                            <div className={style.option} onClick={() => {setPage(page-2)}}>{page-2}</div>
                            <div className={style.option} onClick={() => {setPage(page-1)}}>{page-1}</div>

                            <div className={style.current}>{page}</div>

                            <div className={style.option} onClick={() => {setPage(page+1)}}>{page+1}</div>
                            <div className={style.option} onClick={() => {setPage(page+2)}}>{page+2}</div>

                            <div className={style.arrows} onClick={() => {setPage(lastPage)}}><BsChevronDoubleRight/></div>
                        </div>
                }
            </div>
        </>
    )
}
export default Pagination;