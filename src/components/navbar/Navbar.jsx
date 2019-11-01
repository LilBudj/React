import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
return(
    <nav className={style.nav}>
        <ul>
            <li><NavLink to='/Profile' activeClassName={style.aitem} className={style.item}> Profile</NavLink></li>
            <li><NavLink to='/Feed' activeClassName={style.aitem} className={style.item}>Feed</NavLink></li>
            <li><NavLink to='/Dialogs' activeClassName={style.aitem} className={style.item}>Messages</NavLink></li>
            <li><NavLink to='/Music' activeClassName={style.aitem} className={style.item}>Music</NavLink></li>
            <li><NavLink to='/Settings' activeClassName={style.aitem} className={style.item}>Settings</NavLink></li>
            <li><NavLink to='/Games' activeClassName={style.aitem} className={style.item}>Games</NavLink></li>
        </ul>
    </nav>

);
};

export default Nav