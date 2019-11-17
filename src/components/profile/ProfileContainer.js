import React from 'react'
import {connect} from 'react-redux'
import Profile from "./Profile";
import {
    addCurrentPostActionCreator,
    addPostActionCreator,
    setProfileActionCreator,
    likePressActionCreator
} from "../../redux/ProfileReducer";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 5189
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setProfile(response.data);
        });
    }

    render =() => {
            return (
                <Profile {...this.props}/>
            )
    }
}

let mapStateToProps = (state)=>{
    return {
        profile: state.profileData.profile,
        data: state.profileData.postData,
        currentPost: state.currentValue,
    }
};

const ProfileURLContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    AddNewPost: addPostActionCreator,
    newValue: addCurrentPostActionCreator,
    likePress: likePressActionCreator,
    setProfile: setProfileActionCreator
})(ProfileURLContainer);