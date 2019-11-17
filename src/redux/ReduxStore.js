import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import friendsReducer from "./FriendsReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";

let reducers = combineReducers({
   profileData: profileReducer,
   dialogData: dialogsReducer,
   friendsData: friendsReducer,
   usersData: usersReducer,
   auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;