import React from 'react';
import {Text ,View ,StyleSheet} from 'react-native';
import {Header,Icon,Input,Item,Button} from 'native-base';
import LoadingScreen from './LoadingPage';
import PokemonScreen from './PokemonPage';
import axios from 'axios';

class SearchScreen extends React.Component{

state = {
  pokeSearch:"",
  onCall:true,
  data:{

  }

}
searchPokemon=()=>{

this.setState({onCall:true})
var self = this;


axios.get('http://pokeapi.co/api/v2/pokemon/'+this.state.pokeSearch.toLowerCase())
.then(function(response){
  console.log(response.data);
  self.setState({ data:response.data});
  self.setState({onCall:false});


})
.catch(function(error){
  console.log(error);
});


}

renderBody=()=>{
  if (this.state.onCall) {
    return(
      <PokemonScreen/>
    )

  }
  else{
    return(
      <LoadingScreen  data = {this.state.data}/>
    )
  }
}

  render(){
      return(
        <View style = {styles.container}>
            <Header
                searchBar
                rounded
            >
                <Item>
                    <Icon name='ios-search' onPress={this.searchPokemon}   />
                    <Input
                        value = {this.state.pokeSearch}
                        placeholder = "Search pokemon"
                        onChangeText = {(pokeSearch)=>this.setState({pokeSearch})}
                    />
                </Item>
            </Header>
            {this.renderBody()}
        </View>
      )
  }
}

const styles = StyleSheet.create({
container:{
  flex:1,
  //justifyContent:'center',
  //alignItems:'center'
}

});

export default SearchScreen
