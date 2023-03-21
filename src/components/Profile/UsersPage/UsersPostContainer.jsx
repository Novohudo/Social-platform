import UsersPost from "../UsersPage/UsersPost";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile
	};
};
const UsersPostContainer = connect(mapStateToProps)(UsersPost);

export default UsersPostContainer;
