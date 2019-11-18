import React from 'react';
import style from './Post.module.css'
import Mogol from './../ProfileInfo/Mogol.jpg'
import {likePressActionCreator} from "../../../../redux/ProfileReducer";


const Post = (props) => {

    let likePress = () => {
        props.likePress(props.id);
    };
    return(
        <div className={style.item}>
            <img
                src={props.photo} className={style.icon} alt='icon'/>
            {props.message}
            <div>
                <button onClick={likePress}> Like</button>
                liked: {props.likes}
            </div>
        </div>
    );
};

export default Post