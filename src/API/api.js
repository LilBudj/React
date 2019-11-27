import * as axios from "axios";

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': '18aa65a3-39e0-43ca-bb81-efa88f3b1d7b'
        }

    }
);

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    followUser(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data.resultCode
        })
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data.resultCode
        })
    }

};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data
        })
    },
    setStatus(status) {
        return instance.put(`profile/status`, {status}).then(response => {
            return response
        })
    },
    uploadPhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {headers: {
            'Content-Type': 'multipart/form-data'
            }}).then(response => {
            return response
        })
    }
};

export const authAPI = {
    getAuthData() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    authLogin(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe}). then(response => {
            return response.data
        })
    },
    authLogout(){
        return instance.delete(`auth/login`).then(response => {
            return response.data
        })
    }
};
