import React, { useState } from 'react'

function FuncForm() {
  const [user, setUser] = useState(false)
  const [password, setPassword] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ user, password });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Functional Form</h2><br />
        <input type="text" placeholder='Enter Your Name' onChange={(e) => setUser({ user : e.target.value })} /><br /> 
        <input type="password" placeholder='Enter Your Password' onChange={(e) => setPassword({ password : e.target.value })} /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FuncForm