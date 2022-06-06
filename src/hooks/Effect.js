import React, { useEffect, useState } from 'react'

function Effect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count);
    }, [count])
    return (
        <div>
            <h1> initial State{count}</h1>
            <button onClick={() => setCount(count - 1)}>decrement</button>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}

export default Effect