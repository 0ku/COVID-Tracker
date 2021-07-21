import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Flashcard1 } from "../components/Flashcards";//    
import { Overlay, Button } from "react-native-elements";

const Entry = (props) => {
  return(
      <View>
          <Text style = {styles.header2}>{props.header}</Text>
          <Text style = {styles.text1}>{props.value}</Text>
      </View>
  );
}
export const OverlayInfo = (props) => {
  console.log(props.item)
  return(
    <View style = {styles.mainContainer}>
      <Text style = {styles.header1}>
        {props.item.country}
      </Text>
      <Entry header = "Population" value = {props.item.population}>  </Entry>
      <Entry header = "New Cases" value = {props.item.cases.new}> </Entry>
      <Entry header = "Active Cases" value = {props.item.cases.active}>  </Entry>
      <Entry header = "Total Cases" value = {props.item.cases.total}>  </Entry>
      <Entry header = "Recovered" value = {props.item.cases.recovered}></Entry>
    </View> 
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100%',
    minHeight:'70%',
  },
  header1: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  header2: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  text1: {
    padding: 10,
  }
  });