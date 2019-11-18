import React from 'react'
import {connect} from "react-redux";
import {addMessageActionCreator, updateCurrentMessageActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {RedirectContainer} from "../common/redirect/RedirectContainer";

class PseudoDialogs extends React.Component {
    render = () => {
        const RedirectDialogsComponent = RedirectContainer(Dialogs, this.props.isAuth);
        return (
            <>
                <RedirectDialogsComponent {...this.props}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        dialogData: state.dialogData,
        isAuth: state.auth.isAuth
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        },
        updateMessageText: (newText) => {
            dispatch(updateCurrentMessageActionCreator(newText));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(PseudoDialogs);

export default DialogsContainer