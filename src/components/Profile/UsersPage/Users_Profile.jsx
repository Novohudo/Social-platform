import React from "react";
import s from "../UsersPage/UsersPage.module.css";
import UsersPostContainer from "../UsersPage/UsersPostContainer";

const UsersProfile = ({ profile, users, status, updateStatus }) => {

 return (
  <div className={s.content}>
   <UsersPostContainer profile={profile} users={users} status={status} updateStatus={updateStatus} />
  </div>
 );
};

export default UsersProfile;
