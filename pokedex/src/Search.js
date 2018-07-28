import React from 'react';
import {Text ,View ,StyleSheet} from 'react-native';
import {Header,Icon,Input,Item,Button} from 'native-base';
import LoadingScreen from './LoadingPage';
import PokemonScreen from './PokemonPage';


class SearchScreen extends React.Component{

state = {
  pokeSearch:"",
  onCall:true

}
searchPokemon=()=>{

}

renderBody=()=>{
  if (this.state.onCall) {
    return(
      <PokemonScreen/>
    )

  }
  else{
    return(
      <LoadingScreen/>
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
