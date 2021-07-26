import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Flashcard1 } from "../components/Flashcards";
//https://rapidapi.com/api-sports/api/covid-193/

export default function Home() {
  const [allCountries, setAllCountries] = useState([]);
  const [mostActive, setMostActive] = useState([]);
  const [mostTotal,setMostTotal] = useState([]);
  const [leastActive, setLeastActive] = useState([]);

  function findLeastActiveCases(countries) {
    var currentMin = null;
    var blacklist = ["Africa","Europe","North-America","Asia","South-America"]
    var found = [];
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < countries.length; j++) {
        if (currentMin == null && countries[j].continent != "All" && countries[j].country != "North-America") {
          currentMin = countries[j];
          currentTotal = countries[j]
          currentLeast = countries[j]
        } 
        else if (
          found.includes(countries[j]) == false &&
          countries[j].cases.total <
          currentMin.cases.total
            && countries[j].continent != "All" && blacklist.includes(countries[j].country) != true
        )
         {
          currentMin = countries[j];
        }
      }
      found.push(currentMin);
      currentMin = null;
    }
    return found
  }

  function findMostTotalCases(countries) {
    var currentMax = null;
    var blacklist = ["Africa","Europe","North-America","Asia","South-America"]
    var found = [];
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < countries.length; j++) {
        if (currentMax == null && countries[j].continent != "All" && countries[j].country != "North-America") {
          currentMax = countries[j];
          currentTotal = countries[j]
          currentLeast = countries[j]
        } 
        else if (
          found.includes(countries[j]) == false &&
          countries[j].cases.total >
            currentMax.cases.total
            && countries[j].continent != "All" && blacklist.includes(countries[j].country) != true
        )
         {
          currentMax = countries[j];
        }
      }
      found.push(currentMax);
      currentMax = null;
    }
    return found
  }

  function findMostActiveCases(countries) {
    var currentMax = null;
    var blacklist = ["Africa","Europe","North-America","Asia","South-America"]
    var found = [];
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < countries.length; j++) {
        if (currentMax == null && countries[j].continent != "All" && countries[j].country != "North-America") {
          currentMax = countries[j];
          currentTotal = countries[j]
          currentLeast = countries[j]
        } 
        else if (
          found.includes(countries[j]) == false &&
          countries[j].cases.active >
            currentMax.cases.active
            && countries[j].continent != "All" && blacklist.includes(countries[j].country) != true
        )
         {
          currentMax = countries[j];
        }
      }
      found.push(currentMax);
      currentMax = null;
    }
    return found
  }
  const [loaded] = useFonts({
    PoppinsBlack: require("../assets/fonts/Poppins-Regular.ttf"),
  });
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
        setMostActive(findMostActiveCases(temp));
        setMostTotal(findMostTotalCases(temp));
        setLeastActive(findLeastActiveCases(temp));
        setAllCountries(temp);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.flashcardContainer}>
        <Flashcard1 items = {mostActive} title = {"Most Active Cases"}></Flashcard1>
        <Flashcard1 items = {mostTotal} title = {"Most Total Cases"}></Flashcard1>
        <Flashcard1 items = {leastActive} title = {"Least Active Cases"}></Flashcard1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#2E2E2E",
    alignItems: "center",
    justifyContent: "center",
  },
  standardContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2E2E2E",
    padding: 30,
  },
  flashcardContainer: {
    minWidth: "100%",
    padding: 40,
    flex: 1,
    backgroundColor: "#2E2E2E",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  textStandard: {
    fontFamily: "PoppinsBlack",
    fontSize: 20,
    color: "#FF5454",
  },
});
