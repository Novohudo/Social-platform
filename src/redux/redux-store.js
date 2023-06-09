//!We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
//!попробовать Toolkit!

import { applyMiddleware, combineReducers, createStore ,compose } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
 profilePage: profileReducer,
 dialogsPage: dialogsReducer,
 sidebar: sidebarReducer,
 usersPage: usersReducer,
 auth: authReducer,
 form: formReducer
});

//Redux DevTools extension=========================
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));//для работы thunk-функции
//=================================================

window.store = store;

export default store;
