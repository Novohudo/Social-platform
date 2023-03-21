import s from "../UsersPage/UsersPage.module.css";
import React from "react";

const UserStatus =(props) => {
		return (
			<div className={s.statusBlock}>
					<div className={s.Userstatus}>
						{props.status || "-------" }
					</div>
			</div>
		);
}

export default UserStatus;
