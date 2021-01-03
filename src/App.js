import React, { useState } from "react";
import "./App.css";

const App = () => {

  //Using useState for increment value on button click
  //useState(0) holds the initial value zero
  //count has the current value
  //setCount is a function and it has the updated value after clicking of the button
  let [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  }
  const DecNum = () => {
    setCount(count - 1);
  }
  const Reset = () => {
    setCount(count = 0);
  }

  return (
    <>
      <div className="div">
        <h1 className='h1'>{count}</h1>
        <button className="button1" onClick={IncNum}>Increment</button>
        <br />
        <button className="button2" onClick={DecNum}>Decrement</button>
        <br />
        <button className="button3" onClick={Reset}>Reset</button>
      </div>
    </>
  )
}

export default App;