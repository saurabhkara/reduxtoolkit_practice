import { useState } from "react";
export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your logic to add the user here (e.g., send data to a server)
    console.log("Adding user:", { name, email });
    // Clear form fields after submission
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-user-form">
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <button type="submit">Add User</button>
    </form>
  );
}
