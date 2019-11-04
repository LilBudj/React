import React from 'react';
import style from './Incubator.module.css';

const Incubator = (props) => {

    let newPost = React.createRef();

    let AddNewPost = () =>{
        props.AddPost();
    };

    let newValue =() => {
        let text = newPost.current.value;
        props.addCurrentValue(text);
    };

    return(
        <div>
            <div>
                <textarea ref={newPost} onChange={newValue} value={props.currentPost}> What's new?</textarea>
            </div>
            <div>
                <button onClick={AddNewPost}> Post </button>
            </div>
        </div>
    );
};

export default Incubator