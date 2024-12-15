import React, { Component } from 'react';
import LoginFormDisplay from './LoginFormDisplay';
import axios from 'axios';

class LoginForm extends Component{ 
  constructor(){
    super();
    this.state = {username: "", password: "", redirect: false};
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeUser = (e) => {
    const { eventCount, target, text} = e.nativeEvent;
    this.setState({username: text});
  }

  handleChangePassword = (e) => {
    const { eventCount, target, text} = e.nativeEvent;
    this.setState({password: text});
  } 


  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault(e);
    axios.post('http://10.0.2.2:4000/authenticate', 
    { "username": this.state.username, "password": this.state.password }
    )
    .then(res => {
      if (res.status === 200) {
        console.log("logged in successfully");
        console.log("Recieved Token: ", res.data.token);
        this.props.loginUser(res.data.user, res.data.token);
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }

  render(){
    return(
      <LoginFormDisplay onChangeUser={this.handleChangeUser} onChangePassword={this.handleChangePassword} onSubmit={this.handleSubmit} username={this.state.username} password={this.state.password} />
    );
  }
}

export default LoginForm;
