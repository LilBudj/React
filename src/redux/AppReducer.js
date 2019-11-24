import {authAPI} from "../API/api";
import {setUserDataThunkCreator} from "./AuthReducer";

let initState = {
    initialized: false,
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case 'setInitialized': {
            return {
                ...state,
               initialized: true
            };
        }
        default:
            return state;
    }
};

export const setInitializedActionCreator = () => ({type: 'setInitialized' });

export const initializeAppThunkCreator = () => {
    return (dispatch) => {
       let promise  = dispatch(setUserDataThunkCreator());
        Promise.all([promise])
            .then(()=>{
                dispatch(setInitializedActionCreator())
            })
    }
};

export default appReducer;