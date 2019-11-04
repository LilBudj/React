import React from 'react';
import style from './Dialogs.module.css';
import Dialog from "./Dialog";
import Message from "./Message";

const Dialogs = (props) => {
    let DialogItems = props.DialogData.map((obj) => (<Dialog name={obj.name} id={obj.id} src={obj.src}/>));

    let MessageItems = props.MessagesData.map((obj) => {
        return (<Message message={obj.message}/>)
    });

    let newElement = React.createRef()
    let Send = () => {
        let text = newElement.current.value;
        props.addMessage(text);
    };

    let updateMessageText = () => {
        let newText = newElement.current.value;
        props.updateCurrentMessage(newText);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.DialogList}>
                {DialogItems}
            </div>
            <div className={style.Dialog_display}>
                {MessageItems}
                <textarea ref={newElement} onChange={updateMessageText}>{props.currentMessage}</textarea>
                <button onClick={Send}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs