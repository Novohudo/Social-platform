import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getStatus, getUserProfile, updateStatus } from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


function ProfileContainer(props) {
  return (
    <Profile
      {...props}
      profile={props.profile}
      users={props.users}
      status={props.status}
      updateStatus={props.updateStatus}
    />
  );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  users: state.usersPage.users,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),

  withAuthRedirect
)(ProfileContainer);
//?...........................................................
//?==========================================================
