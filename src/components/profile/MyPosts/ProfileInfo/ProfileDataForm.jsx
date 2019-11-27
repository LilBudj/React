import React from 'react'
import {createField, required} from "../../../../utils/validators/Validators";
import {Input, Textarea} from "../../../common/formControls/FormControls";
import {reduxForm} from "redux-form";
import style from './../../../login/Login.module.css'

const ProfileDataForm = ({handleSubmit, contacts, error}) => {
    return(
        <form onSubmit={handleSubmit}>
            <div><button>Save</button></div>
            {error && <div className={style.error}>
                {error}
            </div>}
            <div>
                <b>Full Name:</b> {createField('Fullname', 'fullname', [], Input)}
            </div>
            <div>
                <b>Looking for a job:</b> {createField(null, 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                <b>Skills:</b> {createField('Skills', 'skills', [], Textarea)}
            </div>
            <div>
                <b>Job description:</b> {createField('Description', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me:</b> {createField('about me...', 'aboutMe', [required], Textarea)}
            </div>
            <p>Contacts:</p>
            {Object.keys(contacts).map(key => {
                return <div> <b>{key} : {createField(`${key}`, 'contacts.' + key, [], Input)}</b></div>
            })}
        </form>
    )
};

const ProfileReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileReduxForm