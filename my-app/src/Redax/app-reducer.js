import {getUsersData} from "./auth-reducer";

const SUCCESS_INITIALIZED = 'APP/SUCCESS_INITIALIZED';
const successInitialized = () => ({
    type: SUCCESS_INITIALIZED,
});

let initialState = {
    initialized: false,
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case SUCCESS_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getUsersData());
    Promise.all([promise]).then(()=>{
            dispatch(successInitialized());
        }
    );
}
export default appReducer;