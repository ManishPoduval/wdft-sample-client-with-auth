import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {Switch, Route} from 'react-router-dom' 
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Nav from './components/Nav'
import axios from 'axios'
import TodoDetail from './components/TodoDetail'
import EditTodo from './components/EditTodo'
import {withRouter} from 'react-router-dom'


class App extends React.Component {

  state = {
    todos: []
  }

  componentDidMount(){
      console.log(this.props)
      axios.get('http://localhost:5000/api/todos')
        .then((res) => {
            this.setState({
              todos: res.data
            })
        })
  }

  handleAddTodo = (e) => {
      e.preventDefault()
      let name = e.target.name.value
      let description = e.target.description.value

      axios.post('http://localhost:5000/api/create', {
        name: name,
        description: description
      })
      .then((res) => {
        this.setState({
          todos: [...this.state.todos, res.data]
        }, () => {
          this.props.history.push('/')
        })
        // this.setState({} , function)
      })
  }

  handleDelete = (id) => {
      //filter todos
      let newTodos = this.state.todos.filter((todo) => {
          return todo._id !== id
      })

      this.setState({
        todos: newTodos
      }, () => {
        this.props.history.push('/')
      })
      console.log(this.state.todos)
  }

  render(){
    return (
      <>
        <Nav />
        <h3>My Shopping List</h3>
        <Switch>
            <Route exact path="/"  render={() => {
              return <TodoList todos={this.state.todos} />
            }}/>
            <Route path="/add-form" render={(routeProps) => {
              return <AddTodo onAdd={this.handleAddTodo} {...routeProps} />
            }}/>
           <Route exact path="/todo/:id" render={(routeProps) => {
              return <TodoDetail afterDelete={this.handleDelete} {...routeProps} />
            }}/>
            <Route path="/todo/:id/edit" render={(routeProps) => {
              return <EditTodo {...routeProps} />
            }}/>
        </Switch>
      </> 
    )
  }
};


export default withRouter(App)

//Higher Order Component