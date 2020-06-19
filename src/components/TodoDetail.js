import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class TodoDetail extends React.Component{

    state = {
        todo: ''
    }

    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`http://localhost:5000/api/todos/${id}`)
            .then((res) => {
                this.setState({
                    todo: res.data
                })
            })
    }

    handleDeleteTodo = () => {
        let id = this.props.match.params.id
        axios.delete(`http://localhost:5000/api/todos/${id}`)
            .then(() => {
               // we will redirect here
               this.props.afterDelete(id)
            })
    }

    render(){
        if (!this.state.todo){
            return(
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        const {name, description} = this.state.todo
        let id = this.props.match.params.id
        return (
            <>
               <p>{name}</p>
               <p>{description}</p>
               <button type="submit" class="btn btn-primary">
                   <Link to={`/todo/${id}/edit`}>Edit</Link>
               </button>
               <button onClick={this.handleDeleteTodo} type="submit" class="btn btn-primary">Delete</button>
            </>
        )
    }
}