import React from 'react'
import {connect} from 'react-redux'
import Header from "./Header";
import {
    setUserDataActionCreator,
    setUserPhotoActionCreator,
    toggleFetchingActionCreator
} from "../../redux/AuthReducer";
import * as axios from "axios";
import Preloader from "../common/preloader/Preloader";

class HeaderContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0 ) {
                this.props.setUserData(response.data.data.id, response.data.data.email, response.data.data.login);
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`, {withCredentials: true}).then(response => {
                    this.props.setUserPhoto(response.data.photos.small)
                })
            }
            this.props.toggle();
        });
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
        photo: state.auth.photo
    }
};

export default connect (mapStateToProps, {
    setUserData: setUserDataActionCreator,
    toggle: toggleFetchingActionCreator,
    setUserPhoto: setUserPhotoActionCreator
})(HeaderContainer)