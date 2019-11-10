import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/ReduxStore";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'

let rerenderEntireTree = () => {
    let state = store.getState();
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
        <App state={state} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </BrowserRouter>
                         , document.getElementById('root'));
};

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
