import { getAuthUserData } from "./redux/auth-reducer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useLayoutEffect } from "react";
import { connect, Provider } from "react-redux";
import store from "./redux/redux-store";
import "./App.css";
import NavContainer from "./components/Nav/NavContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login/Login";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const UsersPageContainer = React.lazy(() => import("./components/Profile/UsersPage/UsersPageContainer "));
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));




const App = (props) => {
 useLayoutEffect(() => {
  props.getAuthUserData();
 }, []);
 return (
  <div className="App_wrapper">
   <HeaderContainer />
   <NavContainer />
   <div className="App_wrapper__content">
    <React.Suspense fallback={<div>Loading...</div>}>
     <Routes>
      <Route path="/dialogs/*" element={<DialogsContainer />} />
      <Route path="profile" element={<ProfileContainer />} />
      <Route path="profile/:userId" element={<UsersPageContainer />} />
      <Route path="/news/*" element={<News />} />
      <Route path="/music/*" element={<Music />} />
      <Route path="/users/*" element={<UsersContainer />} />
      <Route path="/login/*" element={<Login />} />
     </Routes>
    </React.Suspense>
   </div>
  </div>
 );
};

//------------for App.test
let AppContainer = connect(null, { getAuthUserData })(App);

export let TestApp = () => {
 return (<BrowserRouter>
  <Provider store={store}>
   <AppContainer />
  </Provider>
 </BrowserRouter>);
};
