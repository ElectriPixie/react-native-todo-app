import React, { Component } from 'react';
import RegisterFormDisplay from './RegisterFormDisplay';
import axios from 'axios';

class RegisterForm extends Component{ 
  constructor(){
    super();
    this.state = {username: "", password: "", confirmPassword: ""};
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
  }
  handleChangeUser = (e) => {
    const { eventCount, target, text} = e.nativeEvent;
    this.setState({username: text});
  }
  
  handleChangePassword = (e) => {
    const { eventCount, target, text} = e.nativeEvent;
    this.setState({password: text});
  }

  handleChangeConfirm = (e) => {
    const { eventCount, target, text} = e.nativeEvent;
    this.setState({confirmPassword: text});
  }

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault(e);
    axios.post('http://10.0.2.2:4000/register', 
    { "username": this.state.username, "password": this.state.password, "confirmPassword": this.state.confirmPassword }
    )
    .then( res => {
      if (res.status === 200) {
        console.log("User Created Successfully");
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
      alert('Error Creating User');
    });
  }

  render(){
    return(
      <RegisterFormDisplay onChangeUser={this.handleChangeUser} onChangePassword={this.handleChangePassword} onChangeConfirm={this.handleChangeConfirm} onSubmit={this.handleSubmit} username={this.state.username} password={this.state.password} confirmPassword={this.confirmPassword} />
    );
  }
}

export default RegisterForm;
