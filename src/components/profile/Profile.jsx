import React from 'react';
import style from './Profile.module.css';
import Post from './MyPosts/Post/Post';
import Incubator from "./MyPosts/Post_Incubator/IncubatorP";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import Thiefs from './MyPosts/Vors.jpg'

const Profile = (props) =>{

    let PostElements = props.data.map((obj) => (<Post message={obj.message} likes={obj.likes} id={obj.id} dispatch={props.dispatch}/>));

    return(
        <section className={style.content}>
            <div>
                <img src={Thiefs} className={style.contentImg}
                     alt='content'/>
            </div>
            <ProfileInfo name="Владимир Моголов" status="Вор в законе" age="43" wife="Zona"/>
            <Incubator dispatch={props.dispatch} addPost={props.addPost} currentPost={props.currentPost} addCurrentValue={props.addCurrentValue}/>
            {PostElements}
        </section>
    );
};

export default Profile