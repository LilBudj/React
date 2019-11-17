import React from 'react';
import style from './ProfileInfo.module.css';
import Mogol from "./Mogol.jpg";

const ProfileInfo = (props) => {

    return (
        <div className={style.profileInfo}>
            <img src={props.photo} className={style.ava} alt='Avatar picture'/>
            <div className={style.info}>
                <h1> {props.name} </h1>
                <p> {props.status} </p>
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
        </div>
    )
};

export default ProfileInfo