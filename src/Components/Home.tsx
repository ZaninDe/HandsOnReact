import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/user">User</Link>
          </li>

          <li>
            <Link to ="/tools">Tools</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home;