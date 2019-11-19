import React from 'react';
import style from './Settings.module.css'
import {compose} from "redux";
import {RedirectContainer} from "../common/redirect/RedirectContainer";

const Settings =() => {
    return(
        <div className={style.settings}>
            Custom Settings
        </div>
    )
};

export default compose(
    RedirectContainer
)(Settings);