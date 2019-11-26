import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import SocialNetwork from './App';
import store from "./redux/ReduxStore";

let rerenderEntireTree = () => {
    let state = store.getState();
    ReactDOM.render(
        <SocialNetwork/>
                         , document.getElementById('root'));
};

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
