import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
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
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                <br/><br/><br/><br/>
                <p style={Style}>Victoria Park</p>
                <br/>
                <p style={Style2}>The main park in Nuwara Eliya is called Victoria Park, in honor of Queen 
                    Victoria’s 60th Jubilee coronation in 1897. The park spreads out on 27 acres of land 
                    and is full of foreign trees and flowers. It’s the perfect place for a fresh natural walk.
                    There is a little train for kids to enjoy with a playground too. At quiet times, plenty of 
                    native birds flock the trees and bridwatchers come to see them.</p>
                    <br />
                    <p style={Style}>Gregory Lake</p>
                <br/>
                <p style={Style2}>Gregory Lake is a huge lake in the middle of the Nuwara Eliya. There is a calm
                 park next to it with walkways and benches to rest on. There are horses roaming which are offered 
                 for rides, plus for a few hundred rupees, tourists can take a 20-minute speedboat ride on the lake. 
                 The cool air is lovely on the water and the sights are unbeatable. Gregory Lake was created by 
                 Governor William Gregory between 1872 and 1877. It was used for watersports during the British 
                 colonial period.</p> 

                    <br />

                    <p style={Style}>Ambewela Farm</p>
                <br/>
                <p style={Style2}>The largest and more prestigious dairy farm is also in Nuwara Eliya. Just a little 
                bit out of town and you reach the rolling hills of Ambewela where the cows roam free to graze in 
                turns. Visitors can see the milking stations of the dairy cows and see the calves in the nursery. 
                The cows are well taken care of and the visit is quite pleasant. The farm is pretty big so there 
                is a lot of walking. Drink a fresh glass of milk at the cafe station up the hill and buy some cheese
                 to eat.</p>
                 
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
