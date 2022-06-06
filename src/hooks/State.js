import React, { useState } from 'react'

function State() {
    const [count ,setCount] =useState(0)
  return (
    <div>
        <h1> initial State{count}</h1>
        <button onClick={()=>setCount(count-1)}>decrement</button>
        <button onClick={()=>setCount(count+1)}>increment</button>
    </div>
  )
}

export default State