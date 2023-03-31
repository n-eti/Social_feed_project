import React from "react";
import LikeButton from "../LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";

const PostList = (props) => {
  console.log(props.posts);

  return (
    <div>
      {props.posts.map((post) => {
        return (
          <div>
            <h3>{post.name}</h3>
            <p>{post.post}</p>
            <button type="Like" likedStatus="inactive">
              Like
            </button>
            <button type="Dislike" dislikedStatus="inactive">
              Dislike
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
