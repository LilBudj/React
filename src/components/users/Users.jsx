import React from 'react'
import style from './Users.module.css'
import defaultPhoto from './../profile/MyPosts/ProfileInfo/russians.jpg'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= (pagesCount); i++) {
        pages.push(i);
    }
    let pageArray = pages.map(p => {
        return <span className={(props.currentPage === p) && style.active}
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
                        <img src={u.photos.small === null ? defaultPhoto : u.photos.small} alt='ava'
                             className={style.photo}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
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

export default Users