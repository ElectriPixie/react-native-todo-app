import React from 'react';
import View from 'react-native';
import ListItem from 'react-native-elements';

const ListTodoDisplay = (props) => {
  return(
    <ListItem>
      {props.children}
    </ListItem>
  )
}

export default ListTodoDisplay
