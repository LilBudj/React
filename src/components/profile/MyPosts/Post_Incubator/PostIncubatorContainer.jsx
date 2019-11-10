import React from 'react';
import {addCurrentPostActionCreator, addPostActionCreator} from "../../../../redux/ProfileReducer";
import Incubator from "./PostIncubator";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profileData: state.profileData
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        AddNewPost: () => {
            dispatch(addPostActionCreator());
        },
        newValue: (text) => {
            dispatch(addCurrentPostActionCreator(text));
        }
    }
};

const IncubatorContainer = connect(mapStateToProps, mapDispatchToProps)(Incubator);

export default IncubatorContainer