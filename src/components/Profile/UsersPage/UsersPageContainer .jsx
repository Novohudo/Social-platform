import React from "react";
import UsersProfile from "../UsersPage/Users_Profile";
import { connect } from "react-redux";
import { getStatus, getUserProfile} from "../../../redux/profile-reducer";
import { useNavigate, useLocation, useParams } from "react-router-dom";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

//!================================//!ЗДЕСЬ НЕ РАБОЧИЙ WITH-ROUTER НУЖНО ПРИМЕНЯТЬ ХУКИ!!!!!=============================================================

class UsersPageContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}

	render() {
		return (
			<UsersProfile
				{...this.props}
				profile={this.props.profile}
				users={this.props.users}
				status={this.props.status}
			/>
		);
	}
}
let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	users: state.usersPage.users,
	status:state.profilePage.status,
});

//!================= Эмулятор Хуков ======================
const withRouter = (UsersPageContainer) => {
	const ComponentWithRouterProp = (props) => {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<UsersPageContainer {...props} router={{ location, navigate, params }} />
		);
	};
	return ComponentWithRouterProp;
};
//!=============================================
//?====================== HOC и функция Compose =============================
//?........................................................
export default compose(
	connect(mapStateToProps, { getUserProfile,getStatus}),
	withRouter,
)(UsersPageContainer);
//?...........................................................
//?==========================================================
