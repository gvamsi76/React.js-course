import React, { useState } from 'react'

function Task() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false)

  function getData(val) {
    setData(val.target.value)
    setPrint(false)
  }

  return (
    <div>
      {
        print ?
          <h2>{data}</h2> : null
      }
      <input type="text" placeholder="enter your name" onChange={getData} />
      <button onClick={() => setPrint(true)} >Submit</button>
    </div>
  )
}

export default Task