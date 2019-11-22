import React from 'react';
import style from './Dialogs.module.css';
import Dialog from "./Dialog";
import Message from "./Message";
import {Field, reduxForm} from "redux-form"
import {Textarea} from "../common/formControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/Validators";

const maxLength = maxLengthCreator(50);

const Dialogs = (props) => {
    let DialogItems = props.dialogData.dialogData.map((obj) => (<Dialog name={obj.name} id={obj.id} src={obj.src}/>));

    let MessageItems = props.dialogData.messagesData.map((obj) => {
        return (<Message message={obj.message}/>)
    });

    let onSubmit = (formData) => {
        props.sendMessage(formData.message)
    };

    return (
        <div className={style.dialogs}>
            <div className={style.DialogList}>
                {DialogItems}
            </div>
            <div className={style.Dialog_display}>
                {MessageItems}
                <ReduxDialogForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

const DialogForm = (props) => {

    return (
        <div>
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Type your message...'} name={'message'} component={Textarea} validate={[required, maxLength]}/>
            <button>Send</button>
        </form>
        </div>
    )
};

const ReduxDialogForm = reduxForm({form: 'dialog'})(DialogForm);

export default Dialogs