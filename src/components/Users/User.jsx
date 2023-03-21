import React from "react";
import s from "./users.module.css";
import photo from "../../img/user.png";
import { NavLink } from "react-router-dom";


let User = ({ user, followingInProgress, follow, unfollow }) => {

 return (

  <div key={user.id} className={s.wrap}>
   
					<span className={s.firstBlock}>
						<div>
							<NavLink to={"/profile/" + user.id}>
								<img
         src={user.photos.large != null ? user.photos.small : photo}
         className={s.photoF}
         alt="ups!"
        />
							</NavLink>
						</div>

						<div>
							{user.followed ? (
        <button
         className={s.unfollowButton}
         disabled={followingInProgress.some((id) => id === user.id)}
         onClick={() => {
          unfollow(user.id);
         }}>Unfollow</button>
       ) : (
        <button
         className={s.followButton}
         disabled={followingInProgress.some((id) => id === user.id)}
         onClick={() => {
          follow(user.id);
         }}>Follow</button>
       )}
						</div>
     </span>

   <span className={s.secondBlock}>
						<span className={s.userName}>
							<div>{user.name}</div>
							<div>
								<span className={s.statusColor}>{user.status}</span>
							</div>
						</span>
						<span className={"s.userCountry"}>
							<div>{"user.location.city"}</div>
							<div>{"user.location.country"}</div>
						</span>
					</span>
  </div>
 );


};
export default User;
