import React from 'react';
import {Link} from 'react-router-dom'


export default function Nav(){
    return (
        <ul class="nav ">
            <li class="nav-item">
                <Link class="nav-link active myContainer" to="/">Todos</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/add-form">Add Todo</Link>
            </li>
        </ul>
    )
}