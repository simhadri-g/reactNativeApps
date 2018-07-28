import React from 'react';
import { StyleSheet, Text, View,Platform, ImageBackground ,Image} from 'react-native';
import LandingScreen from './src/Landing' ;
import SearchScreen from './src/Search';
export default class App extends React.Component {

  state = {
    currentScreen:"LandingScreen"
  }
 switchScreen=(currentScreen)=>{
   this.setState({currentScreen})

 }
  renderScreen=()=>{
    if (this.state.currentScreen==='LandingScreen'){
      return(<LandingScreen  switchScreen={this.switchScreen}/>)
    }
    else if (this.state.currentScreen==='screen'){
      return(
        <SearchScreen />
      )
    }


  }
  render() {
    return (
      <View style={styles.container1}>
          {this.renderScreen()}
      </View>
    );
  }
}

const styles =StyleSheet.create({
  container1:{
    flex:1,
    marginTop:Platform.OS === 'android'?30:0

  }


});
