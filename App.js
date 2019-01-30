/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Button, Text} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {


  state = {
    placeName: "",
    places : []
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName : val
    });
  };

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === ""){
      return;
    }

    this.setState(prevState => {

      return {
        places: prevState.places.concat(prevState.placeName)
      };

    });

  };



  render() {

    const placesOutput = this.state.places.map((place , i) => (
      <Text key={i}>{place}</Text>
    ));

    return (
      <View style={styles.container}>

        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="An awesome place"
            value={this.state.placeName} 
            onChangeText={this.placeNameChangeHandler}
            style={styles.placeInput}/>

          <Button title="Add" style={styles.placeButton} onPress={this.placeSubmitHandler}/>

        </View>
        <View>
          {placesOutput}
        </View>
      </View>
      

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }, inputContainer: {
    //flex: 1,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  }, 
  placeInput:{
    width: "70%"

  }, placeButton:{
    width: "30%"
  }
});
