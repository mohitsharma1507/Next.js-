//const SingleProfilePost = async (props) => {
//const user = await props.params; this for server rendering
"use client";
import { use } from "react";
const SingleProfilePost = (props) => {
  const user = use(props.params);
  return (
    <h1>
      Dynamic username ={user.username} PostId ={user.postId}
    </h1>
  );
};

export default SingleProfilePost;
