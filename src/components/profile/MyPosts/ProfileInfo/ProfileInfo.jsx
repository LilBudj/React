import React from 'react';
import style from './ProfileInfo.module.css';
import Mogol from "./Mogol.jpg";

const ProfileInfo = (props) => {
    return(
        <div className={style.profileInfo}>
            <img src={Mogol} className={style.ava} alt='Avatar picture'/>
            <div className={style.info}>
                <h1> {props.name} </h1>
                <p> {props.status} </p>
                <div className={style.directInfo}>
                    <p> Age: {props.age}</p>
                    <p> Married with: {props.wife}</p>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo