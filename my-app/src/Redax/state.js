import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



let store = {
    _state: {
        profilePage: {
            myPostsData: [
                {id: 1, message: 'Hi, how are you?', likeCounts: 15},
                {id: 2, message: 'It\'s my first post', likeCounts: 23}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Fedya"},
                {id: 2, name: "Vitya"},
                {id: 3, name: "Misha"},
                {id: 4, name: "Vasya"},
                {id: 5, name: "Ilyusha"}
            ],
            messagesData: [
                {id: 1, textMessage: "Hi"},
                {id: 2, textMessage: "How are you doing?"},
                {id: 3, textMessage: "Yo"}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observe) {
        this._callSubscriber = observe;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._callSubscriber(this._state);
    }

}







export default store;
window.store = store