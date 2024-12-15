import React, { Component} from "react";
import { Link } from "react-router-native";
import { View, Text, TextInput, Button } from 'react-native';
import { Header } from 'react-native-elements';

const LoginFormDisplay = (props) =>
{
  return(
    <View>
      <Header centerComponent={{ text: 'Todo List' }} />
      <Text>Username:</Text><TextInput name="username" type="text" onChange={props.onChangeUser} value={props.username} />
      <Text>Password:</Text><TextInput secureTextEntry={true} name="password" type="password" onChange={props.onChangePassword} value={props.password} />
      <Button onPress={props.onSubmit} title="Log-in" />
      <Link to="/register"><Text>Register</Text></Link>
    </View>
  );
}

export default LoginFormDisplay;
