import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import axios from 'axios';

class InputTodo extends Component {
  state = { action: "" }
  addTodo = (e) => {
    e.preventDefault();
    const task = {action: this.state.action}
    if(task.action && task.action.length > 0){
      console.log("Sending Token: ", this.props.token);
      axios.post('http://10.0.2.2:4000/todo', task, { headers: {Authorization: "Bearer " + this.props.token } })
        .then( res => {
          if(res.data){
           this.props.getTodos();
           this.setState({action: ""})
          }
        })
        .catch(err => console.log(err))
    }else{
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    const { eventCount, target, text} = e.nativeEvent;
    this.setState({action: text});
  }
  
  render() {
    let { action } = this.state;
    return (
      <View>
        <TextInput onChange={this.handleChange} value={action} />
        <Button onPress={this.addTodo} title="add todo" />
      </View>
    )
  }
}

export default InputTodo
