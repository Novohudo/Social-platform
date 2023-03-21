import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "7b16ac27-7af5-49ea-acf3-10c5bd7ad81f",
	},
});
export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data);
	},
	follow(id){
		return instance.post(`follow/${id}`)
	},
	unfollow(id){
		return instance.delete(`follow/${id}`)
	},
	getProfile(userId){
		console.warn('Obsolete method,please useprofileAPI object')
		return profileAPI.getProfile(userId);
		
	}
}
//--------------------------------
export const profileAPI = {
	getProfile(userId){
		return instance.get(`profile/` + userId);
		
	},
	getStatus(userId){
		return instance.get(`profile/status/` + userId);
	},
	updateStatus(status){
		return instance.put(`profile/status`, {status:status});//отправляем обьект на сервер
	}

}
//---------------------------------
export const authAPI = {
	me(){
		return instance.get(`auth/me`);
	},
	login(email,password,rememberMe = false){
		return instance.post(`auth/login`,{email,password,rememberMe})
	},
	logout(){
		return instance.delete(`auth/login`);
	}
}