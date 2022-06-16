import React, { useEffect, useState } from 'react'

function FetchDataHook() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoadnig] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((results) => {
                setIsLoadnig(true);
                setItems(results)
            }, (error) => {
                setIsLoadnig(false);
                setError(error)
            })
    }, [])

    if (error) {
        return <div>Error :{error.massage}</div>
    } else if (!isLoading) {
        return <div>Loading ......</div>
    } else {

        return (
            <ul>
                {items.map(item =>(
                    <li key={item.id}>{item.name}{item.title}</li>
                ))}
            </ul>
        )
    }
}

export default FetchDataHook