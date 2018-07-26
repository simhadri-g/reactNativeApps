import React from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default class App extends React.Component {
  state =
  {
    text:"This is our initial text",
    todo:["Learn react","learn react native"]
    }
  addTodo=()=>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo:arr,text:""});
  }

addRenderTodos=()=>{
  return(
    this.state.todo.map(t =>{
      return(
        <Text key={t}>{t}</Text>
      )
    })
  )
}

  render() {
    return (
      <View style={styles.container}>
        <Text>Todo list</Text>
        <TextInput
        style = {styles.inputStyle}
        onChangeText = {(text)=>this.setState({text})}
        value = {this.state.text}
        />
        <Button
        title = "Add todo"
        color = "green"
        onPress = {this.addTodo}/>
{this.addRenderTodos()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle:{
    width:300,
    height:40,
    borderColor:"green",
    borderWidth:2,
    padding:5


  }
});
