import React, { useEffect, useState } from "react";
import s from "./profile_info.module.css";
import { getMouseEventProps } from "@testing-library/user-event/dist/keyboard/getEventProps";
//...............................Hooks.....................................
const ProfileStatusWithHooks = (props) => {
 let [editMode, setEditMode] = useState(false);
 let [status, setStatus] = useState(props.status);

 useEffect(() => {
  setStatus(props.status);
 }, []);


 const activateEditMode = () => {
  setEditMode(true);
 };
 const deactivateEditMode = () => {
  setEditMode(false);
  props.updateStatus(status);
 };

 //при вводе данных
 const onStatusChange = (e) => {
  setStatus(e.currentTarget.value);
 };

 return (
  <div className={s.statusBlock}>
   {!editMode &&
    <div>
     <span onClick={activateEditMode}>{props.status || "-------"}</span>
    </div>
   }
   {editMode &&
    <div>
     <input onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
            autoFocus={true}
     />
    </div>
   }
  </div>
 );
};
export default ProfileStatusWithHooks;



