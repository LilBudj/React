import React from 'react';
import style from './Dialogs.module.css';
import Dialog from "./Dialog";
import Message from "./Message";

const Dialogs = (props) => {
    let DialogItems = props.dialogData.dialogData.map((obj) => (<Dialog name={obj.name} id={obj.id} src={obj.src}/>));

    let MessageItems = props.dialogData.messagesData.map((obj) => {
        return (<Message message={obj.message}/>)
    });

    let newElement = React.createRef();
    let sendMessage = () => {
        props.sendMessage();
    };

    let updateMessageText = () => {
        let newText = newElement.current.value;
        props.updateMessageText(newText);
    };

    let sendOnKeyMessage = (e) => {
        if (e.key === "Enter"){
            props.sendMessage();
        }
    };

    return (
        <div className={style.dialogs}>
            <div className={style.DialogList}>
                {DialogItems}
            </div>
            <div className={style.Dialog_display}>
                {MessageItems}
                <textarea ref={newElement} onKeyPress={sendOnKeyMessage} placeholder="Your message"
                          onChange={updateMessageText} value={props.dialogData.currentMessage}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs