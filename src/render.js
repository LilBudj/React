import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, AddPost, updateCurrentMessage, addCurrentValue} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App data={state.profileData.PostData} DialogData={state.DialogsData.DialogData}
                         MessageData={state.DialogsData.MessagesData} friends={state.FriendsData}
                         AddPost={AddPost} addCurrentValue={addCurrentValue} addMessage={addMessage} updateCurrentMessage={updateCurrentMessage}
                         currentPost={state.profileData.currentValue} currentMessage={state.DialogsData.currentMessage}/>, document.getElementById('root'));
};

