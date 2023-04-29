import React from "react";
import s from "../Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./Profile_Info/profile_info";

const Profile = (props) => {
	return (
		<div className={s.content}>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
			<MyPostsContainer profile={props.profile} users={props.users}/>
		</div>
	);
};

export default Profile;
