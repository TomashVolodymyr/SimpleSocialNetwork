import React from "react";
import {addMessageCreator} from "../../Redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData:state.dialogsPage.dialogsData,
        messagesData:state.dialogsPage.messagesData,
        newMessageText:state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (dialogs) => {
            dispatch(addMessageCreator(dialogs));
        },
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs)