import ProfileReducer from "./ProfileReducer";
import {addPostActionCreator} from "./ProfileReducer";


it('new post should be added', () => {
    let action = addPostActionCreator('Hello');
    let state = {
        postData: [
            {message: "Расход мужики", id: 1, likes: 4},
            {message: "Ты хорошо подумал, Калган?", id: 2, likes: 25},
            {message: "Характер у тебя наш", id: 3, likes: 35},
            {message: "Да ты не меньжуйся!", id: 4, likes: 8},
        ]
    };
    let newState = ProfileReducer(state, action);
    expect(newState.postData.length).toBe(5)
});
