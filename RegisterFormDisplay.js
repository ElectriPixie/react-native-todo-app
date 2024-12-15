import React, { Component} from "react";
import { Link } from "react-router-native";
import { View, Text, TextInput, Button } from "react-native";

const RegisterFormDisplay = (props) =>
{
  return(
    <View>
      <Text>Username:</Text><TextInput name="username" type="text" onChange={props.onChangeUser} value={props.username} />
      <Text>Password:</Text><TextInput secureTextEntry={true} name="password" type="password" onChange={props.onChangePassword} value={props.password} />
      <Text>Confirm Password:</Text><TextInput secureTextEntry={true} name="confirmPassword" type="password" onChange={props.onChangeConfirm} value={props.confirmPassword} />
      <Button onPress={props.onSubmit} title="Register" />
      <Link to="/login"><Text>Login</Text></Link>
    </View>
  );
}

export default RegisterFormDisplay;
