import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native';
import { SearchButton } from '../components/Buttons';
import { proc } from 'react-native-reanimated';
import { Flashcard1, Flashcard2 } from '../components/Flashcards';
export default function Search() {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [input,setInput] = useState('');
  function processSearch() {
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].country.toLowerCase() == input.toLowerCase()) {
        setCurrentCountry(countries[i]);
        alert(`Found country: ${countries[i].country}`);
        return
      }
    }
    alert("Sorry, that is an invalid input");
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
        setCountries(temp);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return(
      <View style = {styles.mainContainer}>
        <View style = {styles.horizontalContainer}>
          <TextInput  style = {styles.inputBox} placeholder={"Enter a country"} onChangeText = {(value)=>setInput(value)}></TextInput>
          <SearchButton onPress = {()=>processSearch()}/>
        </View>
        {currentCountry != null ? <Flashcard2 item = {currentCountry}/>:<View/>}
      </View>
  );
}




const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    backgroundColor: '#2E2E2E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
  },
  inputBox: {
    backgroundColor: 'white',
    width: 150,
    height: 50,
    borderRadius: 10,
    padding: 10,
  }
  
})