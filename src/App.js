import "./App.css";
import React, { useState } from "react";
import PostList from "./Components/PostList/PostList";
import NewPostForm from "./Components/NewPostForm/NewPostForm";
import LikeButton from "./Components/LikeButton/LikeButton";
function App() {
  const [posts, setPosts] = useState([{ name: "Nada", post: "It's cold outside.", likedStatus: false }]);

function createNewPost(newPost){
  let allPosts = [...posts, newPost]
  setPosts(allPosts)
}
  return (
    <div>
      <NewPostForm createNewPost={createNewPost} />
      <PostList posts={posts}/>
<button type="Like" likedStatus = "inactive">Like</button>
    </div>
  );
}

export default App;
