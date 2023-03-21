import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
	postData: [
		{ id: 1, message: "hi,how are you?", likesCount: 0 },
		{ id: 2, message: "Geronimo!", likesCount: 1 },
		{ id: 3, message: "la kukaracha", likesCount: 0 },
		{ id: 4, message: "wilson poni", likesCount: 4 },
		{ id: 5, message: "karamba!", likesCount: 5 }
	],
	profile: null,
	status: ""
};
it("length of posts should be incremented", () => {
	//1.test data
	let action = addPostActionCreator("it-kamasutra");
	//2.action
	let newState = profileReducer(state, action);
	//3.expectation
	expect(newState.postData.length).toBe(6);

});

it("message of newPost should be correct", () => {
	//1.test data
	let action = addPostActionCreator("it-kamasutra");
	//2.action
	let newState = profileReducer(state, action);
	//3.expectation
	expect(newState.postData[5].message).toBe("it-kamasutra");
});

it("after deleting length of messages should be decrement", () => {
	//1.test data
	let action = deletePost(1);
	//2.action
	let newState = profileReducer(state, action);
	//3.expectation
	expect(newState.postData.length).toBe(4);
});

it("after deleting length shouldnt be decrement if id is incorrect", () => {
	//1.test data
	let action = deletePost(1000);
	//2.action
	let newState = profileReducer(state, action);
	//3.expectation
	expect(newState.postData.length).toBe(5);
});


