import React from 'react';
import style from './Error404.module.scss'
import {MdOutlineError} from 'react-icons/md'
import { Link } from 'react-router-dom';

const Error404:React.FC = () => {

    return(
        <div className={style.container}>
            <MdOutlineError size={84} color='#cf1322'/>
            <div className={style.message}>404 Page does not exist</div>
            <Link to="/" className={style.back}>Back</Link>
        </div>
    )
}

export default Error404;