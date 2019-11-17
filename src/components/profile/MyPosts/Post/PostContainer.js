import {connect} from 'react-redux';
import {likePressActionCreator} from "../../../../redux/ProfileReducer";
import Post from "./Post";

let mapStatetoProps = (state) => {
    return {
        postData: state.postData,
        photo: state.profile.photos.small
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        likePress: (id) => {
            dispatch(likePressActionCreator(id))
        },
    }
};

const PostContainer = connect(mapStatetoProps, mapDispatchToProps)(Post);

export default PostContainer
