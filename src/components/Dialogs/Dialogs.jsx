import React from 'react';
import style from './Dialogs.module.css';
import Dialog from "./Dialog";
import Message from "./Message";
import {addMessageActionCreator, updateCurrentMessageActionCreator} from "../../redux/state";

const Dialogs = (props) => {
    let DialogItems = props.dialogData.map((obj) => (<Dialog name={obj.name} id={obj.id} src={obj.src}/>));

    let MessageItems = props.messagesData.map((obj) => {
        return (<Message message={obj.message}/>)
    });

    let newElement = React.createRef();
    let Send = () => {
        props.dispatch(addMessageActionCreator());
    };

    let updateMessageText = () => {
        let newText = newElement.current.value;
        props.dispatch(updateCurrentMessageActionCreator(newText));
    };

    return (
        <div className={style.dialogs}>
            <div className={style.DialogList}>
                {DialogItems}
            </div>
            <div className={style.Dialog_display}>
                {MessageItems}
                <textarea ref={newElement} onChange={updateMessageText} value={props.currentMessage}>...</textarea>
                <button onClick={Send}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs