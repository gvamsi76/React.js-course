import React, { useEffect, useRef, useState } from 'react'

function Ref() {
   const [input,setInput] = useState("")
   const count = useRef(0)

   useEffect(()=>{
    count.current = count.current + 1
   })
  return (
    <div>
        <p>Render Count : {count.current}</p>
        <input  type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
    </div>
  )
}

export default Ref