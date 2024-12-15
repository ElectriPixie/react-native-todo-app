import React, { Component } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import InputTodo from './InputTodo';
import ListTodo from './ListTodo';

class Todo extends Component {
  constructor(){
    super()
    this.state = { todos: [] }
    this.deleteTodo = this.deleteTodo.bind(this);
  } 
  
  componentDidMount(){
    this.getTodos();
  }
  
  getTodos = () => {
    axios.get('http://10.0.2.2:4000/todo', { headers: {Authorization: "Bearer " + this.props.token } })
      .then( res => {
        if(res.data){
          this.setState({
            todos: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }
 
  deleteTodo = (id) => {
    console.log(id)
    axios.delete(`http://10.0.2.2:4000/todo/${id}`, { headers: {Authorization: "Bearer " + this.props.token } })
      .then(res => {
        if(res.data){
          this.getTodos()
        }
      })
  }

  render() {
    let { todos } = this.state;
    
    return(
      <View>
        <Header centerComponent={{ text: 'Todo List' }} />
        <InputTodo getTodos={this.getTodos} token={this.props.token} />
        <ListTodo todos={todos} deleteTodo={this.deleteTodo} />
      </View>
    )
  }
}

export default Todo;
