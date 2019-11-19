import React from 'react';
import style from './Profile.module.css';
import Post from './MyPosts/Post/Post';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import Thiefs from './MyPosts/Vors.jpg'
import PostIncubatorContainer from "./MyPosts/Post_Incubator/PostIncubatorContainer";
import Preloader from "../common/preloader/Preloader";

const Profile = (props) => {

    if (!props.profile) {
        return (
            <Preloader/>
        )
    } else {
        let PostElements = props.data.map((obj) => (<Post photo={props.profile.photos.small}
                                                          message={obj.message} likes={obj.likes} id={obj.id}
                                                          likePress={props.likePress}/>));
        return (
            <section className={style.content}>
                <div>
                    <img src={Thiefs} className={style.contentImg}
                         alt='content'/>
                </div>
                <ProfileInfo name={props.profile.fullName} age={props.profile.userId} wife={props.profile.lookingForAJobDescription}
                             contacts={props.profile.contacts} status={props.status}
                             photo={props.profile.photos.large} getStatus={props.getStatus} putStatus={props.putStatus}/>
                <PostIncubatorContainer/>
                {PostElements}
            </section>
        );
    }
};

export default Profile