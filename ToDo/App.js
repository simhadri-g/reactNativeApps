import React from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default class App extends React.Component {
  state =
  {
    text:"This is our initial text",
    todo:""
  }
  addTodo=()=>{
    this.setState({todo:this.state.text})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <Text>Todo list</Text>
        <TextInput
        style = {styles.inputStyle}
        onChangeText = {(text)=>this.setState({text})}
        />
        <Button
        title = "Add todo"
        color = "green"
        onPress = {this.addTodo}/>
<Text>{this.state.todo}</Text>
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
