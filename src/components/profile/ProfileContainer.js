import React from 'react'
import {connect} from 'react-redux'
import Profile from "./Profile";
import {
    addCurrentPostActionCreator,
    addPostActionCreator,
    likePressActionCreator, getProfileThunkCreator
} from "../../redux/ProfileReducer";
import {withRouter} from "react-router-dom";
import {RedirectContainer} from "../common/redirect/RedirectContainer";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 5189
        }
            this.props.setProfile(userId)
    }

    render =() => {
        const RedirectProfileContainer = RedirectContainer(Profile, this.props.isAuth);
            return (
                <RedirectProfileContainer {...this.props}/>
            )
    }
}

let mapStateToProps = (state)=>{
    return {
        profile: state.profileData.profile,
        data: state.profileData.postData,
        currentPost: state.currentValue,
        isAuth: state.auth.isAuth
    }
};

const ProfileURLContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    AddNewPost: addPostActionCreator,
    newValue: addCurrentPostActionCreator,
    likePress: likePressActionCreator,
    setProfile: getProfileThunkCreator
})(ProfileURLContainer);