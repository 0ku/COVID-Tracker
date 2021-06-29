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


export default function Home() {
  console.log(options)
  const [loaded] = useFonts({
    PoppinsBlack: require('../assets/fonts/Poppins-Regular.ttf'),
  });
  return(
      <ScrollView contentContainerStyle = {styles.mainContainer}>
          <Text style = {styles.textStandard}>This is a test</Text>
      </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStandard: {
    fontFamily: 'PoppinsBlack',
    fontSize: 20,
    color: '#FF5454'
  }
});