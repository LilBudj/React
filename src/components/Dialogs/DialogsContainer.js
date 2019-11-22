import {connect} from "react-redux";
import {addMessageActionCreator, updateCurrentMessageActionCreator} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {RedirectContainer} from "../common/redirect/RedirectContainer";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
      dialogData: state.dialogData,
  }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => {
            dispatch(addMessageActionCreator(message));
        },
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    RedirectContainer
)(Dialogs);