import { ErrorMessage } from "formik";
import {usersApi} from "../../api/api"

const ADD_POST = "ADD-POST";
const LIKE_POST = "LIKE-POST";
const DISLIKE_POST = "DISLIKE-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_USERS_STATUS = "SET_USERS_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";
const UPDATE_MAIN_PHOTO = "UPDATE_MAIN_PHOTO";
const UPDATE_PROFILE = "UPDATE_PROFILE";
const ERROR_CONTACTS_MESSAGE = "ERROR_CONTACTS_MESSAGE";

let initialState = {
 posts : [
                    {id: 0, date: new Date(2021, 2, 21).toISOString(), message: "Hello, people", likesCount: 3, dislikesCount: 1},
                    {id: 1, date: new Date(2021, 2, 24).toISOString(), message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   ", likesCount: 15, dislikesCount: 4},
                    {id: 2, date: new Date(2021, 3, 17).toISOString(), message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   ", likesCount: 3, dislikesCount: 1},
                    {id: 3, date: new Date(2021, 3, 25).toISOString(), message: "It's my second post", likesCount: 15, dislikesCount: 4},
                    {id: 4, date: new Date(2021, 4, 4).toISOString(), message: "Yo", likesCount: 3, dislikesCount: 2},
                    {id: 5, date: new Date(2021, 4, 21).toISOString(), message: "Joy", likesCount: 15, dislikesCount: 1}
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
                posts : [...state.posts, {id: state.posts.length + 1, date: new Date().toISOString(), message: action.text , likesCount: 0, dislikesCount: 0}]
            }
        };
        case LIKE_POST: {
            return {
                ...state,
                posts : state.posts.map(p => {
                    if (p.id === action.postId) {
                        return {...p, likesCount: p.likesCount + 1}
                    }
                    return p;
                })
            }
        };
        case DISLIKE_POST: {
            return {
                ...state,
                posts : state.posts.map(p => {
                    if (p.id === action.postId) {
                        return {...p, dislikesCount: p.dislikesCount + 1}
                    }
                    return p;
                })
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
export const likePost = (postId) => ({type: LIKE_POST, postId: postId});
export const dislikePost = (postId) => ({type: DISLIKE_POST, postId: postId});
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