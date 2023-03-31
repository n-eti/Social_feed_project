import "./App.css";
import React, { useState } from "react";
import PostList from "./Components/PostList/PostList";
import NewPostForm from "./Components/NewPostForm/NewPostForm";

function App() {
  const [posts, setPosts] = useState([{ name: "Nada", body: "It's cold outside.", likedStatus: false }]);

  return (
    <div>
      <NewPostForm />
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
