import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import friendsReducer from "./FriendsReducer";
import usersReducer from "./UsersReducer";

let reducers = combineReducers({
   profileData: profileReducer,
   dialogData: dialogsReducer,
   friendsData: friendsReducer,
   usersData: usersReducer,
});

let store = createStore(reducers);

export default store;