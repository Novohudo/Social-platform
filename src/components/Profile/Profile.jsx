import React from "react";
import s from "../Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./Profile_Info/profile_info";

const Profile = (props) => {
	
	return (
		<div className={s.content}>
			{/* <div className={s.mainImage}>
				<img src="https://wallpaperaccess.com/full/5993631.jpg" alt="ups"></img>
			</div> */}
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
			<MyPostsContainer profile={props.profile} users={props.users}/>
		</div>
	);
};

export default Profile;
