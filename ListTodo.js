import React from 'react';
import TodoItem from "./TodoItem";
import { ScrollView, View, Text } from "react-native";
import { List, ListItem } from 'react-native-elements';
import NoTodo from "./NoTodo";

const ListTodo = (props) => {
      console.log(props)
      return(
        <>
        <ScrollView>
        {
          props.todos.map(todo => {
            return(
              <ListItem key={todo._id} bottomDivider={true} onPress={() => props.deleteTodo(todo._id)}><Text>{todo.action}</Text></ListItem>
            )
          })
        }
        </ScrollView>
        </>
      )
}

export default ListTodo
