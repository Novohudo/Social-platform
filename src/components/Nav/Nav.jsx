import s from "../Nav.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./friends/Friends.jsx";
//className={({ isActive }) =>  (isActive ? s.active : "")}-функция изменения содержания активного элемента-т.е окраска
const Nav = ({ sidebar }) => {

 let friendData = sidebar.friInfo.map((key) => (
  <Friends image={key.img} name={key.name} id={key.id} />
 ));

 return (
  <nav className={s.nav}>
   <div className={s.item}>
    <NavLink
     to="/profile"
     className={({ isActive }) => (isActive ? s.active : "")}
    >
     Profile
    </NavLink>
   </div>
   <div className={s.item}>
    <NavLink
     to="/Dialogs"
     className={({ isActive }) => (isActive ? s.active : "")}
    >
     Messages
    </NavLink>
   </div>
   <div className={s.item}>
    <NavLink
     to="/Users"
     className={({ isActive }) => (isActive ? s.active : "")}
    >
     Users
    </NavLink>

   </div>
   <div className={s.item}>
    <NavLink
     to="/News"
     className={({ isActive }) => (isActive ? s.active : "")}
    >
     News
    </NavLink>
   </div>
   <div className={s.item}>
    <NavLink
     to="/Music"
     className={({ isActive }) => (isActive ? s.active : "")}
    >
     Music
    </NavLink>
   </div>
   <div className={s.friends}>
    <p>Friends</p>
    {friendData}
   </div>
  </nav>
 );
};

export default Nav;
