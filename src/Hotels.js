import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderHotel from './components/layout/HeaderHotel';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';


import './App.css';

class Hotels extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  // Add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <HeaderHotel />
            

            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                <br/><br/><br/><br/>
                <p style={Style}>Stay at the Grand Hotel
</p>
                <br/>
                <p style={Style2}>Built in 1891 as the home for the governor of Sri Lanka, Sir Edward Barnes, 
                the now Grand Hotel is the perfect place to spend the night the right way in Nuwara Eliya. 
                The hotel has great dining options and a lovely high tea. They can also organize activities 
                like trekking, fishing, and sunrise safaris.</p>
                    <br />
                    <p style={Style}>Hi Lanka Hotele</p>
                <br/>
                <p style={Style2}>Set amongst the scenic landscapes of tea plantation, 2 km from Nuwara 
                eliya city, every room at this hotel is equipped with heated indoor swimming pool along 
                with a picturesque view.</p> 

                    <br />

                    <p style={Style}>Galway Heights Hotel</p>
                <br/>
                <p style={Style2}>Set in Nuwara Eliya, within 2.5 km of Gregory Lake and 7 km of Hakgala 
                Botanical Garden, Galway Heights Hotel features a garden.</p>

                

              </React.Fragment>
              
            )} />
            <Route path="/about" component={About} />
          </div>  
        </div>
      </Router>
    );
  }
}

const Style = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
  
}

const Style2 = {
  background: '#540',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
  
}

export default App;
