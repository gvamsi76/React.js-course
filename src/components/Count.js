import React, { useState } from 'react'

function Count() {
    const [count ,setCount] = useState(0)
  return (
    <div>
        <p>total numbers count :{count}</p>
        <input type="text" onChange={(e)=>setCount(e.target.value.length)}/>
    </div>
  )
}

export default Count