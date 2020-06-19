import React from 'react';
import {Link} from 'react-router-dom'

export default function TodoList(props){
    return (
        <>
            {
                props.todos.map((todo) => {
                    return <p><Link to={`/todo/${todo._id}`}>{todo.name}</Link></p>
                })
            }
        </>
    )
}