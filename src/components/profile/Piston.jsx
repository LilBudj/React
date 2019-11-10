import React from 'react';
import style from './Piston.module.css';
import Thiefs from "./MyPosts/Vors.jpg";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import Incubator from "./MyPosts/Post_Incubator/PostIncubator";
import Post from "./MyPosts/Post/Post";

const Piston = () => {
    return(
        <section className={style.content}>
            <div>
                <img src={Thiefs} className={style.contentImg}
                     alt='content'/>
            </div>
            <ProfileInfo name="Наиль Идрисов" status="Вор в законе" age="38" wife="Zona"/>
            <Incubator/>
            <Post message="Эй, филателист, ты не то место мочалкой загораживаешь!" likes='20'/>
            <Post message="Тут с обратной стороны затыкать надо!" likes='15'/>
        </section>
    )
};

export default Piston