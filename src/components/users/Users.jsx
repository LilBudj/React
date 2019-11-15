import React from 'react'
import style from './Users.module.css'
import * as axios from 'axios'
import defaultPhoto from './../profile/MyPosts/ProfileInfo/russians.jpg'

class Users extends React.Component {
    // if (props.users.length === 0) {
    //     props.setUsers([{
    //         name: "Kalgan",
    //         photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAb3SPw5yTzMwTaQ2k0vTSl4bVkia4ikyVM2KLxfKLkUjNqkMG&s',
    //         id: 1,
    //         followed: false,
    //         status: "I am on my own",
    //         location: {country: "Russia", city: "Norilsk"}
    //     },
    //         {
    //             name: "Knyaz",
    //             photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAb3SPw5yTzMwTaQ2k0vTSl4bVkia4ikyVM2KLxfKLkUjNqkMG&s',
    //             id: 2,
    //             followed: false,
    //             status: "Na zone",
    //             location: {country: "Russia", city: "Moskow"}
    //         },
    //         {
    //             name: "Piston",
    //             photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAb3SPw5yTzMwTaQ2k0vTSl4bVkia4ikyVM2KLxfKLkUjNqkMG&s',
    //             id: 3,
    //             followed: false,
    //             status: "A-tya-tya!",
    //             location: {country: "Belarus", city: "Minsk"}
    //         },
    //         {
    //             name: "Pop",
    //             photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAb3SPw5yTzMwTaQ2k0vTSl4bVkia4ikyVM2KLxfKLkUjNqkMG&s',
    //             id: 4,
    //             followed: false,
    //             status: "Petuh zakukarekal!",
    //             location: {country: "Russia", city: "Pskov"}
    //         },]);
    // }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=2&count=3").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render = () => {
        return (
            <div className={style.users}>
                {this.props.users.map(u => (<div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small === null ? defaultPhoto : u.photos.small} alt='ava'
                             className={style.photo}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
    }
}

export default Users