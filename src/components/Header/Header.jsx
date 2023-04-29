import React from "react";
import s from "../Header.module.css";
import pngegg from "../../img/pngegg.png";
import { NavLink } from "react-router-dom";
import alex from "../../img/alex.jpg";

const Header = ({ isAuth, login, logout }) => {

 return (
  <header className={s.header}>
   <img
    src={pngegg}
    alt="ups!"
   />

   <div className={s.loginBlock}>
    {isAuth ? <div className={s.userBlock}><img src={alex} alt="ups!" />
      <div>{login}</div>
      - <button onClick={logout}>Log Out</button></div> :
     <NavLink to={"/Login"} />}
   </div>
  </header>
 );
};

export default Header;

