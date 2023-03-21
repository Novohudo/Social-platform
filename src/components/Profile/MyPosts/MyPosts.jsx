import s from "../MyPosts/MyPosts.module.css";
import Post from "../Post/Post";
import React from "react";
import { AddNewPostFormRedux } from "./AddNewPostForm/AddNewPostForm";

const MyPosts = ({ postData, addPost }) => {
 let postElements =
  [...postData]
  .reverse()
  .map((info) => (
   <Post message={info.message} likesCount={info.likesCount} key={info.id} />
  ));

 let addNewPost = (values) => {
  addPost(values.newPostText);
 };

 return (
  <div className={s.post}>
   <p>My Post</p>
   <AddNewPostFormRedux onSubmit={addNewPost} />
   <div className={s.item}>
    <div className={s.item__intro}>New post</div>
    {postElements}
   </div>
  </div>
 );
};


export default MyPosts;
