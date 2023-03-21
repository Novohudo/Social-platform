import { connect } from "react-redux";
import {
	requestUsers,
	follow,
	unfollow,
	setCurrentPage,
	toggleFollowingProgress,
} from "../../redux/users-reducer";
import Users from "./Users";
import React from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
	getPageSize,
	getUsers,
	getTotalUsersCount,
	getCurrentPage,
	getIsFetching,
	getFollowingInProgress,
} from "../../redux/user-selectors";

class UsersContainer extends React.Component {
	componentDidMount() {
		//ajax-запросы в функции(redux-store)
		const { currentPage, pageSize } = this.props;
		this.props.requestUsers(currentPage, pageSize);
	}

	onPageChanged = (pageNumber) => {
		const { pageSize } = this.props;
		this.props.requestUsers(pageNumber, pageSize);
	};

	//--------------------------------------------------------------------------
	render() {
		return (
			<>
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
					followingInProgress={this.props.followingInProgress}
				/>
			</>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	};
};
//?============= HOC и функция Compose ===============================
//action-callbacks=====================================
export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage,
		toggleFollowingProgress,
		requestUsers,
	})
)(UsersContainer);
//?=================================================
