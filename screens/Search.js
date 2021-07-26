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