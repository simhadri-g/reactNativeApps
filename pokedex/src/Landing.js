import React from 'react';
import {StyleSheet, Text, View, ImageBackground } from 'react-native';
import {Button} from 'native-base';
var img = require('../assets/icons/landing.jpg');

class LandingScreen extends React.Component{
  render(){
  return(

        <ImageBackground source = {img} style={styles.backgroundImage}>
            <View  style={styles.container}>
                <Text style = {styles.titleText}>
                  Welcome to POKEdex.
                </Text>
                <Button
                  block={true}
                  style = {styles.buttonStyle}
                  onPress = {()=>{} }>
                      <Text style={{color :'#fff'}}>Click here to find pokemon.</Text>
                </Button>
            </View>
        </ImageBackground>

  )
}
}

const styles =StyleSheet.create({

  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },

  backgroundImage: {
      flex:1,
      //marginTop:Platform.OS === 'android'?30:0,


},

titleText:{
  fontSize:30,
  color:'blue',
  alignItems:'center'

},
buttonStyle:{

  margin:10
}


});


export default LandingScreen;
