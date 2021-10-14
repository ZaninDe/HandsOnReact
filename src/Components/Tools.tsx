import React from "react";
import { Link } from "react-router-dom";

function Tools(){
  return(
    <div>
      <nav>
        <h1>TOOLS PAGE</h1>
        <ul>
          <li>
            <Link to="/count">Count</Link>
          </li>
        </ul>

        <Link to="/">Return to Home Page</Link>
      </nav>
    </div>
  )
}

export default Tools;