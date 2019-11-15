import React from 'react';
import {Route} from 'react-router-dom'
import Header from './components/header/Header';
import './App.css';
import Nav from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Music from "./components/Music/Music";
import Feed from "./components/Feed/Feed";
import Settings from "./components/Settings/Settings";
import Games from "./components/Games/Games";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";

function App(props) {
  return (
          <div className="App-wrapper">
              <Header/>
              <Nav friends={props.state.friendsData}/>
              <div>
                  <Route exact path='/Profile' render={ () => <Profile data={props.state.profileData.postData} dispatch={props.dispatch}
                                                                       currentPost={props.state.currentValue}/>} />
                  <Route exact path='/Dialogs' render={ () => <DialogsContainer />}/>
                  <Route exact path='/Users' render = { ()=> <UsersContainer/>}/>
                  <Route exact path='/Feed' render={ () => <Feed/>}/>
                  <Route exact path='/Music' render={ () => <Music/>}/>
                  <Route exact path='/Settings' render={ () => <Settings/>}/>
                  <Route exact path='/Games' render={ () => <Games/>}/>
              </div>
          </div>
  );
}

export default App;
