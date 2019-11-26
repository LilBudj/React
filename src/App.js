import React, {Component} from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import './App.css';
import Nav from './components/navbar/Navbar';
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/preloader/Preloader";
import {initializeAppThunkCreator} from "./redux/AppReducer";
import store from "./redux/ReduxStore";
import {withSuspense} from "./components/common/suspense/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Feed = React.lazy(() => import('./components/Feed/Feed'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(()=> import('./components/Settings/Settings'));
const Games = React.lazy(()=>import('./components/Games/Games'))

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
                <Nav friends={this.props.friendsData}/>
                <div>
                    <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route exact path='/Dialogs' render={() => withSuspense(DialogsContainer)}/>
                    <Route exact path='/Users' render={() => <UsersContainer/>}/>
                    <Route exact path='/Feed' render={() => withSuspense(Feed)}/>
                    <Route exact path='/Music' render={() => withSuspense(Music)}/>
                    <Route exact path='/Settings' render={() => withSuspense(Settings)}/>
                    <Route exact path='/Games' render={() => withSuspense(Games)}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        friendsData: state.friendsData
    }
};

let SocialNetwork = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer {...props}/>
        </Provider>
    </BrowserRouter>
};

const AppContainer =  compose(withRouter,
    connect(mapStateToProps, {setUserData: initializeAppThunkCreator}))(App);

export default SocialNetwork
