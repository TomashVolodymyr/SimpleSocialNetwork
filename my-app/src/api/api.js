import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY' : 'e083bc33-7190-4f05-aae3-b7b205125218'}
});
export const usersAPI = {
    getUsers (currentPage = 1,pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId){
        return instance.post(`follow/${userId}`
        )
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId){
        console.log('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(userId);
    },
    getAuth() {
        return instance.get(`auth/me`);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`/profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`/profile/status/`, {status:status});

    },
    savePhoto(photoFile) {
        const formatData = new FormData();
        formatData.append('image', photoFile);

        return instance.put(`/profile/photo`, formatData, {headers: {'Content-Type': 'multipart/form-data'}});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },

    logout() {
        return instance.delete(`auth/login`);
    }
}
