import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "39544031-3a56-48df-8f03-94e3b9d85b14"
      },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`

});


export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    }
}


export const followAPI = {
    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    }
}


export const profileAPI = {
    setProfile(id) {
        return instance.get(`profile/${id}`)
        .then(response => {
            return response.data;
        })
    }
}


export const authAPI = {
    getAuthData(id, email, login) {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data;
        })
    }
}




