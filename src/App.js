import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Nav from './components/navbar/Navbar';
import Music from "./components/Music/Music";
import Feed from "./components/Feed/Feed";
import Settings from "./components/Settings/Settings";
import Games from "./components/Games/Games";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";

function App(props) {
  return (
          <div className="App-wrapper">
              <HeaderContainer/>
              <Nav friends={props.state.friendsData}/>
              <div>
                  <Route path='/Profile/:userId?' render={ () => <ProfileContainer/>} />
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
