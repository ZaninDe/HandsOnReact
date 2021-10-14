import React from "react";
import { Link } from "react-router-dom";

function User() {
  return(
    <div>
      <h1>USER</h1>
      <p>Gabriel Zanin de Oliveira</p>
      <p>Engenheiro de Software</p>

      <Link to="/">Return Home Page</Link>
    </div>
  )
}

export default User;