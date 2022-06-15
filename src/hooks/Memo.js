import React, { useState } from 'react';

function Memo() {
  const [number, setNumber] = useState(0)
  const squaredNum = squareNum(number);
  const [counter, setCounter] = useState(0);

  // function to square the value
  function squareNum(number) {
    console.log("squre value",number* number );
    return Math.pow(number, 2);
  }

  return (
    <div className="App">
      <h1>Use Memo</h1>
      <input type="number" placeholder="Enter a number"
        value={number} onChange={(e) => setNumber(e.target.value)}>
      </input>
      <div>OUTPUT: {squaredNum}</div>
      {/* <button type='submit'>submit</button> */}
    </div>
  );
}



export default Memo;
