import * as axios from "axios";

const baseRequest = axios.create ({
    baseURL : "https://social-network.samuraijs.com/api/1.0/",
    withCredentials : true,
    headers: {
        "API-KEY" : "3c05f0aa-a48a-4d63-aa8e-47811ebda003"
    }
})

export const usersApi = {
    getUsers (activePage, countUsersOnPage) {
     return baseRequest.get(`users?page=${activePage}&count=${countUsersOnPage}`)
     .then(response => {
         return response.data 
     })
    },
    unfollow (userId) {
        return baseRequest.delete(`follow/${userId}`)
        .then(response => {
            return response.data 
        })
    },
    follow (userId) {
        return baseRequest.post(`follow/${userId}`)
        .then(response => {
            return response.data 
        })
    },
    authMe () {
        return baseRequest.get(`auth/me`)
        .then(response => {
            return response.data 
        })
    },
    login (email, password, rememberMe=false, captcha=null) {
        return baseRequest.post(`auth/login`, {email, password, rememberMe, captcha})
        .then(response => {
            return response.data 
        })
    },
    logout () {
        return baseRequest.delete(`auth/login`)
        .then(response => {
            return response.data 
        })
    },
    getUserInfo (userId) {
        return baseRequest.get(`profile/` + userId)
        .then(response => {
            return response.data 
        })
    },
    getUserStatus (userId) {
        return baseRequest.get(`profile/status/` + userId)
        .then(response => {
            return response.data 
        })
    },
    updateMainPhoto (photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return baseRequest.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            return response.data 
        })
    },
    updateMyStatus (status) {
        return baseRequest.put(`profile/status`, {status: status})
        .then(response => {
            return response.data 
        })
    },
    updateMyProfile (profile) {
        return baseRequest.put(`profile`, profile)
        .then(response => {
            return response.data 
        })
    },
    getCaptcha () {
        return baseRequest.get(`security/get-captcha-url`)
        .then(response => {
            return response.data 
        })
    },
}