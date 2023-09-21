import React from "react";
import { useState } from "react";
import { useCreatePostMutation } from "../api";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="the title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="body goes here"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create"}
        </button>
      </form>
    </div>
  );
}

export default CreatePost