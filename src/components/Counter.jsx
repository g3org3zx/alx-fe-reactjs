// Counter.jsx
//  This is our Counter component. It will show a number and let us increase, decrease, or reset it.

import { useState } from "react"; // 👈 Import the "useState" hook so we can use state in this component

function Counter() {
  //  Create a state variable called "count" and a function "setCount" to update it
  // We start with 0 as the default value
  const [count, setCount] = useState(0);

  //  Functions to change the count value
  const increase = () => setCount(count + 1); // Add 1
  const decrease = () => setCount(count - 1); // Subtract 1
  const reset = () => setCount(0); // Go back to 0

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/*  Show the current count */}
      <p style={{ fontSize: "24px" }}>Current Count: {count}</p>

      {/*  Buttons to control the count */}
      <button onClick={increase} style={{ margin: "5px", padding: "10px" }}>
        Increment 
      </button>

      <button onClick={decrease} style={{ margin: "5px", padding: "10px" }}>
        Decrement 
      </button>

      <button onClick={reset} style={{ margin: "5px", padding: "10px" }}>
        Reset 
      </button>
    </div>
  );
}

export default Counter;
