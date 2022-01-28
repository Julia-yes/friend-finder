import { isAutorized } from "./auth-reducer"

const INITIAL_SUCCESS = "INITIAL_SUCCESS";

let initialState = {
    initialization: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_SUCCESS: {
            return {
                ...state,
                initialization: true,
            }
        };
        default:
            return state;
    }
}

export const setInitialization = () => ({type: INITIAL_SUCCESS});

export const isInitialized = () => (dispatch) => {
    let promise = dispatch(isAutorized());    
    promise.then(() => {
        dispatch(setInitialization())
    })
    
}

export default appReducer;