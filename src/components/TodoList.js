import React from 'react';
import {Link} from 'react-router-dom'


export default function TodoList(props){
    return (
        <>
            {
                props.todos.map((todo, i) => {
                    return <p key={i}><Link to={`/todo/${todo._id}`}>{todo.name}</Link></p>
                })
            }
        </>
    )
}