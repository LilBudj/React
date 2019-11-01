import React from 'react';
import style from './Post.module.css'
import Mogol from './../ProfileInfo/Mogol.jpg'

const Post = (props) => {
    return(
        <div className={style.item}>
            <img
                src={Mogol} className={style.icon} alt='icon'/>
            {props.message}
            <div>
                <button> Like</button>
                liked: {props.likes}
            </div>
        </div>
    );
};

export default Post