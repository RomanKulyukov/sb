import React, { useState, useEffect } from "react";

function App() {
  //////////////

  const [counter, changeCounter] = useState(0);
  const [obj, objState] = useState({ text: "aloha", age: "26" });
  function older() {
    objState((prev) => {
      return { ...prev, age: +obj.age + 2 };
    });
  }
  //////////////

  const [parameter] = useState(10);
  function multiple() {
    changeCounter(counter + 20);

    changeCounter((prevStep) => prevStep + 20);
  }
  //////////////

  const [cm, cmState] = useState(0);

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={() => changeCounter(counter + parameter)}>+</button>
      <button onClick={() => changeCounter(counter - parameter)}>-</button>
      <button onClick={multiple}>+40</button>
      <div>{`${obj.text} i'm ${obj.age} years old`}</div>
      <button onClick={older}>make me older</button>
      <div>{cm}</div>
      <button></button>
    </div>
  );
}
export default App;
