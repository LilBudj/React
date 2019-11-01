import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from "./components/profile/MyPosts/Post/Post";
import Dialog from "./components/Dialogs/Dialog";
import Message from "./components/Dialogs/Message";

/**/

let PostData = [
    {message:"Расход мужики", id:'1', likes:'4'},
    {message:"Ты хорошо подумал, Калган? Или может ты отсюда на рывок надеешься?", id:'2', likes:'25'},
    {message:"Ты еще сявка - с ворами водку пить!", id:'3', likes:'35'},
    {message:"Ты че пялишься, Окунь, а?", id:'4', likes:'8'},
];

let PostElements = PostData.map((obj) => (<Post message={obj.message} likes={obj.likes}/>));

/**/

let MessagesData = [
    {message: "Delay chto tebe govoryat Mogol", id: '1'},
    {message: "Opystite ego!", id: '2'},
];

let MessageItems = MessagesData.map((obj) => {
    return (<Message message={obj.message}/>)
});

/**/

let DialogData = [
    {name: "Kalyvan", id: '1'},
    {name: "Kalach", id: '2'},
    {name: "Pop", id: '3'},
    {name: "Piston", id: '4'},
];

let DialogItems = DialogData.map((obj) => (<Dialog name={obj.name} id={obj.id}/>));

/**/

ReactDOM.render(<App data={PostElements} DialogData={DialogItems} MessageData={MessageItems}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
