import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
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
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/preloader/Preloader";
import {initializeAppThunkCreator} from "./redux/AppReducer";

class App extends Component {
    componentDidMount() {
        this.props.setUserData()
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className="App-wrapper">
                <HeaderContainer/>
                <Nav friends={this.props.state.friendsData}/>
                <div>
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route exact path='/Dialogs' render={() => <DialogsContainer/>}/>
                    <Route exact path='/Users' render={() => <UsersContainer/>}/>
                    <Route exact path='/Feed' render={() => <Feed/>}/>
                    <Route exact path='/Music' render={() => <Music/>}/>
                    <Route exact path='/Settings' render={() => <Settings/>}/>
                    <Route exact path='/Games' render={() => <Games/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
};

export default compose(withRouter,
    connect(mapStateToProps, {setUserData: initializeAppThunkCreator}))(App);
