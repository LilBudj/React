import React from 'react';
import style from './ProfileInfo.module.css';
import Mogol from "./Mogol.jpg";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    let uploadAvatar = (e) => {
        if (!!e.target.files.length){
            props.uploadPhoto(e.target.files[0])
        }
    };
    return (
        <div className={style.profileInfo}>
            <img src={!props.photo?Mogol:props.photo} className={style.ava} alt='Avatar picture'/>
            <div className={style.info}>
                <h1> {props.name} </h1>
                <ProfileStatus status={props.status} putStatus={props.putStatus}/>
                <div className={style.directInfo}>
                    <p> Id: {props.age}</p>
                    <p> {props.wife}</p>
                </div>
                <div>
                    <p>Contacts:</p>
                    <p>{props.contacts.github}</p>
                    <p>{props.contacts.vk}</p>
                    <p>{props.contacts.instagram}</p>
                </div>
            </div>
            {props.isOwner && <span><input type={'file'} onChange={uploadAvatar}/></span>}
        </div>
    )
};

export default ProfileInfo