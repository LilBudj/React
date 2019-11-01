import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = (props) => {
    return(
        <div className={style.dialogs}>
            <div className={style.DialogList}>
                {props.DialogData}
            </div>
            <div className={style.Dialog_display}>
                {props.MessageData}
            </div>
        </div>
    );
};

export default Dialogs