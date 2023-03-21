import MyPosts from "./MyPosts";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
 return {
  postData: state.profilePage.postData,
  newPostText: state.profilePage.newPostText,
  profile: state.profilePage.profile
 };
};
//==========================================
const mapDispatchToProps = (dispatch) => {
 return {
  addPost: (newPostText) => {
   dispatch(addPostActionCreator(newPostText));
  }
 };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
