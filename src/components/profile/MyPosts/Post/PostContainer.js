import {connect} from 'react-redux';
import {likePressActionCreator} from "../../../../redux/ProfileReducer";
import Post from "./Post";

let mapStatetoProps = (state) => {
    return {
        postData: state.postData
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
