import {addPostActionCreator} from "../../../../redux/ProfileReducer";
import Incubator from "./PostIncubator";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profileData: state.profileData
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        AddNewPost: (post) => {
            dispatch(addPostActionCreator(post));
        },
    }
};

const IncubatorContainer = connect(mapStateToProps, mapDispatchToProps)(Incubator);

export default IncubatorContainer