import React from 'react'
import {connect} from 'react-redux'
import Header from "./Header";
import {
    authLogoutThunkCreator,
    setUserDataThunkCreator,
    setUserPhotoActionCreator, setUserPhotoThunkCreator,
    toggleFetchingActionCreator
} from "../../redux/AuthReducer";
import Preloader from "../common/preloader/Preloader";
import {getProfileThunkCreator} from "../../redux/ProfileReducer";

class HeaderContainer extends React.Component{

    componentDidMount() {
            this.props.setUserData()

    }

    render = () => {
        if (this.props.isFetching){
            return (
                <Preloader/>
            )
        }
        else {
            return (
                <Header {...this.props}/>
            )
        }
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching,
        login: state.auth.login,
        id: state.auth.userId
    }
};

export default connect (mapStateToProps, {
    setUserData: setUserDataThunkCreator,
    toggle: toggleFetchingActionCreator,
    setUserPhoto: setUserPhotoThunkCreator,
    authLogout: authLogoutThunkCreator,
})(HeaderContainer)