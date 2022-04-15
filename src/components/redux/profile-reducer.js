import { ErrorMessage } from "formik";
import {usersApi} from "../../api/api"

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_USERS_STATUS = "SET_USERS_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";
const UPDATE_MAIN_PHOTO = "UPDATE_MAIN_PHOTO";
const UPDATE_PROFILE = "UPDATE_PROFILE";
const ERROR_CONTACTS_MESSAGE = "ERROR_CONTACTS_MESSAGE";

let initialState = {
 posts : [
                    {id: 0, message: "Hello, people", likesCount: 3},
                    {id: 1, message: "It's my first post", likesCount: 15},
                    {id: 2, message: "Hi", likesCount: 3},
                    {id: 3, message: "It's my second post", likesCount: 15},
                    {id: 4, message: "Yo", likesCount: 3},
                    {id: 5, message: "Joy", likesCount: 15}
 ],
 profile : null,
 status : " ",
 error : null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts : [...state.posts, {id: 1, message: action.text , likesCount: 10}]
            }
        };
        case SET_USERS_PROFILE: {
            return  {...state,
                profile : action.profile,
            }
        };
        case SET_USERS_STATUS: {
            return  {...state,
                status : action.status,
            }
        };
        case UPDATE_STATUS: {
            return  {...state,
                status : action.newStatus,
            }
        };
        case UPDATE_MAIN_PHOTO: {
            return  {...state,
                profile : {
                    ...state.profile,
                    photos : action.photos
                }
            }
        };
        case UPDATE_PROFILE: {
            return  {...state,
                profile : {
                    ...state.profile,
                    ...action.newProfile
                }
            }
        };
        case ERROR_CONTACTS_MESSAGE: {
            return  {...state,
                error : action.errorMessage,
            }
        };
        default:
            return state;
    }
}

export const addPost = (text) => ({type: ADD_POST, text: text});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setUsersStatus = (status) => ({type: SET_USERS_STATUS, status});
export const updateStatus = (newStatus) => ({type: UPDATE_STATUS, newStatus});
export const updateMainPhotoSuccess = (photos) => ({type: UPDATE_MAIN_PHOTO, photos});
export const updateProfile = (newProfile) => ({type: UPDATE_PROFILE, newProfile});
export const showErrorMessage = (errorMessage) => ({type: ERROR_CONTACTS_MESSAGE, errorMessage});


export const showUserInfo = (userId) => {
    return (dispatch) => {
        usersApi.getUserInfo(userId).then(data => {
            dispatch(setUsersProfile(data))           
        });
    }
}

export const showUserStatus = (userId) => {
    return (dispatch) => {
        usersApi.getUserStatus(userId).then(data => {
                dispatch(setUsersStatus(data))  
        });
    }
}
export const updateMyStatus = (status) => {
    return (dispatch) => {
        usersApi.updateMyStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(updateStatus(status))   
            }
        });
    }
}
export const savePhotoProcess = (photoFile) => {
    return (dispatch) => {
        usersApi.updateMainPhoto(photoFile).then(data => {
            if (data.resultCode === 0) {
                dispatch(updateMainPhotoSuccess(data.data.photos))   
            }
        });
    }
}

export const updateMyProfile = (profile) => {
    return (dispatch) => {
        return usersApi.updateMyProfile(profile).then(data => {
            if (data.resultCode === 0) {
                dispatch(updateProfile(profile));
                dispatch(setUsersProfile(profile));
                return Promise.resolve();
            }
            else if (data.resultCode === 1) {
                dispatch(showErrorMessage(data.messages[0]));
                return Promise.reject(data.messages[0])
            }
        });
    }
}

export default profileReducer;