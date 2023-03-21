import img1 from "../img/dialogs/img1.jpg";
import img2 from "../img/dialogs/img2.jpg";
import img3 from "../img/dialogs/img3.jpg";
import img4 from "../img/dialogs/img4.jpg";
import img5 from "../img/dialogs/img5.jpg";
import fri from "../img/user.png";
import dialogsReducer from "./redux/dialogs-reducer";
import profileReducer from "./redux/profile-reducer";
import sidebarReducer from "./redux/sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			postData: [
				{ id: 1, message: "hi,how are you?", likesCount: 0 },
				{ id: 2, message: "its my first post", likesCount: 21 },
			],
			newPostText: "",
		},
		dialogsPage: {
			messagesData: [
				{
					id: 1,
					message:
						'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
				},
				{ id: 2, message: "hello" },
				{ id: 3, message: "fuck putin" },
				{ id: 4, message: "ke ke ke" },
				{ id: 5, message: "Americaa!" },
			],
			dialogsData: [
				{ img: img1, id: 1, name: "Anna" }, //переместить картинки сюда
				{ img: img2, id: 2, name: "Mihail" },
				{ img: img3, id: 3, name: "Daniil" },
				{ img: img4, id: 4, name: "Boris" },
				{ img: img5, id: 5, name: "Victor" },
			],
			newMessageText: "",
		},
		sidebar: {
			friInfo: [
				{ id: 1, name: "Henryk", img: fri },
				{ id: 2, name: "Iza", img: fri },
				{ id: 3, name: "Maksymus", img: fri },
			],
		},
	},
	//Методы======================================
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log("state is changed");
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		//actions-действия
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		// this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._callSubscriber(this._state);
	},
};

window.store = store;
export default store;

//повторить урок в месенджах
