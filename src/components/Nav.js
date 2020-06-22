import React from 'react';
import {Link} from 'react-router-dom'


export default function Nav(props){
    return (
        <ul className="nav ">
            <li className="nav-item">
                <Link className="nav-link active myContainer" to="/">Todos</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/add-form">Add Todo</Link>
            </li>
            {
                props.loggedInUser ? (
                    <li className="nav-item">
                            <button className="nav-link" onClick={props.onLogout}>Logout</button>
                    </li>
                ) : (
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sign-in">SignIn</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sign-up">SignUp</Link>
                        </li>
                    </>
                )
            }
        </ul>
    )
}