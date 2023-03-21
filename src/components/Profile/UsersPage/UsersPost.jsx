import s from "../UsersPage/UsersPage.module.css";
import React from "react";
import Preloader from "../../common/Preloader"
import photo from "../../../img/user.png";
import UserStatus from "../UsersPage/UserStatus"


const UsersPost = (props) => {
	if (!props.profile){
    return <Preloader/>
  }
	return (
		<div className={s.userPage}>
		<p>About User</p>
			<div className={s.subscriberData}>
			
        <img src={props.profile.photos.large != null ? props.profile.photos.small : photo } alt="ups" className={s.userImage}/>
				<div className={s.profile}>
				<div className={s.profile_props}>
				<div>{props.profile.fullName || "---"}</div>
				<div>{props.profile.aboutMe || "---"}</div>
				<div>{props.profile.contacts.vk || "---"}</div>
				</div>
				</div>
      </div>
			<p>Status</p>
			<UserStatus status={props.status} updateStatus={props.updateStatus}/>
		</div>
	);
};

export default UsersPost;
