import React, {Component} from "react";
import { View } from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";
import withAuth from './withAuth';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Todo from './Todo';

class App extends Component{
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: "",
      token: ""
    }
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser = (user, token) => {
    console.log("Setting Token: ", token);
    this.setState({
      loggedIn: true,
      username: user,
      token: token
    });
  }

  render(){
    const AuthTodo = withAuth(Todo);
    return(
    <NativeRouter>
      <Switch>
      <View>
        <Route exact path="/" render={(props) => <AuthTodo {...props} token={this.state.token} />} />
        <Route path="/login" render={(props) => <LoginForm {...props} loginUser={this.loginUser}/>} />
        <Route path="/register" render={(props) => <RegisterForm {...props} loginUser={this.loginUser} />} />
      </View>
      </Switch>
    </NativeRouter>
    );
  }
}

export default App;
