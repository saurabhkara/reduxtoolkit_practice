import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>Saurabh</h1>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/posts/addpost">Add Post</Link>
          </li>
          <li>
            <Link to="/users/adduser">Add User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
