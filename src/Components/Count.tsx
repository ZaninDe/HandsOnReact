import React, { useState } from "react";
import { Link } from "react-router-dom";

function Count() {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Hello Count</h1>

      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <button onClick={() => setCount(0)}>
        Restart
      </button>

      <button onClick={() => setCount(count + 10)}>
        Plus 10
      </button>

      <br/>
      <br/>
      <Link to="/tools">Return to Tools Page</Link>
    </div>
  )
}

export default Count;