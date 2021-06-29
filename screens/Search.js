import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/countries',
  headers: {
    'x-rapidapi-key': 'b1ec1931a7msh0a647224d9daa39p194b65jsnf72505feddaf',
    'x-rapidapi-host': 'covid-193.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});


export default function Search() {
  const [loaded] = useFonts({
    PoppinsBlack: require('../assets/fonts/Poppins-Regular.ttf'),
  });
  return(
      <ScrollView>
          <Text>This is a test</Text>
      </ScrollView>
  );
  
}