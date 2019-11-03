import React from 'react';
import style from './Dialogs.module.css';
import Dialog from "./Dialog";
import Message from "./Message";

const Dialogs = (props) => {
    let DialogItems = props.DialogData.map((obj) => (<Dialog name={obj.name} id={obj.id} src={obj.src}/>));

    let MessageItems = props.MessagesData.map((obj) => {
        return (<Message message={obj.message}/>)
    });

    return(
        <div className={style.dialogs}>
            <div className={style.DialogList}>
                {DialogItems}
            </div>
            <div className={style.Dialog_display}>
                {MessageItems}
            </div>
        </div>
    );
};

export default Dialogs