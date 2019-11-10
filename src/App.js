import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/header/Header';
import './App.css';
import Nav from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Feed from "./components/Feed/Feed";
import Settings from "./components/Settings/Settings";
import Games from "./components/Games/Games";

function App(props) {
    debugger
  return (

      <BrowserRouter>
          <div className="App-wrapper">
              <Header/>
              <Nav friends={props.state.friendsData}/>
              <div>
                  <Route exact path='/Profile' render={ () => <Profile data={props.state.profileData.postData} dispatch={props.dispatch}
                                                                       currentPost={props.state.currentValue}/>} />
                  <Route exact path='/Dialogs' render={ () => <Dialogs currentMessage={props.state.dialogData.currentMessage} dispatch={props.dispatch}
                                                                       dialogData={props.state.dialogData.dialogData} messagesData={props.state.dialogData.messagesData} />}/>
                  <Route exact path='/Feed' render={ () => <Feed/>}/>
                  <Route exact path='/Music' render={ () => <Music/>}/>
                  <Route exact path='/Settings' render={ () => <Settings/>}/>
                  <Route exact path='/Games' render={ () => <Games/>}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
