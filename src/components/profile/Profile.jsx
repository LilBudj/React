import React from 'react';
import style from './Profile.module.css';
//import Post from './MyPosts/Post/Post';
import Incubator from "./MyPosts/Post_Incubator/IncubatorP";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import Thiefs from './MyPosts/Vors.jpg'

const Profile = (props) =>{

    return(
        <section className={style.content}>
            <div>
                <img src={Thiefs} className={style.contentImg}
                     alt='content'/>
            </div>
            <ProfileInfo name="Владимир Моголов" status="Вор в законе" age="43" wife="Zona"/>
            <Incubator/>
            {props.data}
        </section>
    );
};

export default Profile