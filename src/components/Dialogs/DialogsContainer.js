import {connect} from "react-redux";
import {addMessageActionCreator, updateCurrentMessageActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
      dialogData: state.dialogData.dialogData,
      messagesData: state.dialogData.messagesData
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer