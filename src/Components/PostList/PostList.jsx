import React from "react";

const PostList = (props) => {
  console.log(props.posts);

 return (
    <div>
      {props.posts.map((post) => {
        return (
          <div>
            <h3>{post.name}</h3>
            <p>{post.post}</p>
          </div>
        )
      })}
 </div>
  );
}

export default PostList;
