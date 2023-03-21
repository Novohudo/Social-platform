import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

//основа Диалогов++++++++++++++++++++++++++++++++++++++++++++++++++++
const DialogItem = ({ icon, name, id }) => {
 let path = "/Dialogs/" + id;
 return (
  <NavLink to={path} className={({ isActive }) => (isActive ? s.active : "")}><img src={icon} alt="#" />{name}</NavLink>
 );
};

export default DialogItem;