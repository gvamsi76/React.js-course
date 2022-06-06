import React from 'react'

function FunEvent() {
    const onClick = () => {
        alert("hello welcome")
    }
    return (
        <div>
            <h2>hi </h2>
            <button onClick={onClick}>Button</button>
        </div>
    )
}

export default FunEvent