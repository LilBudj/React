import React from 'react';
import style from './Music.module.css';
import {RedirectContainer} from "../common/redirect/RedirectContainer";
import {compose} from "redux";

const Music = () => {
    return(
        <div className={style.music}>
            Sample Music
        </div>
    )
};

export default compose(
    RedirectContainer
)(Music)