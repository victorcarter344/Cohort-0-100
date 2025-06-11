// Import React and the useState hook
// useState lets you add and manage state in a function component
import React, { useState } from 'react';

// Main App component (must be capitalized — React components always start with uppercase letters)
function App() {
  // Declare a state variable `count` and a function `setCount` to update it
  const [count, setCount] = useState(0);

  return (
    // JSX requires a single parent element (here it's a <div>)
    <div>
      {/* 
        We pass the state (count) and the update function (setCount) as props 
        to the child component. This is how components "talk" to each other in React.
      */}
      <CounterButton count={count} setCount={setCount} />
    </div>
  );
}

// React components must start with a capital letter (e.g., CounterButton)
// If you name it lowercase (e.g., `button`), React will treat it like an HTML tag instead
function CounterButton(props) {
  function onButtonClick() {
    // Call the setCount function with the updated count
    // `props.count` is passed from the parent (App), and we add 1 to it
    props.setCount(props.count + 1);
  }

  return (
    // JSX uses camelCase for events like onClick (NOT lowercase like in HTML)
    // Also: in JSX, use `className` instead of `class`, `htmlFor` instead of `for`, etc.
    <button onClick={onButtonClick}>
      {/* Display the current count */}
      Counter {props.count}
    </button>
  );
}

// Export the App component so it can be rendered by React
export default App;
