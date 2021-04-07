import React, { useState } from "react";

function Counter(props) {
  // const [count, setCount] = React.useState(0)
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + props.step)}>
        + {props.step}
      </button>
      <button onClick={() => setCount(count - props.step)}>
        - {props.step}
      </button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}

export default Counter;
