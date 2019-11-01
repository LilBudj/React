import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let id = '/Dialog/' + props.id;
    return(
        <div className={style.dialog}>
            <NavLink to={id} className={style.nametext}
                     activeClassName={style.activeName}> {props.name} </NavLink>
        </div>
    )
};

export default Dialog