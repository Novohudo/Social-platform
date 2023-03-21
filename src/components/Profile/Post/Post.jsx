import React from "react";
import s from "./Post.module.css";
import user from "../../../img/user.png";

const Post = ({ message, likesCount }) => {

 return (
  <div className={s.posts}>

   <div className={s.posts__com}>
    <img src={user} alt="ups!" />
    {message}<span>like</span>{likesCount}
   </div>
  </div>
 );
};
export default Post;