import { getAuthUserData } from "./redux/auth-reducer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { connect, Provider } from "react-redux";
import store from "./redux/redux-store";
import "./App.css";
import NavContainer from "./components/Nav/NavContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./Login/Login";
import Loader from "./utilites/Loader";

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
    <React.Suspense fallback={<div style={{ margin: "0 auto" }}>Loading...</div>}>
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


let AppContainer = connect(null, { getAuthUserData })(App);

export let TestApp = () => {
 const [onStart, setOnStart] = useState(true);
 useEffect(() => {
  const timer = setTimeout(() => {
   setOnStart(false);
  }, 2000);
  return () => clearTimeout(timer);
 }, []);
 return (<BrowserRouter>
  <Provider store={store}>
   {onStart ?
    <div className={"intro-box"}>
     <div className={"items-block"}>
      <p className={"app-name"}>Social Platform</p>
      <div className={"loader"}><Loader /></div>
      <p className={"designer"}>designed by Aleksey Umrikhin</p></div>
    </div>
    : <AppContainer />}

  </Provider>
 </BrowserRouter>);
};
