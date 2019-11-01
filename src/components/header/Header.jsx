import React from 'react';
import hearts from './octagon.png';
import style from './Header.module.css';

const Header = () => {
return (
    <header className={style.header}>
        <img src={hearts} className={style.AppLogo} alt="network logo"/>
        ВХате
        <span className={style.Login}>
            <button> Первоход? </button>
            <button> Проходи </button>
        </span>
    </header>
);
};

export default Header 