import "./App.css";
import React, { useState } from "react";
import NewPostForm from "./Components/NewPostForm/NewPostForm";

function App() {
  const [posts, setPosts] = useState([{ name: "Nada", body: "It's cold outside.", likedStatus: false }]);

  return (
    <div>
      <NewPostForm />
    </div>
  );
}

export default App;
