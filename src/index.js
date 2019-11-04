import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage, AddPost, updateCurrentMessage, addCurrentValue, subscribe} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App data={state.profileData.PostData} DialogData={state.DialogsData.DialogData}
                         MessageData={state.DialogsData.MessagesData} friends={state.FriendsData}
                         AddPost={AddPost} addCurrentValue={addCurrentValue} addMessage={addMessage} updateCurrentMessage={updateCurrentMessage}
                         currentPost={state.profileData.currentValue} currentMessage={state.DialogsData.currentMessage}/>, document.getElementById('root'));
};

subscribe(rerenderEntireTree);
rerenderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
