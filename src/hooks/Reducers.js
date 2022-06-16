import React, { useReducer } from 'react'


const initialSatate = { count: 0 }
function reducer (state, auction) {
    switch (auction.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}
function Counter (){
    const [state ,dispatch] = useReducer(reducer,initialSatate)

    return (
        <>
        Count : {state.count}
        <button onClick={()=>dispatch({type :'increment'})}>increment</button>
        <button onClick={()=>dispatch({type :'decrement'})}>decrement</button>
        </>
    )
}

export default Counter