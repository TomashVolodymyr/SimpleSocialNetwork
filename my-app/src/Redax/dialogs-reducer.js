const ADD_MESSAGE = 'DIALOGS/ADD_MESSAGE';

export const addMessageCreator = (dialogs) => ({
    type: ADD_MESSAGE,
    dialogs
});

let initialState = {
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
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.dialogs;
            return  {
                ...state,
                newMessageText: '',
                messagesData:[...state.messagesData,{id: 4, textMessage: body}]
            }

        default:
            return state;
    }
}

export default dialogsReducer;