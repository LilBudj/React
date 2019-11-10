import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import friendsReducer from "./FriendsReducer";

let reducers = combineReducers({
   profileData: profileReducer,
   dialogData: dialogsReducer,
   friendsData: friendsReducer
});

let store = createStore(reducers);

export default store;