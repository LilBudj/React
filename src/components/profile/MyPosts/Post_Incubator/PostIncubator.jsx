import React from 'react';
import style from './Incubator.module.css';

const Incubator = (props) => {

    let newPost = React.createRef();

    let AddNewPost = () =>{
        props.AddNewPost();
    };

    let newValue =() => {
        let text = newPost.current.value;
        props.newValue(text);
    };

    let addNewPostOnKey = (e) => {
        if (e.key === "Enter"){
            props.AddNewPost();
        }
    };
    return(
        <div>
            <div>
                <textarea ref={newPost} onKeyPress={addNewPostOnKey} onChange={newValue} value={props.profileData.currentValue} placeholder="What's new?"/>
            </div>
            <div>
                <button onClick={AddNewPost}> Post </button>
            </div>
        </div>
    );
};

export default Incubator