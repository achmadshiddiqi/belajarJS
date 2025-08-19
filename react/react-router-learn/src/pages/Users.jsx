import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>Users</h1>
      <ul>
        <li>
          <Link to="/users/a">User A</Link>
        </li>
        <li>
          <Link to="/users/b">User B</Link>
        </li>
      </ul>
    </>
  );
}
