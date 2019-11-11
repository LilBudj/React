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