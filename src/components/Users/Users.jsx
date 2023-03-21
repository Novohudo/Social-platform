import React from "react";
import s from "./users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage,onPageChanged,pageSize,totalUsersCount,users, ...props }) => {


 return (
  <div className={s.usersWrapper}>
   <h2 className={s.h1}>Users</h2>

   <Paginator currentPage={currentPage}
              totalUsersCount={totalUsersCount}
              pageSize={pageSize}
              onPageChanged={onPageChanged} />

   {users.map((u) => <User user={u}
                           followingInProgress={props.followingInProgress}
                           unfollow={props.unfollow}
                           follow={props.follow}
                           key={u.id} />
   )}
  </div>
 );
}

export default Users;
