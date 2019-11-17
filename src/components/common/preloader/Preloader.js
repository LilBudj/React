import React from 'react'
import style from './Preloader.module.css'
import pre from './Interwind-1s-200px (1).svg'

const Preloader = (props) => {
    return (
        <div className={style.preloader}>
            <img src={pre} alt="load"/>
        </div>
    )
};

export default Preloader