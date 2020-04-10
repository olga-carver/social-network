import { getAuthUserData } from './auth-reduser';

const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS';


let initialState = {
   initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;

    }
}

export const initializationSuccess = () => ({ type: INITIALIZATION_SUCCESS });


export const initializeApp = () => (dispatch) => {

    let promise = dispatch(getAuthUserData());

    console.log(promise);
    
    Promise.all([promise])
    .then(() => {
        dispatch(initializationSuccess());
    });
    
}

export default appReducer;

