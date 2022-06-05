import React from 'react'

function FunProps(props) {
    return (
        <div>
            <h2>
                {props.text.name}<br /> {props.data}
            </h2>
        </div>
    )
}

export default FunProps