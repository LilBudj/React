import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Mogol from "./Mogol.jpg";
import ProfileStatus from "./ProfileStatus";
import ProfileReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    let uploadAvatar = (e) => {
        if (!!e.target.files.length){
            props.uploadPhoto(e.target.files[0])
        }
    };
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {setEditMode(false)}
        )
    };
    return (
        <div className={style.profileInfo}>
            <img src={!props.photo?Mogol:props.photo} className={style.ava} alt='Avatar picture'/>
            <div className={style.info}>
                <h1> {props.name} </h1>
                <ProfileStatus status={props.status} putStatus={props.putStatus}/>
                <div className={style.directInfo}>
                    <p> Id: {props.age}</p>
                    <p> {props.job}</p>
                </div>
                {!editMode ? <div>
                {props.isOwner && <button onClick={() => {setEditMode(true)}}>Edit Profile</button>}
                <div>
                    <p>Contacts:</p>
                    {Object.keys(props.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={props.contacts[key]}/>
                    })}
                </div>
                </div>: <ProfileReduxForm onSubmit={onSubmit} contacts={props.contacts}/>}
            </div>
            {props.isOwner && <span><input type={'file'} onChange={uploadAvatar}/></span>}
        </div>
    )
};

const Contact = (props) => {
    return(
        <div className={style.contacts}>
            <b>{props.contactTitle}</b>: <b>{props.contactValue}</b>
        </div>
    )
};

export default ProfileInfo