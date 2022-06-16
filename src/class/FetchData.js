import React, { Component } from 'react'

export default class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoading: true,
                        items: result.items
                    });
                },

                (error) => {
                    this.setState({
                        isLoading: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoading, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoading) {
            return <div>Loading...</div>;

        } else {
            return (
                <ol>
                    {items.map(item => (
                        < li key={item.id} >
                            {item.userId} {item.title}
                        </li>
                    ))  }
                </ol >
            );
        }
    }
}