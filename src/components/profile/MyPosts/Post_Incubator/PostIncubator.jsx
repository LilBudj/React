import React from 'react';
import style from './Incubator.module.css';
import {Field, reduxForm} from "redux-form"
import {maxLengthCreator, required} from "../../../../utils/validators/Validators";
import {Textarea} from "../../../common/formControls/FormControls";

let maxLength = maxLengthCreator(30);

function ProfileForm(props) {
    return <>
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="post" placeholder="What's new?" component={Textarea} validate={[required, maxLength]}/>
        </div>
        <div>
            <button> Post</button>
        </div>
        </form>
    </>;
}

const ReduxProfileForm = reduxForm({form: 'profile-add-post'})(ProfileForm);

const Incubator = (props) => {
    let onSubmit = (formData) =>{
        props.AddNewPost(formData.post);
    };

    return(
        <div>
            <ReduxProfileForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Incubator