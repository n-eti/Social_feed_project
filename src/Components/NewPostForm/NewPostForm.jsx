import React, { useState } from "react";

const NewPostForm = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newEntry = { name: name, post: post };
    console.log(newEntry);
    props.createNewPost(newEntry)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type=""
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label>Post:</label>
        <input
          type=""
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />
      </div>
        <button type="submit">Create </button>
    </form>
  );
};

export default NewPostForm;
