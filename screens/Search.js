import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function Search() {
  return(
      <View style = {styles.mainContainer}>
        <TextInput  style = {styles.inputBox} placeholder={"Enter a country"}></TextInput>
      </View>
  );
}


useEffect(() => {
  var axios = require("axios").default;
  var options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "x-rapidapi-key": "b1ec1931a7msh0a647224d9daa39p194b65jsnf72505feddaf",
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      let temp = []
      for (var i = 0; i < response.data.response.length; i++) {
        temp.push(response.data.response[i])
        //setCountries(countries=>[...countries,response.data.response[i]]);
        //[active, new, total, recovered]
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}, []);


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    backgroundColor: '#2E2E2E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    position: 'absolute',
    top: 50,
    backgroundColor: 'white',
    width: 150,
    height: 50,
    borderRadius: 10,
    padding: 10,
    
  }
})