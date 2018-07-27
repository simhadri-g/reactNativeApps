import React from 'react';
import { StyleSheet, Text, View,Platform, ImageBackground ,Image} from 'react-native';
import LandingScreen from './src/Landing' ;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container1}>
          <LandingScreen/>
      </View>
    );
  }
}

const styles =StyleSheet.create({
  container1:{
    flex:1,
    //marginTop:Platform.OS === 'android'?30:0,
  }


});
