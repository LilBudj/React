import React from 'react';
import style from './Post.module.css'
import Mogol from './../ProfileInfo/Mogol.jpg'
import {likePressActionCreator} from "../../../../redux/ProfileReducer";


const Post = (props) => {

    let likePress = () => {
        props.dispatch(likePressActionCreator(props.id));
    };

    return(
        <div className={style.item}>
            <img
                src={Mogol} className={style.icon} alt='icon'/>
            {props.message}
            <div>
                <button onClick={likePress}> Like</button>
                liked: {props.likes}
            </div>
        </div>
    );
};

export default Post