import { useState } from "react";
export default function AddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your logic to create the post here (e.g., send data to a server)
    console.log("Creating post:", { title, description });
    // Clear form fields after submission
    setTitle("");
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit} className="create-post-form">
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <br />
      <button type="submit">Create Post</button>
    </form>
  );
}
