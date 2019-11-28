import React from 'react';
import hearts from './octagon.png';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
return (
    <header className={style.header}>
        <img src={hearts} className={style.AppLogo} alt="network logo"/>
        ВХате
        <span className={style.Login}>
            { props.isAuth? <span>{props.login} <img src={props.photo} className={style.authPhoto}/> <button onClick={props.authLogout}>Logout</button></span>:<span>
            <NavLink to={'/login'}><button> Проходи </button></NavLink>
            <button> Первоход? </button>
        </span>}
        </span>
    </header>
);
};

export default Header 