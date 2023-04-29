import { profileAPI, usersAPI } from "../api/api";

const DELETE_POST = "DELETE-POST";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
	postData: [
		{ id: 1, message: "hi,how are you?", likesCount: 0 },
		{ id: 2, message: "Geronimo!", likesCount: 1 },
		{ id: 3, message: "la kukaracha", likesCount: 0 },
	],
	profile: null,
	status: ""
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 3,
				message: action.newPostText,
				likesCount: 0
			};
			return {
				...state,
				postData: [...state.postData, newPost]
			};
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };
		case SET_STATUS:
			return {
				...state,
				status: action.status
			};
		case DELETE_POST:
			return { ...state, postData: state.postData.filter(p => p.id != action.id) };
		default:
			return state;
	}
};
//action POST
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (id) => ({ type: DELETE_POST, id });

//thunk
export const getUserProfile = (userId) => async (dispatch) => {
	let response = await usersAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
};
//..........................................................................
export default profileReducer;
