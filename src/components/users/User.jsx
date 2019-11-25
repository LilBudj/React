import React from 'react'
import style from './Users.module.css'
import {NavLink} from "react-router-dom";
import defaultPhoto from "../profile/MyPosts/ProfileInfo/russians.jpg";

const User = (props) => {
    return(
        <div key={props.u.id}>
                <span>
                    <div>
                        <NavLink to={'/Profile/' + props.u.id}>
                            <img src={props.u.photos.small === null ? defaultPhoto : props.u.photos.small} alt='ava'
                                 className={style.photo}/></NavLink>
                    </div>
                    <div>
                        {props.u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === props.u.id)} onClick={() => {
                                props.unfollow(props.u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === props.u.id)} onClick={() => {
                                props.follow(props.u.id)
                            }}>Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{props.u.name}</div>
                        <div>{props.u.status}</div>
                    </span>
                    <span>
                        <div>{"props.u.location.city"}</div>
                        <div>{"props.u.location.country"}</div>
                    </span>
                </span>
        </div>
    )
};

export default User