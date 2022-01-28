import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import peopleReducer from "./people-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer';

let reducers = combineReducers ({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    peoplePage: peopleReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;