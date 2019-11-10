import React from 'react';
import style from './Incubator.module.css';
import {addCurrentPostActionCreator, addPostActionCreator} from "../../../../redux/ProfileReducer";

const Incubator = (props) => {

    let newPost = React.createRef();

    let AddNewPost = () =>{
        props.dispatch(addPostActionCreator());
    };

    let newValue =() => {
        let text = newPost.current.value;
        props.dispatch(addCurrentPostActionCreator(text));
    };

    return(
        <div>
            <div>
                <textarea ref={newPost} onChange={newValue} value={props.currentPost} placeholder="What's new?"></textarea>
            </div>
            <div>
                <button onClick={AddNewPost}> Post </button>
            </div>
        </div>
    );
};

export default Incubator