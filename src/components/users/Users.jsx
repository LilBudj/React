import React from 'react'
import style from './Users.module.css'
import defaultPhoto from './../profile/MyPosts/ProfileInfo/russians.jpg'
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= (pagesCount); i++) {
        pages.push(i);
    }
    let pageArray = pages.map((p) => {
        return <span className={(props.currentPage === p) ? style.active : ""}
                     onClick={() => {
                         props.setPage(p)
                     }}>{p}  </span>
    });
    return (
        <div className={style.users}>
            {pageArray}
            {props.users.map(u => (<div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/Profile/' + u.id}>
                            <img src={u.photos.small === null ? defaultPhoto : u.photos.small} alt='ava'
                                 className={style.photo}/></NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                               props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>))}
        </div>
    )
};

export default Users;