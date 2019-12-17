import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {

    return(
        <div className={style.nav}>
            <ul className={style.navList}>
                <li><NavLink to='/Profile' activeClassName={style.aitem} className={style.item}><button>Profile</button></NavLink></li>
                <li><NavLink to='/Feed' activeClassName={style.aitem} className={style.item}><button>Feed</button></NavLink></li>
                <li><NavLink to='/Dialogs' activeClassName={style.aitem} className={style.item}><button>Messages</button></NavLink></li>
                <li><NavLink to='/Music' activeClassName={style.aitem} className={style.item}><button>Music</button></NavLink></li>
                <li><NavLink to='/Settings' activeClassName={style.aitem} className={style.item}><button>Settings</button></NavLink></li>
                <li><NavLink to='/Games' activeClassName={style.aitem} className={style.item}><button>Games</button></NavLink></li>
                <li><NavLink to='/Users' activeClassName={style.aitem} className={style.item}><button>Users</button></NavLink></li>
            </ul>
        </div>
        );
        };

        export default Nav