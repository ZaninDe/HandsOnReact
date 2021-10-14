import React from "react";
import { Link} from "react-router-dom";

function About(){
  return(
    <div>
      
      <h1>ABOUT</h1>
      <p>A Simple Page To Improve My Skills With React</p>

      <Link to="/">Return Home Page</Link>
    </div>
  )
}

export default About;